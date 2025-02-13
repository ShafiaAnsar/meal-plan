import "./globals.css"
import { Poppins } from "next/font/google"
import type React from "react" // Import React

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body className="bg-gradient-to-br from-purple-100 to-blue-100 min-h-screen">{children}</body>
    </html>
  )
}

