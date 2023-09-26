import "./globals.css"
import "@/styles/colors.scss"
import "@/styles/fonts.scss"
import "@/styles/print.scss"
import type { Metadata } from "next"
import React from "react"
import { inter, notoSansSC } from "../styles/fonts"

export const metadata: Metadata = {
  title: "Xingyu Fu",
  description: "Xingyu Fu's personal website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSansSC.variable}`}>
        {children}
      </body>
    </html>
  )
}
