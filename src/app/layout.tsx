import Masthead from "@/components/Masthead"
import "./globals.css"

export const metadata = {
  title: "My Page",
  themeColor: "#0A1633",
  other: {
    "og:site_name": "MASTHEAD",
    masthead: "9now",
  },
}

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
