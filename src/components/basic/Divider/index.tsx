import React from "react"
import styles from "./index.module.scss"

interface DividerProps {
  type?: "horizontal" | "vertical"
  className?: string
}

const Divider: React.FC<DividerProps> = ({ type, className }) => {
  type = type ?? "horizontal"
  return (
    <div className={`${styles.divider} ${styles[type]} ${className}`}></div>
  )
}

export default Divider
