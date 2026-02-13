# IPSA Website - Deployment Guide

**Application:** IPSA Corporate Website (Next.js)
**Domain:** https://ipsa.scram2k.com
**Repository:** https://github.com/armando-entersys/ipsa-website
**Branch:** master
**Server:** prod-server (GCP e2-standard-4, us-central1-c)
**Server Path:** /srv/IPSA/Website

---

## Architecture

- **Framework:** Next.js 16.1.6 with `output: "standalone"`
- **Runtime:** Node.js 20 Alpine
- **Proxy:** Traefik v2.10 (auto SSL via Let's Encrypt)
- **Container:** `ipsa-web` on `traefik-public` network
- **Port:** 3000 (internal only, exposed via Traefik)
- **Resources:** 512MB RAM max, 0.5 CPU max

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
docker network ls | grep traefik-public
```

If it doesn't exist (unlikely on prod-server):
```bash
docker network create traefik-public
```

### 5. Build and deploy

```bash
docker compose up -d --build
```

### 6. Verify deployment

```bash
# Check container is running
docker compose ps

# Check logs
docker compose logs -f ipsa-web

# Check health
docker inspect --format='{{.State.Health.Status}}' ipsa-web

# Test the site
curl -s -o /dev/null -w "%{http_code}" https://ipsa.scram2k.com
```

---

## Update Deployment (Subsequent Deploys)

### Quick update (recommended)

```bash
cd /srv/IPSA/Website
git pull origin master
docker compose up -d --build
```

### Full rebuild (if something is stuck)

```bash
cd /srv/IPSA/Website
git pull origin master
docker compose down
docker compose build --no-cache
docker compose up -d
```

### Verify after update

```bash
docker compose ps
docker compose logs --tail=20 ipsa-web
curl -s -o /dev/null -w "%{http_code}" https://ipsa.scram2k.com
```

---

## Rollback

If something goes wrong after an update:

```bash
cd /srv/IPSA/Website

# Find the previous working commit
git log --oneline -5

# Rollback to specific commit
git checkout <commit-hash> .
docker compose up -d --build
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

## Troubleshooting

### Container won't start
```bash
docker compose logs ipsa-web
```

### Out of memory
The container is limited to 512MB. If it crashes with OOM:
```bash
# Check memory usage
docker stats ipsa-web --no-stream

# Increase limit temporarily in docker-compose.yml
# memory: 768M
```

### SSL certificate issues
Traefik handles SSL automatically. If certificate isn't working:
```bash
# Check Traefik logs
docker logs traefik 2>&1 | grep ipsa
```

### Build fails
```bash
# Clear Docker build cache
docker builder prune -f

# Rebuild from scratch
docker compose build --no-cache
```

---

## DNS Configuration

The domain `ipsa.scram2k.com` must point to the production server's IP.
DNS is already configured. If it needs to be updated:
- Type: A record
- Name: ipsa
- Value: (prod-server external IP)

---

## Monitoring

- Container metrics are automatically collected by cAdvisor + Prometheus
- Logs are aggregated via Loki
- Dashboard: https://monitoring.entersys.mx
- Health check runs every 30s via `wget http://localhost:3000`

---

## For Claude Code Agents

```
DEPLOYMENT SUMMARY:
1. SSH: gcloud compute ssh prod-server --zone=us-central1-c
2. Navigate: cd /srv/IPSA/Website
3. Pull: git pull origin master
4. Deploy: docker compose up -d --build
5. Verify: docker compose ps && curl -s -o /dev/null -w "%{http_code}" https://ipsa.scram2k.com

IMPORTANT:
- Always git pull before building
- Container name: ipsa-web
- Domain: ipsa.scram2k.com
- Network: traefik-public (external)
- Max memory: 512MB
- Health check: wget http://localhost:3000
```
