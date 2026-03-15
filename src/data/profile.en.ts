import type { Profile, I18nLabels } from './types'

export const profileEn: Profile = {
    name: 'Okysu',
    title: '(｡･∀･)ﾉﾞ Hi there! 👋',
    subtitle: 'A Full-Stack & AI Developer from Jiangsu, China 🇨🇳',
    badges: ['Microsoft Student Ambassador Gold'],
    about: [
        'Software Engineering undergraduate (Class of 2025) and Gold Microsoft Learn Student Ambassador (MLSA).',
        'Focused on full-stack AI development with solid engineering practices and cutting-edge AI application experience.',
        'Core developer in integrating Large Language Models with industrial robots, successfully deploying AI in industrial scenarios.',
        'Proficient in cross-stack collaborative development (Python, Golang, Node.js) with excellent communication and coordination skills.'
    ],
    links: [
        { id: 'github', name: 'GitHub', url: 'https://github.com/Okysu', icon: 'github' },
        { id: 'blog', name: 'Blog', url: 'https://blog.yby.zone', icon: 'newspaper' },
        { id: 'resume', name: 'Resume', url: 'https://www.yby.zone/', icon: 'file-text' },
        { id: 'email', name: 'Email', url: 'mailto:yby@ecanse.com', icon: 'mail' }
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
            tagline: 'A unified UI container for online music playback built on HarmonyOS Next API 15',
            features: [
                'Stunning 2.0 UI with revolutionary data source architecture',
                'Multi-platform & private data source support'
            ],
            techStack: ['HarmonyOS Next', 'ArkUI', 'TypeScript'],
            link: 'https://github.com/Edge-Music'
        },
        {
            id: 'nextpaste',
            name: 'NextPaste',
            tagline: 'Cross-device clipboard synchronization tool',
            features: [
                'Real-time text/image transfer via WebSocket',
                'Supports HarmonyOS Next + Windows/Mac/Linux'
            ],
            techStack: ['WebSocket', 'HarmonyOS Next', 'Go'],
            link: 'https://github.com/OSpark-Team/NextPaste'
        },
        {
            id: 'free-pcm',
            name: 'Free-PCM',
            tagline: 'High-performance audio decoding & playback for OpenHarmony',
            features: [
                'C++ decoding wrapped via NAPI',
                'Streaming playback, real-time 10-band equalizer, multi-format decoding'
            ],
            techStack: ['OpenHarmony', 'C++', 'NAPI'],
            link: 'https://github.com/OSpark-Team/Free-PCM'
        }
    ]
}

export const labelsEn: I18nLabels = {
    techStack: 'Tech Stack',
    projects: 'Projects',
    githubStats: 'GitHub Stats',
    viewOnGithub: 'View Profile on GitHub',
    statsUnavailable: 'GitHub Stats are temporarily unavailable.',
    toggleTheme: 'Toggle Theme',
    switchLang: '中文'
}
