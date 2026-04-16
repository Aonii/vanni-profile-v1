export type TagCategory = 'frontend' | 'backend' | 'database' | 'cloud'

export interface Tag {
  name: string
  category: TagCategory
}

export interface Project {
  id: string
  name: string
  date: string
  description: string
  detail: string // 详情页的完整介绍
  image: string
  video?: string // YouTube embed URL 或本地视频路径
  tags?: Tag[]
  link: string // GitHub / 外部链接
}

export const TAG_COLORS: Record<
  TagCategory,
  { text: string; border: string; bg: string }
> = {
  frontend: { text: '#16a34a', border: '#22c55e', bg: '#22c55e18' },
  backend: { text: '#b45309', border: '#b45309', bg: '#b4530918' },
  database: { text: '#2563eb', border: '#3b82f6', bg: '#3b82f618' },
  cloud: { text: '#a16207', border: '#eab308', bg: '#eab30818' },
}

export const PROJECTS: Project[] = [
  {
    id: 'virtual-coach',
    name: 'Virtual Coach',
    date: 'Jul 2025 – Oct 2025',
    description:
      'A real-time fraud detection platform that captures voice calls, transcribes speech, and uses GPT-4o to instantly surface risk scores and red-flag warnings for banking staff.',
    detail: `Virtual Coach is a real-time fraud detection platform built for banking operations. When a staff member initiates a call with a customer, the system captures live audio, converts speech to text, and invokes GPT-4o to analyse fraud risk — surfacing a risk score and red-flag warnings on the UI instantly.

I was primarily responsible for the front-end core components, back-end AI trigger logic, and AWS deployment support.

Key highlights:
• Real-time voice capture and speech-to-text transcription streamed to the UI via Socket.IO
• GPT-4o integration for on-the-fly fraud risk analysis with structured risk scoring
• Global state management with Zustand; REST API calls via Axios
• Java Spring Boot backend with Sa-Token authentication and MongoDB
• CI/CD pipeline via AWS CodeCommit & CodePipeline; logs monitored through CloudWatch
• Secrets managed with AWS Parameter Store; secure remote DB access via SSH Jump Host`,
    image: '/images/project-1-1.png',
    video: '/videos/project-1.mp4',
    tags: [
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Socket.IO', category: 'frontend' },
      { name: 'Spring Boot', category: 'backend' },
      { name: 'GPT-4o', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'AWS', category: 'cloud' },
    ],
    link: 'https://github.com/Aonii',
  },
  {
    id: 'mooc-elearning',
    name: 'Mooc e-learning',
    date: 'Feb 2025 – Jun 2025',
    description:
      'A scalable online learning platform supporting course creation, media streaming, session, and user management.',
    detail: `Mooc e-learning is a full-featured online education platform inspired by Coursera and Udemy.

Instructors can create structured courses with video lectures, reading materials, and interactive quizzes. Students get a personalised dashboard tracking their progress across enrolled courses.

Key highlights:
• Course builder with drag-and-drop lesson ordering
• Video streaming with adaptive bitrate via HLS
• Quiz engine with multiple question types and instant grading
• Role-based access control (admin / instructor / student)
• Built with React + Node.js, backed by MySQL for relational course data`,
    image: '/images/project-2.png',
    tags: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MySQL', category: 'database' },
    ],
    link: 'https://github.com/Aonii',
  },
  {
    id: 'etoisl',
    name: 'EtoISL',
    date: 'Feb 2025 – Jun 2025',
    description:
      'A real-time English-to-Indian Sign Language translation tool using computer vision and gesture synthesis.',
    detail: `EtoISL bridges the communication gap between hearing and Deaf communities by translating spoken or typed English into Indian Sign Language animations in real time.

The system uses a custom-trained gesture recognition model to map phonemes and words to ISL signs, rendered as smooth 3D avatar animations.

Key highlights:
• Real-time speech-to-text transcription via Web Speech API
• Custom ML model trained on ISL gesture dataset (TensorFlow.js)
• 3D avatar animation rendered with Three.js
• Supports sentence-level translation with grammatical restructuring for ISL syntax
• Progressive Web App — works offline after initial load`,
    image: '/images/project-3.png',
    tags: [
      { name: 'React', category: 'frontend' },
      { name: 'Python', category: 'backend' },
    ],
    link: 'https://github.com/Aonii',
  },
]
