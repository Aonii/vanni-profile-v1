// Phase 3 实现：时间轴动效（Framer Motion）
// 当前为占位结构，数据硬编码；后续可改为从 CMS 或静态配置文件读取

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  bullets: string[]
}

const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    title: 'Software Developer Intern',
    company: 'Cybroo.ai – Virtual Coach',
    location: 'Sydney',
    period: 'Jul 2025 – Oct 2025',
    bullets: [
      'Built key fraud monitoring features — risk score visualisation, red flag alerts, call history page, and heat map — using React + TypeScript (Next.js).',
      'Integrated Socket.IO for real-time streaming of fraud detection results from backend services to the frontend dashboard.',
      'Implemented trigger logic that invokes GPT-4o analysis when cached transcripts reach multiples of 5.',
      'Designed UI components with Ant Design and Chakra UI; produced wireframes and process flow diagrams to align feature requirements.',
      'Configured environment variables (.env.*, parameters.yml) across frontend and backend; added health-check endpoints for improved monitoring.',
      'Monitored production deployments via AWS CodePipeline and CloudWatch; utilised SSH jump host for secure remote MongoDB access.',
    ],
  },
  {
    title: 'Marketing Intern',
    company: 'Qutoutiao Inc.',
    location: 'Shanghai, China',
    period: 'Mar 2022 – Jul 2022',
    bullets: [
      'Retrieved and collated product data and imagery from client databases using SQL.',
      'Managed ad uploads and placements across splash, landscape, and portrait formats; tracked impressions, clicks, and conversions.',
      'Analysed click-through, view, and conversion rates using Excel; drafted data analysis reports with strategic recommendations for clients.',
      'Liaised directly with client representatives and internal stakeholders to align expectations and project priorities.',
    ],
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
          <li key={item.company} className="mb-12 ml-6">
            {/* 时间轴圆点 */}
            <span className="absolute -left-[9px] h-4 w-4 rounded-full bg-accent" />

            {/* 时间段 & 地点 */}
            <div className="mb-1 flex items-center gap-3">
              <time className="text-sm text-text-muted">{item.period}</time>
              <span className="text-xs text-text-muted opacity-60">
                {item.location}
              </span>
            </div>

            {/* 职位 & 公司 */}
            <h3 className="text-lg font-semibold text-text">{item.title}</h3>
            <p className="mb-3 text-sm font-medium text-accent">
              {item.company}
            </p>

            {/* Bullet points */}
            <ul className="mb-3 space-y-1.5">
              {item.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                  {b}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
