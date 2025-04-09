"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Form from "../components/Form"
import FormSubmitted from "../components/FormSubmitted"

const SectionOne: React.FC = () => {
	const [submitted, setSubmitted] = useState<boolean>(false)

	return (
		<section className="section-one h-[calc(100vh-44px)] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/assets/images/form-background.jpg')]">
			<AnimatePresence mode="wait">
				{submitted ? (
					<motion.div
						key="formSubmitted"
						initial={{ opacity: 1, x: 400 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4 }}
					>
						<FormSubmitted />
					</motion.div>
				) : (
					<motion.div
						key="form"
						initial={{ opacity: 0, x: 400 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -400 }}
						transition={{ duration: 0.4 }}
					>
						<Form setSubmitted={setSubmitted} />
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	)
}

export default SectionOne
