import config from "@/app/api.config"

export const competitionHasClosed = (): boolean => {
  const now = new Date()
  const closeDate = config.closeDate
  return now > closeDate
}
