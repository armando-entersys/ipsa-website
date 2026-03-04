"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

/**
 * Global click tracker using event delegation.
 * Automatically tracks: CTA clicks, phone, email, WhatsApp.
 * No need to modify individual page components.
 */
export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";

      // CTA → contact page
      if (href.includes("/contacto") || href.includes("/contact")) {
        trackEvent("cta_click", {
          cta_name: anchor.textContent?.trim().slice(0, 60) || "contact_link",
          cta_location: pathname,
          cta_type: "contact",
        });
      }

      // Phone
      if (href.startsWith("tel:")) {
        trackEvent("contact", {
          method: "phone",
          phone_number: href.replace("tel:", ""),
          page: pathname,
        });
      }

      // Email
      if (href.startsWith("mailto:")) {
        trackEvent("contact", {
          method: "email",
          email_address: href.replace("mailto:", ""),
          page: pathname,
        });
      }

      // WhatsApp
      if (href.includes("wa.me")) {
        trackEvent("contact", {
          method: "whatsapp",
          page: pathname,
        });
      }

      // Product/service navigation (engagement tracking)
      if (
        href.includes("/productos/") ||
        href.includes("/products/") ||
        href.includes("/servicios/") ||
        href.includes("/services/")
      ) {
        trackEvent("navigation", {
          destination: href,
          source: pathname,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
