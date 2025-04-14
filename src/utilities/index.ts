import { toast } from "react-toastify";
import { FormData } from "@/components/Form/form-schema";

/**
 * @description Handles form submission by sending a POST request to the server.
 * @param {FormData} data - The form data to be submitted.
 * @returns {Promise<boolean>} - Returns true if the submission was successful, false otherwise.
 */
export const handleSubmitForm = async (data: FormData): Promise<boolean> => {
  try {
    // Make post request to server
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Parse the response
    const dataResponse = await response.json();

    // Handle bad response
    if (!response.ok) {
      console.error(
        `Error submitting form: ${JSON.stringify(dataResponse.error)}`
      );
      toast.error(dataResponse.message || "error submitting form");
      return false;
    }

    // Handle success response
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
