import { toast } from "react-toastify";
import { FormData } from "@/components/Form/form-schema";

export const handleSubmitForm = async (data: FormData): Promise<boolean> => {
  try {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataResponse = await response.json();
    if (!response.ok) {
      console.error(
        `Error submitting form: ${JSON.stringify(dataResponse.error)}`
      );
      toast.error(dataResponse.message || "error submitting form");
      return false;
    }

    toast.success("Form submitted successfully", {
      position: "top-center",
      autoClose: 3000,
    });

    return true;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error submitting form";
    toast.error(errorMessage);
    return false;
  }
};
