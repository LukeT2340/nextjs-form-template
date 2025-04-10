"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const FormSubmitted: React.FC = () => {
	return (
		<motion.div
			key="submitted"
			initial={{ opacity: 1, x: 400 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<Image
				src="/assets/images/thank-you.png"
				alt="Thank you"
				width={"565"}
				height={482}
			/>
		</motion.div>
	)
}

export default FormSubmitted
