import type { NextRequest } from "next/server"
import { Ratelimit } from "@upstash/ratelimit"
import { kv } from "@vercel/kv"

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(1, "10 m"),
})

export const config = {
  runtime: "edge",
}

export default async function middleware(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1"

  const { remaining } = await ratelimit.limit(ip)

  if (remaining === 0) {
    return new Response(
      JSON.stringify({
        message: "Rate limit exceeded. Please try again later.",
      }),
      {
        status: 429,
      }
    )
  }

  return null
}
