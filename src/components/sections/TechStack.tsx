'use client'
// Phase 3 实现：技能图谱可视化 + Framer Motion 动画
import { SiReact, SiTypescript, SiNodedotjs, SiMongodb } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { motion } from 'framer-motion'

type Category = 'frontend' | 'backend' | 'database' | 'cloud'

interface Tech {
  name: string
  icon: React.ReactNode
  category: Category
  proficiency: number // Y 轴 0-100
  frequency: number // X 轴 0-100
  floatDelay: number
}

const CATEGORY_COLORS: Record<Category, string> = {
  frontend: '#22c55e', // 绿色
  backend: '#b45309', // accent
  database: '#3b82f6', // 蓝色
  cloud: '#eab308', // 黄色
}

const TECHS: Tech[] = [
  {
    name: 'React',
    icon: <SiReact />,
    category: 'frontend',
    proficiency: 90,
    frequency: 95,
    floatDelay: 0,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    category: 'frontend',
    proficiency: 80,
    frequency: 90,
    floatDelay: 0.4,
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs />,
    category: 'backend',
    proficiency: 70,
    frequency: 70,
    floatDelay: 0.8,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    category: 'database',
    proficiency: 45,
    frequency: 35,
    floatDelay: 1.2,
  },
  {
    name: 'AWS',
    icon: <FaAws />,
    category: 'cloud',
    proficiency: 30,
    frequency: 20,
    floatDelay: 1.6,
  },
]

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="relative flex min-h-screen flex-col items-center justify-center bg-surface"
    >
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <h2 className="mb-12 text-4xl font-semibold text-text">Tech Stack</h2>

        {/* 图表外层：留出轴标签空间 */}
        <div className="relative pl-[62%] pb-10">
          {/* Y 轴标签 */}
          <span className="absolute left-[33%] top-1/2 -translate-y-1/2 -rotate-90 text-md tracking-widest text-text-muted uppercase">
            Proficiency
          </span>

          {/* 图表区域 */}
          <div className="relative h-[500px] w-[900px] border-l-2 border-b-2 border-border">
            {/* X 轴标签 */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-md tracking-widest text-text-muted uppercase">
              Frequency of Use
            </span>

            {/* Y 轴顶部标记 */}
            <span className="absolute -left-8 top-0 text-md text-text-muted">
              100
            </span>
            <span className="absolute -left-6 bottom-0 text-md text-text-muted">
              0
            </span>

            {/* X 轴两端标记 */}
            <span className="absolute bottom-[-32px] left-0 text-md text-text-muted">
              0
            </span>
            <span className="absolute bottom-[-30px] right-0 text-md text-text-muted">
              100
            </span>

            {TECHS.map((tech) => (
              <motion.div
                key={tech.name}
                className="absolute"
                style={{
                  left: `${tech.frequency}%`,
                  bottom: `${tech.proficiency}%`,
                  transform: 'translate(-50%, 50%)',
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: tech.floatDelay,
                }}
              >
                {/* 外层光圈 */}
                <motion.div
                  className="absolute -inset-2 rounded-2xl"
                  style={{
                    background: `${CATEGORY_COLORS[tech.category]}18`,
                    border: `3px solid ${CATEGORY_COLORS[tech.category]}30`,
                  }}
                  animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.06, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: tech.floatDelay,
                  }}
                />

                {/* 卡片主体 */}
                <div
                  className="relative flex items-center gap-2 rounded-xl border-2 bg-white/70 px-3 py-2 backdrop-blur-sm"
                  style={{
                    borderColor: CATEGORY_COLORS[tech.category],
                    boxShadow: `0 4px 16px rgba(0,0,0,0.08)`,
                  }}
                >
                  <span
                    className="text-xl"
                    style={{ color: CATEGORY_COLORS[tech.category] }}
                  >
                    {tech.icon}
                  </span>
                  <span className="text-md font-medium text-text">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
