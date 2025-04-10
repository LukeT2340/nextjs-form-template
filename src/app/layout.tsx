import Masthead from "@/components/Masthead"
import "./globals.css"
import { siteMetadata } from "./metadata"

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
