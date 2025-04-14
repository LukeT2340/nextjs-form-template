import { useEffect, useState } from "react";
import axios from "axios";

/**
 * @description Custom hook to check if the competition is open. Define close date in the api.config.ts config.
 * @returns { formIsOpen: boolean; checkingStatus: boolean; }
 * - formIsOpen: true if the form is open, false if closed;
 * - checkingStatus: true if the status is being checked, false otherwise.
 */
const useFormStatus = (): { formIsOpen: boolean; checkingStatus: boolean } => {
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false);
  const [checkingStatus, setCheckingStatus] = useState<boolean>(true);

  useEffect(() => {
    const fetchFormStatus = async () => {
      try {
        const response = await axios.get("/api/check-status");
        setFormIsOpen(response.status === 200);
      } catch (error) {
        setFormIsOpen(false);
        console.error("Error fetching form status:", error);
      } finally {
        setCheckingStatus(false);
      }
    };

    fetchFormStatus();
  }, []);

  return { formIsOpen, checkingStatus };
};

export default useFormStatus;
