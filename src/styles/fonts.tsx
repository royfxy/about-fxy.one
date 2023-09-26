import { Inter, Noto_Sans_SC } from "next/font/google"

export const notoSansSC = Noto_Sans_SC({
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
})

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})
