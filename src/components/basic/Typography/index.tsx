import React from "react"
import styles from "./index.module.scss"

type TextType = "primary" | "secondary" | "disabled"

interface TextProps {
  children?: React.ReactNode
  type?: TextType
  size?: "xs" | "s" | "m" | "l" | "xl" | "xxl" | number
  strong?: boolean
  className?: string
  [key: string]: unknown
}

const Text: React.FC<TextProps> = ({
  children,
  type,
  size,
  strong,
  className,
  ...other
}) => {
  type = type ?? "primary"
  size = size ?? "m"
  strong = strong ?? false
  const elemType = strong ? "strong" : "span"

  return React.createElement(
    elemType,
    {
      className: `${className} ${styles.text} ${styles[type]} ${styles[size]}`,
      ...other,
    },
    children
  )
}

const Typography = {
  Text,
}

export default Typography
