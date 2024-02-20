import { NextRequest, NextResponse } from "next/server";
import { supabaseMiddleware } from "./services/supabase/middleware";
import { redirect, notFound } from "next/navigation";

const protectedPaths = ["/dashboard"];

const authRoutes = ["/login"];

// Function to retrieve subdomain data (replace with your logic)
async function fetchSubdomainData(subdomain: string) {
  // Replace with your logic to authenticate and retrieve subdomain data
  return {
    id: 1,
    // Include necessary data for routing and access control
  };
}

function authenticatedForSubdomain(subdomain: string): boolean {
  // Replace with your authentication logic using data sources, tokens, etc.
  // Example using a mock database:
  const allowedSubdomains = ["doren", "example", "third"];
  return allowedSubdomains.includes(subdomain);

  // Or use API calls, cookie checks, or other suitable methods.
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Extract subdomain and base domain
  const hostname = req.headers.get("host")!;
  const subdomainMatch = hostname.match(/^([^.]+)\.(.+)$/);
  const subdomain = subdomainMatch ? subdomainMatch[1] : "";
  const baseDomain = subdomainMatch ? subdomainMatch[2] : hostname;
  const searchParams = req.nextUrl.searchParams.toString();
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  if (subdomain === "app" && baseDomain === "localhost:3000") {
    const { data: sessionData } = await supabaseMiddleware(
      req
    ).auth.getSession();

    // if (!sessionData.session && path !== "/login") {
    //   return NextResponse.redirect(new URL("/login", req.url));
    // } else if (sessionData.session && path === "/login") {
    //   return NextResponse.redirect(new URL("/", req.url));
    // }

    return NextResponse.rewrite(
      new URL(`/app${path === "/" ? "" : path}`, req.url)
    );
  }

  if (subdomain && baseDomain === "localhost:3000") {
    const subdomainData = authenticatedForSubdomain(subdomain);

    if (!subdomainData) {
      return NextResponse.error(); // Or redirect to a custom error page
    }

    const { data: sessionData } = await supabaseMiddleware(
      req
    ).auth.getSession();

    if (!sessionData.session && path !== "/login") {
      return NextResponse.redirect(new URL("/login", req.url));
    } else if (sessionData.session && path === "/login") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.rewrite(
      new URL(`/${subdomain}${path === "/" ? "" : path}`, req.url)
    );
  }

  if (baseDomain === "localhost:3000" && !subdomain) {
    console.log("three");
    if (subdomain || path !== "/site") {
      return NextResponse.redirect(new URL("/site", req.url));
    }
  }

  console.log("four");
  // Fallback for unmatched requests
  return NextResponse.next();
}

// Implementation details for `authenticatedForSubdomain` and
// `hasNecessaryPermissions` based on your authentication/authorization logic
