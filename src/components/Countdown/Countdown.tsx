"use client"

import { useEffect, useState } from "react"
import config from "@/app/app.config"

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<string>("")

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const closeDate = new Date(config.closeDate)
      const difference = closeDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft("Competition has closed")
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      const parts: string[] = ["Competition closes in "]
      if (days > 0) parts.push(`${days} days`)
      if (hours > 0) parts.push(`${hours} hours`)
      if (minutes > 0) parts.push(`${minutes} minutes`)
      parts.push(`${seconds} seconds`)

      setTimeLeft(parts.join(" "))
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='countdown mb-5'>
      <h3>{timeLeft}</h3>
    </div>
  )
}

export default Countdown
