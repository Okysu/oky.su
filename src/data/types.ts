/** 类型定义 */
export interface LinkItem {
    id: string
    name: string
    url: string
    icon: string
}

export interface TechItem {
    id: string
    name: string
    iconUrl: string // 官方 CDN 图标 URL
}

export interface Project {
    id: string
    name: string
    tagline: string
    features: string[]
    techStack: string[]
    link: string
}

export interface Profile {
    name: string
    title: string
    subtitle: string
    badges: string[]
    about: string[]
    links: LinkItem[]
    techStack: TechItem[]
    projects: Project[]
}

/** i18n 标签 */
export interface I18nLabels {
    techStack: string
    projects: string
    githubStats: string
    viewOnGithub: string
    statsUnavailable: string
    toggleTheme: string
    switchLang: string
}
