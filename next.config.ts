import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 828, 1080, 1200, 1400],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};

export default withNextIntl(nextConfig);
