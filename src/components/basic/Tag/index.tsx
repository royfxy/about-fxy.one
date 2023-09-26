import React from "react"
import styles from "./index.module.scss"
import Typography from "../Typography"

export interface TagProps {
  children?: React.ReactNode
  onClick?: () => void
  [key: string]: unknown
}

const Tag: React.FC<TagProps> = ({ children, onClick, ...others }) => {
  return (
    <div
      className={`${styles.tag} ${onClick ? styles.clickable : undefined}`}
      onClick={onClick}
      {...others}
    >
      <Typography.Text type="secondary" size="s">
        {children}
      </Typography.Text>
    </div>
  )
}

export default Tag
