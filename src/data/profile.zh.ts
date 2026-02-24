import type { Profile, I18nLabels } from './types'

export const profileZh: Profile = {
    name: 'Okysu',
    title: '(｡･∀･)ﾉﾞ 你好！👋',
    subtitle: '来自中国江苏的全栈 & AI 开发者 🇨🇳',
    badges: ['微软学生大使 Gold'],
    about: [
        '我构建现代 Web 应用，探索 AI 集成，并积极参与开源社区。',
        '热衷于创造流畅的用户体验，撰写高效、可扩展的代码。',
        '目前正在探索 HarmonyOS 应用开发与跨平台体验。'
    ],
    links: [
        { id: 'github', name: 'GitHub', url: 'https://github.com/Okysu', icon: 'github' },
        { id: 'blog', name: '博客', url: 'https://blog.yby.zone', icon: 'newspaper' },
        { id: 'resume', name: '简历', url: 'https://www.yby.zone/', icon: 'file-text' },
        { id: 'email', name: '邮箱', url: 'mailto:yby@ecanse.com', icon: 'mail' }
    ],
    techStack: [
        { id: 'vuejs', name: 'Vue.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
        { id: 'react', name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { id: 'typescript', name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { id: 'python', name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { id: 'go', name: 'Go', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg' },
        { id: 'nodejs', name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
        { id: 'mysql', name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { id: 'redis', name: 'Redis', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
        { id: 'mongodb', name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
        { id: 'docker', name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' }
    ],
    projects: [
        {
            id: 'edge-music',
            name: 'Edge-Music',
            tagline: '基于 HarmonyOS Next API 15 全新重构的网络音乐播放器统一 UI 容器',
            features: [
                '2.0 带来惊艳 UI 与革命性数据源架构',
                '支持多平台与私有数据源'
            ],
            techStack: ['HarmonyOS Next', 'ArkUI', 'TypeScript'],
            link: 'https://github.com/Edge-Music'
        },
        {
            id: 'nextpaste',
            name: 'NextPaste',
            tagline: '跨设备剪切板同步工具',
            features: [
                'WebSocket 实现文本/图片实时流转',
                '支持 HarmonyOS Next 与 Windows/Mac/Linux'
            ],
            techStack: ['WebSocket', 'HarmonyOS Next', 'Go'],
            link: 'https://github.com/OSpark-Team/NextPaste'
        },
        {
            id: 'free-pcm',
            name: 'Free-PCM',
            tagline: 'OpenHarmony 高性能音频解码与播放',
            features: [
                'NAPI 封装 C++ 解码',
                '支持流式拉取播放、实时 10 段均衡器、多格式解码'
            ],
            techStack: ['OpenHarmony', 'C++', 'NAPI'],
            link: 'https://github.com/OSpark-Team/Free-PCM'
        }
    ]
}

export const labelsZh: I18nLabels = {
    techStack: '技术栈',
    projects: '项目',
    githubStats: 'GitHub 统计',
    viewOnGithub: '在 GitHub 上查看',
    statsUnavailable: 'GitHub 统计暂时不可用。',
    toggleTheme: '切换主题',
    switchLang: 'EN'
}
