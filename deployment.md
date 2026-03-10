# IPSA Website - Deployment Guide

**Application:** IPSA Corporate Website (Next.js)
**Production Domain:** https://ipsacv.com.mx
**Staging Domain:** https://ipsa.scram2k.com
**Repository:** https://github.com/armando-entersys/ipsa-website
**Branch:** master
**Server:** prod-server (GCP e2-standard-4, us-central1-c)
**Server Path:** /srv/IPSA/Website

---

## Architecture

- **Framework:** Next.js 16.1.6 with `output: "standalone"`
- **Runtime:** Node.js 20 Alpine
- **Proxy:** Traefik v2.10
- **SSL:** Let's Encrypt via Traefik (all domains) + Cloudflare proxy
- **Container:** `ipsa-web` on `traefik` network
- **Port:** 3000 (internal only, exposed via Traefik)
- **Resources:** 512MB RAM max, 0.5 CPU max

### Traefik Routing

Single router `ipsa-web` handles all domains with Let's Encrypt:
- `ipsacv.com.mx` (production)
- `www.ipsacv.com.mx` → 301 redirect to `ipsacv.com.mx`
- `ipsa.scram2k.com` (staging)

---

## Deploy from Local Machine (Recommended)

This is how we deploy. No need to SSH manually.

### Standard deploy (code changes only, no Dockerfile changes)

```bash
cd C:\IPSA\ipsa-web
git push origin master
gcloud compute ssh prod-server --zone=us-central1-c --command="cd /srv/IPSA/Website && git pull && docker compose up -d"
```

### Full rebuild (Dockerfile or dependency changes)

```bash
cd C:\IPSA\ipsa-web
git push origin master
gcloud compute ssh prod-server --zone=us-central1-c --command="cd /srv/IPSA/Website && git pull && docker compose build --no-cache && docker compose up -d"
```

### Verify after deploy

```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="docker ps | grep ipsa-web && docker inspect --format='{{.State.Health.Status}}' ipsa-web"
curl -sI https://ipsacv.com.mx/es | head -5
```

---

## First-Time Deployment

### 1. Connect to the server

```bash
gcloud compute ssh prod-server --zone=us-central1-c
```

### 2. Create the project directory

```bash
sudo mkdir -p /srv/IPSA/Website
sudo chown $USER:$USER /srv/IPSA/Website
cd /srv/IPSA/Website
```

### 3. Clone the repository

```bash
git clone https://github.com/armando-entersys/ipsa-website.git .
```

### 4. Verify Traefik network exists

```bash
docker network ls | grep traefik
```

If it doesn't exist (unlikely on prod-server):
```bash
docker network create traefik
```

### 5. Build and deploy

```bash
docker compose up -d --build
```

### 6. Verify deployment

```bash
docker compose ps
docker inspect --format='{{.State.Health.Status}}' ipsa-web
curl -s -o /dev/null -w "%{http_code}" https://ipsacv.com.mx
```

---

## Rollback

If something goes wrong after an update:

```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="cd /srv/IPSA/Website && git log --oneline -5"

# Then rollback to specific commit:
gcloud compute ssh prod-server --zone=us-central1-c --command="cd /srv/IPSA/Website && git checkout <commit-hash> . && docker compose up -d --build"
```

---

## Key Files

| File | Purpose |
|------|---------|
| `Dockerfile` | Multi-stage build (deps -> build -> production) |
| `docker-compose.yml` | Traefik labels, resource limits, health check |
| `.dockerignore` | Excludes node_modules, .next, .git from build context |
| `next.config.ts` | `output: "standalone"` for Docker optimization |

---

## DNS Configuration

### ipsacv.com.mx (Production - Cloudflare)

DNS managed in Cloudflare. Server IP: `34.59.193.54`

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | `ipsacv.com.mx` | `34.59.193.54` | Proxied (orange) |
| A | `www` | `34.59.193.54` | Proxied (orange) |

Cloudflare SSL/TLS mode: **Full (Strict)**

SSL certificate is issued by Let's Encrypt via Traefik HTTP challenge.

**If the Let's Encrypt cert expires or needs renewal:**
1. Set both A records to DNS only (grey cloud) temporarily
2. Restart ipsa-web container: `docker restart ipsa-web`
3. Wait 30s for Traefik to renew the cert
4. Set both A records back to Proxied (orange cloud)

### ipsa.scram2k.com (Staging)

Managed via existing Cloudflare zone for scram2k.com. Uses Let's Encrypt certificate via Traefik.

---

## Troubleshooting

### Container won't start
```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="cd /srv/IPSA/Website && docker compose logs ipsa-web"
```

### Out of memory
The container is limited to 512MB. If it crashes with OOM:
```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="docker stats ipsa-web --no-stream"
```

### SSL certificate issues
- **ipsacv.com.mx:** SSL is handled by Cloudflare. Check Cloudflare dashboard.
- **ipsa.scram2k.com:** Traefik handles SSL via Let's Encrypt:
```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="docker logs traefik 2>&1 | grep ipsa"
```

### Build fails
```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="docker builder prune -f && cd /srv/IPSA/Website && docker compose build --no-cache"
```

### 522 error on ipsacv.com.mx
This means Cloudflare can't reach the server. Check:
1. CNAME `ipsacv.com.mx` -> `ipsa.scram2k.com` exists and is proxied
2. Cloudflare SSL mode is "Full" (not Flexible, not Full Strict)
3. Container is running: `docker ps | grep ipsa-web`

---

## Monitoring

- Container metrics: cAdvisor + Prometheus (automatic)
- Logs: Loki (automatic)
- Dashboard: https://monitoring.entersys.mx
- Health check: every 30s via `wget http://localhost:3000`

---

## For Claude Code Agents

```
DEPLOYMENT STEPS:
1. Push: git push origin master
2. Deploy: gcloud compute ssh prod-server --zone=us-central1-c --command="cd /srv/IPSA/Website && git pull && docker compose up -d"
3. Verify: curl -sI https://ipsacv.com.mx/es | head -3

FULL REBUILD (if Dockerfile or deps changed):
1. Push: git push origin master
2. Deploy: gcloud compute ssh prod-server --zone=us-central1-c --command="cd /srv/IPSA/Website && git pull && docker compose build --no-cache && docker compose up -d"
3. Verify: curl -sI https://ipsacv.com.mx/es | head -3

KEY INFO:
- Container name: ipsa-web
- Production: ipsacv.com.mx (Cloudflare SSL)
- Staging: ipsa.scram2k.com (Let's Encrypt SSL)
- Network: traefik (external)
- Max memory: 512MB
- Server path: /srv/IPSA/Website
- Health check: wget http://localhost:3000
```
