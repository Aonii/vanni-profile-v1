// Phase 3 实现：时间轴动效（Framer Motion）
// 当前为占位结构，数据硬编码；后续可改为从 CMS 或静态配置文件读取

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    title: "Full-Stack Engineer",
    company: "Your Company",
    period: "2024 — Present",
    description:
      "负责核心业务功能开发，主导前端架构升级，推动工程化规范落地。",
  },
  {
    title: "Frontend Engineer",
    company: "Previous Company",
    period: "2022 — 2024",
    description:
      "参与 B 端产品从 0 到 1 的构建，主要使用 React + TypeScript，推动组件库建设。",
  },
  {
    title: "Junior Developer",
    company: "First Company",
    period: "2021 — 2022",
    description: "参与多个 Web 项目迭代，积累前后端协作与工程化实践经验。",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex min-h-screen flex-col items-center justify-center bg-surface px-6 py-24"
    >
      <div className="w-full max-w-2xl">
        <h2 className="mb-12 text-3xl font-semibold text-text">Experience</h2>

        {/* 时间轴容器 */}
        <ol className="relative border-l border-border">
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
      </div>
    </section>
  );
};

export default Experience;
