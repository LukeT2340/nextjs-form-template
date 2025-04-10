"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ToastContainer } from "react-toastify"
import Form from "@/components/Form"
import FormSubmitted from "@/components/Form/FormSubmitted"

const SectionOne: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false)

  return (
    <section className="section-one h-[calc(100vh-44px)] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/assets/images/form-background.jpg')]">
      <AnimatePresence mode='wait'>
        {submitted ? (
          <motion.div
            key='submitted'
            className='bg-form-background rounded-[7px] text-center py-[40px] px-[75px]'
            initial={{ opacity: 0, x: "50vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            exit={{ opacity: 0, x: "-50vw" }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
          >
            <FormSubmitted key='submitted' />
          </motion.div>
        ) : (
          <motion.div
            key='form'
            className='bg-form-background rounded-[7px] text-center py-[40px] px-[75px]'
            initial={{ opacity: 0, x: "50vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            exit={{ opacity: 0, x: "-50vw" }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
          >
            <Form setHasSubmitted={setSubmitted} />
          </motion.div>
        )}
      </AnimatePresence>
      <ToastContainer position='top-center' className='mt-[50px]' />
    </section>
  )
}

export default SectionOne
