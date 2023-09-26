import styles from "./page.module.scss"
import React from "react"

import Resume from "@/components/complex/Resume"
import { ResumeData, ResumeSectionData } from "@/types/resume"
import { resumeJsonUrl } from "@/api/resume"

async function getResumeJson() {
  return fetch(resumeJsonUrl).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    return res.json() as Promise<ResumeData>
  })
}

interface SectionFromJsonProps {
  sections: ResumeSectionData[]
}

const SectionFromJson: React.FC<SectionFromJsonProps> = ({ sections }) => {
  return sections.map((section) => (
    <Resume.Section key={section.title} title={section.title}>
      {section.content.map((item) => (
        <Resume.SectionItem key={item.title} {...item} />
      ))}
    </Resume.Section>
  ))
}

export default async function Page() {
  const resumeJson = await getResumeJson()

  return (
    <main className={styles.main}>
      <Resume.Header
        name={resumeJson.name}
        contact={resumeJson.contact}
        description={resumeJson.description}
      />
      <div className={styles.sectionWrapper}>
        <div className={styles.mainSection}>
          <SectionFromJson sections={resumeJson.sections.mainSection} />
        </div>
        <div className={styles.split}></div>
        <div className={styles.sideSection}>
          <SectionFromJson sections={resumeJson.sections.sideSection} />
        </div>
      </div>
    </main>
  )
}
