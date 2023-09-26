import React from "react"
import styles from "./index.module.scss"
import Typography from "@/components/basic/Typography"

interface SectionProps {
  title: string
  children?: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title: name, children }) => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <Typography.Text type="secondary" size="l">
          {name}
        </Typography.Text>
      </div>
      {children}
    </div>
  )
}

export default Section
