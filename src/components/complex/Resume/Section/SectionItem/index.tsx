import React from "react"
import Typography from "@/components/basic/Typography"

import styles from "./index.module.scss"
import Divider from "@/components/basic/Divider"
import { ResumeSectionItemData } from "@/types/resume"
import Tag from "@/components/basic/Tag"
import Icon from "@/components/basic/Icon"
import { ArrowForwardIosRounded } from "@mui/icons-material"

interface AutoDivideTextProps {
  text: string | string[]
  [key: string]: unknown
}

const AutoDivideText: React.FC<AutoDivideTextProps> = ({ text, ...other }) => {
  return (
    <div className={styles.line}>
      {Array.isArray(text) ? (
        text.map((item, index) => (
          <>
            {index !== 0 ? <Divider type="vertical" /> : null}
            <Typography.Text key={item} className={styles.splitItem} {...other}>
              {item}
            </Typography.Text>
          </>
        ))
      ) : (
        <Typography.Text {...other}>{text}</Typography.Text>
      )}
    </div>
  )
}

const SectionItem: React.FC<ResumeSectionItemData> = ({
  title,
  subTitle,
  description,
  tags,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Typography.Text size="m">{title}</Typography.Text>
      </div>
      <div className={styles.subTitle}>
        {subTitle ? (
          Array.isArray(subTitle) ? (
            subTitle.map((item, index) => (
              <AutoDivideText key={index} type="secondary" text={item} />
            ))
          ) : (
            <AutoDivideText type="secondary" text={subTitle} />
          )
        ) : null}
      </div>

      {description ? (
        <div className={styles.descriptionWrapper}>
          {Array.isArray(description) ? (
            description.map((item) => (
              <AutoDivideText
                key={Array.isArray(item) ? item[0] : item}
                text={item}
              />
            ))
          ) : (
            <AutoDivideText text={description} />
          )}
        </div>
      ) : null}

      {tags ? (
        <div className={styles.tagsWrapper}>
          {tags.map((tag) => (
            <a href={tag.link || "#"} key={tag.name}>
              <Tag>
                {tag.name}
                {tag.link ? <Icon IconName={ArrowForwardIosRounded} /> : null}
              </Tag>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export { SectionItem as ResumeSectionItem }
