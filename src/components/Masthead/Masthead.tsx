"use client"
import { useEffect } from "react"

const Masthead = () => {
  useEffect(() => {
    const loadMasthead = async () => {
      const masthead = await import("@/js/masthead")
      masthead.default()
    }

    loadMasthead()
  }, [])

  return (
    <>
      <header className='masthead' />
      <footer className='masthead' />
    </>
  )
}

export default Masthead
