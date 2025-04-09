"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { ToastContainer } from "react-toastify"
import Form from "../components/Form"
import FormSubmitted from "../components/FormSubmitted"

const SectionOne: React.FC = () => {
	const [submitted, setSubmitted] = useState<boolean>(false)

	return (
		<section className="section-one h-[calc(100vh-44px)] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/assets/images/form-background.jpg')]">
			<AnimatePresence mode="wait">
				{submitted ? (
					<FormSubmitted key="submitted" />
				) : (
					<Form setSubmitted={setSubmitted} key="form" />
				)}
			</AnimatePresence>
			<ToastContainer />
		</section>
	)
}

export default SectionOne
