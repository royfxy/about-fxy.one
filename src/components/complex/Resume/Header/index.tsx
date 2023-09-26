import React from "react"
import styles from "./index.module.scss"
import Typography from "@/components/basic/Typography"
import Divider from "@/components/basic/Divider"
import { ContactData } from "@/types/resume"

interface HeaderProps {
  name: string
  description: string
  contact: ContactData[]
}

const Header: React.FC<HeaderProps> = ({ name, description, contact }) => {
  return (
    <header className={styles.header}>
      <div className={styles.name}>
        <Typography.Text size="xxl">{name}</Typography.Text>
      </div>
      <div className={styles.contact}>
        <Typography.Text>
          {contact.map((item, index) => (
            <span
              key={item.name}
              className={item.printOnly ? "print-only" : undefined}
            >
              {index !== 0 ? <Divider type="vertical" /> : null}
              <Typography.Text>
                {item.link ? <a href={item.link}>{item.name}</a> : item.name}
              </Typography.Text>
            </span>
          ))}
        </Typography.Text>
      </div>
      <div className={styles.description}>
        <Typography.Text type="secondary">{description}</Typography.Text>
      </div>
      <Divider type="horizontal" />
    </header>
  )
}

export default Header
