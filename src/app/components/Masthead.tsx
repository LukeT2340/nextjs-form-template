"use client"
import { useEffect } from "react"

const Masthead = () => {
	useEffect(() => {
		const loadMasthead = async () => {
			const module = await import("../js/masthead")
			module.default()
		}

		loadMasthead()
	}, [])

	return (
		<>
			<header className="masthead" />
			<footer className="masthead" />
		</>
	)
}

export default Masthead
