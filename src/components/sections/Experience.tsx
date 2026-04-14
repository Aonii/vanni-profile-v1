// Phase 3 实现：时间轴动效（Framer Motion）
// 当前为占位结构，数据硬编码；后续可改为从 CMS 或静态配置文件读取

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
}

const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    title: 'Full-Stack Engineer Intern',
    company: 'Cyberoo.AI',
    period: '07/2025 — 10/2025',
    description: '负责核心业务功能开发，主导前端架构升级，推动工程化规范落地。',
  },
  {
    title: 'Advertising Marketing Intern',
    company: 'Qutoutiao',
    period: '03/2022 — 07/2022',
    description: '参与多个 Web 项目迭代，积累前后端协作与工程化实践经验。',
  },
]

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex min-h-screen flex-col justify-center bg-surface pl-[35%] pr-12 py-24"
    >
      <h2 className="mb-12 text-4xl font-semibold text-text">Experience</h2>

      {/* 时间轴容器 */}
      <ol className="relative ml-16 border-l border-border">
        {EXPERIENCE_LIST.map((item) => (
          <li key={item.company} className="mb-10 ml-6">
            {/* 时间轴圆点 */}
            <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-accent" />

            {/* 时间段 */}
            <time className="mb-1 block text-sm text-text-muted">
              {item.period}
            </time>

            {/* 职位 & 公司 */}
            <h3 className="text-lg font-semibold text-text">{item.title}</h3>
            <p className="mb-2 text-sm font-medium text-accent">
              {item.company}
            </p>

            {/* 描述 */}
            <p className="text-sm leading-relaxed text-text-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
