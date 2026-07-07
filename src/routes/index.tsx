import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CustomCursor } from "@/components/CustomCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sunny Kumar — Data Analyst & AI/ML Portfolio" },
      {
        name: "description",
        content:
          "Sunny Kumar — Data Analyst, AI/ML Data Associate, and MCA final-year student building data platforms, ML pipelines, and analytics dashboards.",
      },
      { property: "og:title", content: "Sunny Kumar — Data Analyst & AI/ML Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio of Sunny Kumar — projects in demand forecasting, healthcare AI, Kafka pipelines, and Power BI analytics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

const PROJECTS = [
  {
    tag: "MLOps + Forecasting",
    featured: true,
    title: "RetailPulse — AI-Powered Customer Analytics & Demand Forecasting",
    stack: ["Python", "Prophet", "LSTM", "XGBoost", "Streamlit", "Docker"],
    blurb:
      "End-to-end MLOps platform processing 1M+ retail transactions. Prophet + LSTM hybrid ensemble cuts demand-forecast error (MAPE) to 24.1%.",
    problem:
      "Retailers overstock and understock the wrong items — legacy forecasting misses seasonality, promos, and long-tail SKUs.",
    solution:
      "Built a full MLOps stack: RFM segmentation (K-Means, DBSCAN), XGBoost churn (0.94 ROC AUC), 5-page Streamlit dashboard, MLflow tracking, Evidently drift detection, Docker/K8s, GitHub Actions CI/CD, Prometheus + Grafana.",
    meta: "↗ Live · MLOps · 1M+ transactions",
    href: "https://retailpulse1554.netlify.app/",
    github: "https://github.com/Sunnykumar1554/AI-Powered-Customer-Analytics-Demand-Forecasting-Platform",
  },
  {
    tag: "AI + Healthcare",
    title: "MediAssist — AI Healthcare Data & Annotation Platform",
    stack: ["Python", "NLP", "LLMs", "Llama API"],
    blurb:
      "NLP + LLM-powered assistant that annotates symptom-based medical text across multiple modalities with strict quality control.",
    meta: "↗ NLP · Data quality · Llama API",
    href: "https://github.com/Sunnykumar1554/MediAssist-AI-Powered-Medical-Chatbot",
    github: "https://github.com/Sunnykumar1554/MediAssist-AI-Powered-Medical-Chatbot",
  },
  {
    tag: "Analytics",
    title: "Hospital ER Data Analytics — Full-Stack Solution",
    stack: ["Python", "MySQL", "Power BI", "Pandas"],
    blurb:
      "Automated cleaning & feature engineering on 500+ patient records, advanced MySQL for readmission tracking, and a Power BI dashboard for patient flow and department KPIs.",
    meta: "↗ Power BI · MySQL · Pandas",
    href: "https://github.com/Sunnykumar1554/hospital-er-analytics",
    github: "https://github.com/Sunnykumar1554/hospital-er-analytics",
  },
  {
    tag: "Streaming",
    title: "Real-Time Kafka Streaming Pipeline",
    stack: ["Apache Kafka", "Python", "ETL"],
    blurb:
      "Distributed Kafka producer-consumer ETL pipeline processing 10,000+ messages/sec — designed for high-throughput, low-latency multi-format data.",
    meta: "↗ 10k msg/sec · Distributed ETL",
    href: "https://github.com/Sunnykumar1554/Real-Time-Streaming-Kafka-Consumer-Streaming",
    github: "https://github.com/Sunnykumar1554/Real-Time-Streaming-Kafka-Consumer-Streaming",
  },
  {
    tag: "Big Data",
    title: "Big Data Analysis — Global E-Commerce Transactions",
    stack: ["Apache Spark", "PySpark", "Viz"],
    blurb:
      "Analyzed 1M+ transaction records using Apache Spark; 60% faster processing via distributed PySpark aggregation with visualized sales insights.",
    meta: "↗ 1M+ rows · 60% faster",
    href: "https://github.com/Sunnykumar1554/Big_Data_Analysis_on_Global_E_Commerce_Transaction_Using_Spark.ipynb",
    github: "https://github.com/Sunnykumar1554/Big_Data_Analysis_on_Global_E_Commerce_Transaction_Using_Spark.ipynb",
  },
];

const SKILL_GROUPS = [
  {
    label: "LANGUAGES & DATA",
    items: ["Python", "SQL", "MySQL", "PostgreSQL", "Pandas", "NumPy", "Statistics"],
  },
  {
    label: "AI / ML / NLP",
    items: ["LLMs", "Prophet", "LSTM", "XGBoost", "Optuna", "Data Labeling", "Prompt Eval"],
  },
  {
    label: "TOOLS & MLOPS",
    items: [
      "Power BI",
      "Tableau",
      "Excel",
      "Streamlit",
      "MLflow",
      "Evidently",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
  },
];

function Portfolio() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#about" className="mono text-lg font-bold tracking-tight">
            sunny.dev
          </a>
          <nav className="hidden gap-6 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`mono text-xs tracking-wider transition-colors ${
                  active === n.id
                    ? "text-foreground underline decoration-primary decoration-2 underline-offset-8"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section id="about" className="relative py-24 md:py-36">
          <SectionNumber n="01" />
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h1 className="text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
                Hi, I'm <span className="bg-primary px-2">Sunny</span>
              </h1>
              <p className="mono mt-8 text-sm md:text-base">
                Data Analyst. AI/ML Data Associate. Occasionally sleeping.
              </p>
              <p className="mt-6 max-w-xl text-lg font-semibold md:text-xl">
                Turning messy data into decisions — dashboards, ML pipelines, and labeled
                datasets that actually ship.
              </p>
              <p className="mt-2 max-w-xl text-lg font-semibold md:text-xl">
                Open for full-time roles and data collabs.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  data-cursor-hide-ring
                  className="brutal-box inline-flex items-center bg-primary px-6 py-3 mono text-sm font-bold uppercase tracking-wider transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
                >
                  View Projects →
                </a>
                <a
                  href="/Sunny_Kumar_Resume.pdf"
                  download="Sunny_Kumar_Resume.pdf"
                  data-cursor-hide-ring
                  className="brutal-box inline-flex items-center bg-card px-6 py-3 mono text-sm font-bold uppercase tracking-wider transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
                >
                  Download Resume ↓
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-2">
                {["#DataAnalytics", "#MLOps", "#NLP", "#PowerBI", "#Python"].map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="brutal-box-lg relative aspect-square w-full max-w-sm justify-self-center border-2 border-ink bg-primary p-6 shadow-[10px_10px_0_0_var(--ink)]">
              <div className="flex h-full flex-col justify-between">
                <div className="mono text-xs">// portrait.log</div>
                <div className="relative my-4 flex-1 overflow-hidden border-2 border-ink bg-card">
                  <img
                    src="/avatar.png"
                    alt="Sunny Kumar Portrait"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mono text-xs">
                  → MCA Final Year · 2026 Batch
                  <br />→ Tula's Institute, Dehradun
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* About */}
        <section id="about-detail" className="relative py-20">
          <SectionNumber n="02" />
          <h2 className="text-5xl font-black md:text-6xl">About</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                I'm Sunny Kumar — a Data Analyst & AI enthusiast pursuing MCA (Final Year,
                2026 Batch) at Tula's Institute, Dehradun.
              </p>
              <p>
                I work with multi-modal data — text, speech, image, audio, video — labeling,
                cleaning, and shipping datasets that ML systems can actually learn from. My
                sweet spot is where analytics, NLP, and MLOps meet: Power BI dashboards,
                LLM-assisted annotation, and end-to-end forecasting stacks.
              </p>
              <p>
                Fluent in Hindi & English, obsessive about labeling guidelines, and always
                open to opportunities in responsible AI/ML data work.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 mono text-sm">
                <span>⚡ MCA Final Year</span>
                <span>·</span>
                <span>🛠 Ships analytics tools</span>
                <span>·</span>
                <span>🤝 Open to AI/ML data roles</span>
              </div>
            </div>
            <div className="brutal-box p-6">
              <div className="mono text-xs uppercase text-muted-foreground">Quick stats</div>
              <ul className="mt-4 space-y-3 mono text-sm">
                <li className="flex justify-between border-b border-dashed border-ink/40 pb-2">
                  <span>Location</span>
                  <span className="font-bold">India</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-ink/40 pb-2">
                  <span>Focus</span>
                  <span className="font-bold">Data · AI/ML</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-ink/40 pb-2">
                  <span>Graduating</span>
                  <span className="font-bold">2026</span>
                </li>
                <li className="flex justify-between">
                  <span>Status</span>
                  <span className="font-bold text-primary">Open to work</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Divider />

        {/* Experience */}
        <section id="experience" className="relative py-20">
          <SectionNumber n="03" />
          <h2 className="text-5xl font-black md:text-6xl">Experience</h2>
          <div className="mt-10 brutal-box p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black">Data Science & Analysis Intern</h3>
                <div className="mono mt-1 text-sm text-muted-foreground">
                  Zidio Development · Bangalore, India
                </div>
              </div>
              <span className="chip">2026 · 2 Months</span>
            </div>
            <ul className="mt-6 space-y-3 text-base leading-relaxed">
              <li>
                · Performed EDA on real-world datasets with Python (Pandas, NumPy, Matplotlib,
                Seaborn) — identified patterns and delivered actionable business insights.
              </li>
              <li>
                · Cleaned, labeled, and structured multi-format datasets (tabular, text,
                speech) under strict labeling guidelines and customer-privacy standards.
              </li>
              <li>
                · Built interactive Power BI and Tableau dashboards visualizing KPIs and
                operational metrics for stakeholder reporting.
              </li>
              <li>
                · Documented data workflows, proposed process improvements, and maintained
                accuracy under deadline-driven conditions.
              </li>
            </ul>
          </div>
        </section>

        <Divider />

        {/* Education */}
        <section id="education" className="relative py-20">
          <SectionNumber n="04" />
          <h2 className="text-5xl font-black md:text-6xl">Education</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="brutal-box p-6">
              <h3 className="text-xl font-black">Master of Computer Applications (MCA)</h3>
              <div className="mono mt-2 text-sm">Tula's Institute · Dehradun, Uttarakhand</div>
              <div className="mono mt-1 text-sm text-muted-foreground">
                Final Year · Expected 2026
              </div>
            </div>
            <div className="brutal-box p-6">
              <h3 className="text-xl font-black">Bachelor of Computer Applications (BCA)</h3>
              <div className="mono mt-2 text-sm">
                L.N. Mishra Institute of Economic Development & Social Change · Patna
              </div>
              <div className="mono mt-1 text-sm text-muted-foreground">
                2024 · CGPA 7.42
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="mono text-sm uppercase tracking-widest">Certifications</h3>
            <ul className="mt-4 grid gap-2 md:grid-cols-3">
              {[
                "Google Data Analytics Professional Certificate — Coursera",
                "Microsoft Power BI Data Analyst (PL-300)",
                "Web Development — SimpliLearn / SkillUP",
              ].map((c) => (
                <li key={c} className="brutal-box-sm p-4 text-sm font-semibold">
                  · {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Divider />

        {/* Projects */}
        <section id="projects" className="relative py-20">
          <SectionNumber n="05" />
          <h2 className="text-5xl font-black md:text-6xl">Projects</h2>
          <p className="mono mt-4 text-sm text-muted-foreground">
            Things I've built and shipped.
          </p>

          {/* Featured */}
          <div
            data-cursor-hide-ring
            className="mt-12 brutal-box-lg border-2 border-ink bg-card p-8 shadow-[10px_10px_0_0_var(--ink)] md:p-10"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip bg-primary">Featured Project</span>
              <span className="mono text-xs text-muted-foreground">
                {PROJECTS[0].tag}
              </span>
            </div>
            <h3 className="mt-4 text-3xl font-black md:text-4xl">{PROJECTS[0].title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {PROJECTS[0].stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-6 text-lg leading-relaxed">{PROJECTS[0].blurb}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="border-l-4 border-ink pl-4">
                <div className="mono text-xs uppercase text-muted-foreground">Problem</div>
                <p className="mt-1 text-sm">{PROJECTS[0].problem}</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <div className="mono text-xs uppercase text-muted-foreground">Solution</div>
                <p className="mt-1 text-sm">{PROJECTS[0].solution}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="mono text-xs">{PROJECTS[0].meta}</div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={PROJECTS[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="brutal-box-sm bg-primary px-5 py-2 mono text-xs font-bold uppercase tracking-wider transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
                >
                  Live Project →
                </a>
                <a
                  href={PROJECTS[0].github}
                  target="_blank"
                  rel="noreferrer"
                  className="brutal-box-sm bg-card px-5 py-2 mono text-xs font-bold uppercase tracking-wider transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="mono text-sm uppercase tracking-widest">More Projects</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {PROJECTS.slice(1).map((p) => (
                <div
                  key={p.title}
                  data-cursor-hide-ring
                  className="brutal-box group flex flex-col p-6 transition-transform hover:-translate-x-1 hover:-translate-y-1"
                >
                  <div className="mono text-xs text-muted-foreground">{p.tag}</div>
                  <h4 className="mt-2 text-xl font-black">{p.title}</h4>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="mono text-xs">{p.meta}</div>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="brutal-box-sm bg-card px-4 py-1.5 mono text-xs font-bold uppercase tracking-wider transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            data-cursor-hide-ring
            className="mt-12 brutal-box flex flex-wrap items-center justify-between gap-4 bg-primary p-6"
          >
            <div>
              <div className="mono text-xs uppercase">More coming</div>
              <h3 className="text-2xl font-black">Always building.</h3>
            </div>
            <a
              href="https://github.com/Sunnykumar1554"
              target="_blank"
              rel="noreferrer"
              className="brutal-box-sm bg-card px-5 py-2 mono text-xs font-bold uppercase tracking-wider"
            >
              GitHub ↗
            </a>
          </div>

          <div
            data-cursor-hide-ring
            className="mt-6 brutal-box p-6"
          >
            <div className="mono text-xs uppercase text-muted-foreground">Contributions</div>
            <a
              href="https://github.com/Sunnykumar1554"
              target="_blank"
              rel="noreferrer"
              className="mt-3 block"
            >
              <img
                src="https://ghchart.rshah.org/Sunnykumar1554"
                alt="Sunny Kumar GitHub contributions"
                className="w-full"
                loading="lazy"
              />
            </a>
          </div>
        </section>

        <Divider />

        {/* Skills */}
        <section id="skills" className="relative py-20">
          <SectionNumber n="06" />
          <h2 className="text-5xl font-black md:text-6xl">Skills</h2>

          <div className="mt-10 space-y-6">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label}>
                <div className="mono text-xs uppercase tracking-widest text-muted-foreground">
                  {group.label}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="brutal-box-sm bg-card px-3 py-1.5 text-sm font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="mono text-xs uppercase tracking-widest text-muted-foreground">
              Soft Skills
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Attention to Detail",
                "Analytical Thinking",
                "Structured Problem-Solving",
                "Judgment Under Ambiguity",
                "Hindi & English Fluency",
                "Teamwork",
                "Adaptability",
              ].map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* Contact */}
        <section id="contact" className="relative py-24">
          <SectionNumber n="07" />
          <h2 className="text-5xl font-black md:text-7xl">Let's build something.</h2>
          <p className="mt-6 max-w-2xl text-lg">
            Open for AI/ML Data Associate roles, analyst positions, and collaborations. Let's
            talk.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            <ContactCard
              label="Email me"
              value="sunnykr155415@gmail.com"
              href="mailto:sunnykr155415@gmail.com"
              hint="Say hello!"
            />
            <ContactCard
              label="GitHub"
              value="Sunnykumar1554"
              href="https://github.com/Sunnykumar1554"
              hint="See my code!"
            />
            <ContactCard
              label="LinkedIn"
              value="sunny-kumar-01208a268"
              href="https://www.linkedin.com/in/sunny-kumar-01208a268/"
              hint="Let's connect!"
            />
            <ContactCard
              label="Phone"
              value="+91 8864091706"
              href="tel:+918864091706"
              hint="Call me!"
            />
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-ink">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 mono text-xs">
          <div>© 2026 Sunny Kumar</div>
          <div>Inspired by Neo-Brutalist UI</div>
        </div>
      </footer>
    </div>
  );
}

function SectionNumber({ n }: { n: string }) {
  return (
    <div className="mono absolute right-0 top-8 text-[6rem] font-black leading-none text-ink/5 md:text-[10rem]">
      {n}
    </div>
  );
}

function Divider() {
  return <div className="h-0.5 w-full bg-ink" />;
}

function ContactCard({
  label,
  value,
  href,
  hint,
}: {
  label: string;
  value: string;
  href: string;
  hint: string;
}) {
  const isMail = href.startsWith("mailto:");
  const isTel = href.startsWith("tel:");
  const clickableHref = isMail
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(href.replace("mailto:", ""))}`
    : href;
  return (
    <a
      href={isTel ? href : clickableHref}
      target={isTel ? undefined : "_blank"}
      rel="noopener noreferrer"
      data-cursor-hide-ring
      className="brutal-box flex flex-col p-6 transition-transform hover:-translate-x-1 hover:-translate-y-1"
    >
      <span className="mono text-xs uppercase text-muted-foreground">{label}</span>
      <span className="mt-2 break-all text-lg font-black">{value}</span>
      <span className="mono mt-3 text-xs text-primary">{hint} →</span>
    </a>
  );
}
