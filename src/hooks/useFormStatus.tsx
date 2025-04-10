import { useEffect, useState } from "react"
import axios from "axios"

/**
 * @description Custom hook to check if the competition is open.
 * @returns { formIsOpen: boolean; checkingStatus: boolean; } - Returns true if the form is open, false otherwise.
 */
const useFormStatus = (): { formIsOpen: boolean; checkingStatus: boolean } => {
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false)
  const [checkingStatus, setCheckingStatus] = useState<boolean>(true)

  useEffect(() => {
    const fetchFormStatus = async () => {
      try {
        const response = await axios.get("/api/check-status")
        setFormIsOpen(response.status === 200)
      } catch (error) {
        setFormIsOpen(false)
        console.error("Error fetching form status:", error)
      } finally {
        setCheckingStatus(false)
      }
    }

    fetchFormStatus()
  }, [])

  return { formIsOpen, checkingStatus }
}

export default useFormStatus
