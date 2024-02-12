import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/site", "/api/uploadthing"],
});

// See "Matching Paths" below to learn more
export const config = {
  //   matcher: "/about/:path*",
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/", "/api.*"],
  //   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
