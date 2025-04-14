import { NextResponse } from "next/server";

const rateLimitMap = new Map();

export default function rateLimitMiddleware(handler) {
  return (req, res) => {
    // There won't be a req.headers["x-vercel-forwarded-for"] header in local development
    // so we can skip the rate limiting check
    if (process.env.NODE_ENV === "development") {
      return handler(req, res);
    }

    const ip = req.headers["x-vercel-forwarded-for"];
    console.log(req.headers["x-vercel-forwarded-for"]);
    console.log(ip);
    if (!ip || ip.length === 0) {
      return NextResponse.json(
        { message: "Unable to verify submission source." },
        { status: 400 }
      );
    }

    console.log(rateLimitMap);
    const limit = 5;
    const windowMs = 60 * 1000;

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
      return NextResponse.json(
        { message: "Too many submission attempts. Please try again later." },
        { status: 429 }
      );
    }

    ipData.count += 1;

    return handler(req, res);
  };
}
