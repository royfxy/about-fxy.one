import React from "react"
import styles from "./index.module.scss"
import { SvgIconComponent } from "@mui/icons-material"

interface IconProps {
  IconName: SvgIconComponent
  className?: string
}

const Icon: React.FC<IconProps> = ({ IconName, className }) => {
  return <IconName className={`${className} ${styles.icon}`} />
}

export default Icon
