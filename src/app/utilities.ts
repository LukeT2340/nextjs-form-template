import config from "@/app/app.config";

/**
 * @description Utility function to check if the competition has closed.
 * This function compares the current date and time to the one defined in app.config.ts.
 * @returns {boolean} - True if the competition has closed, false otherwise.
 */
export const competitionHasClosed = (): boolean => {
  const now = new Date();
  const closeDate = config.closeDate;
  return now > closeDate;
};
