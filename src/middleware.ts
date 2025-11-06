import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … if they start with static asset paths like `/images`, `/fonts`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: [
    // Match all pathnames except for specific exclusions
    '/((?!api|_next|_vercel|images|fonts|.*\\..*).*)'
  ]
};