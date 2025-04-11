import Masthead from "@/components/Masthead"
import { siteMetadata } from "./metadata"
import "./globals.css"

export const metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Masthead />
        {children}
      </body>
    </html>
  )
}
