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
      'An AI-powered fitness coaching platform with personalised workout plans, real-time form feedback, and progress tracking.',
    detail: `Virtual Coach is a full-stack AI fitness application that delivers personalised coaching experiences at scale.

The platform analyses users' fitness goals, current level, and available equipment to generate adaptive workout plans. Real-time pose estimation provides instant form feedback, reducing injury risk and improving training efficiency.

Key highlights:
• Personalised workout generation powered by GPT-4 and custom prompt engineering
• Real-time pose detection using MediaPipe running entirely in the browser
• Progress dashboard with charts and weekly insights
• RESTful API built with Spring Boot and secured with JWT authentication
• Data stored in MongoDB Atlas with Redis caching for session management
• Deployed on AWS EC2 with S3 for media storage and CloudFront CDN`,
    image: '/images/project-1.png',
    video: '/videos/project-1.mp4',
    tags: [
      { name: 'React', category: 'frontend' },
      { name: 'TS', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Spring Boot', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'AWS', category: 'cloud' },
    ],
    link: 'https://github.com/fuaoni',
  },
  {
    id: 'mooc-elearning',
    name: 'Mooc e-learning',
    date: 'Feb 2025 – Jun 2025',
    description:
      'A scalable online learning platform supporting course creation, video streaming, quizzes, and student progress tracking.',
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
    link: 'https://github.com/fuaoni',
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
      { name: 'Three.js', category: 'frontend' },
      { name: 'Python', category: 'backend' },
    ],
    link: 'https://github.com/fuaoni',
  },
]
