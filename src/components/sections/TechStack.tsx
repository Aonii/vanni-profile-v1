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
      {/* 整体内容块：标题行 + 图表，左对齐 */}
      <div className="flex flex-col pl-[24%]">
        {/* 标题行：h2 + 图例，ml-16 与图表 Y 轴标签对齐 */}
        <div className="mb-12 ml-16 flex items-center gap-8">
          <h2 className="whitespace-nowrap text-4xl font-semibold text-text">
            Tech Stack
          </h2>

          <div className="flex items-center gap-4">
            {(
              [
                { label: 'Frontend', category: 'frontend' },
                { label: 'Backend', category: 'backend' },
                { label: 'Database', category: 'database' },
                { label: 'Cloud & DevOps', category: 'cloud' },
              ] as { label: string; category: Category }[]
            ).map(({ label, category }) => (
              <div
                key={category}
                className="flex items-center gap-1.5 whitespace-nowrap"
              >
                <span
                  className="h-3 w-4 rounded-full"
                  style={{ backgroundColor: CATEGORY_COLORS[category] }}
                />
                <span className="text-xs text-text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 图表行：Y 轴标签 + 图表并排 */}
        <div className="flex items-center gap-4 pb-10">
          {/* Y 轴标签：旋转后自然地处于图表左侧 */}
          <span className="-rotate-90 translate-x-14 whitespace-nowrap text-md tracking-widest text-text-muted uppercase">
            Proficiency
          </span>

          {/* 图表区域 */}
          <div className="relative h-[500px] w-[800px] border-l-2 border-b-2 border-border">
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
