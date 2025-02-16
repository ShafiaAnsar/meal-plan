import "./globals.css"
import { Poppins } from "next/font/google"
import { Providers } from '@/store/provider'
import { AuthCheck } from '@/components/AuthCheck'
import { Metadata } from 'next'
import { Toaster } from 'sonner'

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: 'Family Meal Planner',
  description: 'A family meal planner app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body className="bg-gradient-to-br from-purple-100 to-blue-100 min-h-screen">
        <Providers>
          <AuthCheck />
          <Toaster position="top-right" richColors />
          {children}
        </Providers>
      </body>
    </html>
  )
}

