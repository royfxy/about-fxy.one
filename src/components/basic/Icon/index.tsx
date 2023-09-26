import React from "react"
import styles from "./index.module.scss"
import { SvgIconComponent } from "@mui/icons-material"

interface IconProps {
  IconName: SvgIconComponent
  className?: string
}

const Icon: React.FC<IconProps> = ({ IconName, className }) => {
  return (
    <span className={`${className} ${styles.icon}`}>
      <IconName />
    </span>
  )
}

export default Icon
