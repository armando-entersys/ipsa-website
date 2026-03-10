import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(es|en)/:path*",
    "/((?!api|_next|images|videos|fonts|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)",
  ],
};
