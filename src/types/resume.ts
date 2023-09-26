interface ResumeSectionSplit {
  mainSection: ResumeSectionData[]
  sideSection: ResumeSectionData[]
}

export interface ResumeSectionData {
  title: string
  content: ResumeSectionItemData[]
}

export interface ContactData {
  name: string
  link?: string
  printOnly?: boolean
}

export interface TagData {
  name: string
  link: string
}

export interface ResumeSectionItemData {
  title: string
  subTitle?: string | Array<string | string[]>
  description?: string | Array<string | string[]>
  tags?: TagData[]
}

export interface ResumeData {
  name: string
  contact: ContactData[]
  description: string
  sections: ResumeSectionSplit
}
