import { NextRequest, NextResponse } from "next/server";
type EdgeHandler = (req: NextRequest) => Promise<NextResponse> | NextResponse;

const rateLimitMap = new Map();

export default function rateLimitMiddleware(handler: EdgeHandler) {
  return (req: NextRequest) => {
    if (process.env.NODE_ENV === "development") {
      return handler(req);
    }

    // Adjust header for deployment platform
    const ip = req.headers.get("x-vercel-forwarded-for");

    if (!ip || ip.length === 0) {
      return NextResponse.json(
        { message: "Unable to verify submission source." },
        { status: 400 }
      );
    }

    const limit = 5; // Number of allowed requests
    const windowMs = 1 * 60 * 1000; // 1 minutes in milliseconds

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, {
        count: 0,
        lastReset: Date.now(),
      });
    }

    const ipData = rateLimitMap.get(ip);

    if (Date.now() - ipData.lastReset > windowMs) {
      ipData.count = 0;
      ipData.lastReset = Date.now();
    }

    if (ipData.count >= limit) {
      console.log(`Rate limit exceeded for IP: ${ip}, 1 minute cooldown`);
      return NextResponse.json(
        { message: "Too many submission attempts. Please try again later." },
        { status: 429 }
      );
    }

    ipData.count += 1;

    return handler(req);
  };
}
