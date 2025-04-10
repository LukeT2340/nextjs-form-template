import axios, { AxiosError } from "axios"
import { toast } from "react-toastify"
import { FormData } from "@/components/Form/form-schema"

export const handleSubmitForm = async (data: FormData): Promise<boolean> => {
  try {
    await axios.post(`/api/submit`, data)
    return true
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>
    toast(
      axiosError.response?.data?.message ||
        axiosError.message ||
        "An error occurred"
    )
    return false
  }
}
