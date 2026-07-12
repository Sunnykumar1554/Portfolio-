import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CGfNl7rq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CustomCursor() {
	const dotRef = (0, import_react.useRef)(null);
	const ringRef = (0, import_react.useRef)(null);
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(hover: none)").matches) return;
		setEnabled(true);
		const pos = {
			x: window.innerWidth / 2,
			y: window.innerHeight / 2
		};
		const ring = {
			x: pos.x,
			y: pos.y
		};
		let hoverState = "none";
		let angle = 0;
		let raf = 0;
		const onMove = (e) => {
			pos.x = e.clientX;
			pos.y = e.clientY;
			const t = e.target;
			if (t?.closest("[data-cursor-hide-ring]")) hoverState = "hide-ring";
			else if (t?.closest("a, button, [role='button'], input, textarea, select, label")) hoverState = "interactive";
			else if (t?.closest("p, span, h1, h2, h3, h4, h5, h6, li, strong, em, small, pre, code, blockquote")) hoverState = "text";
			else hoverState = "none";
		};
		const loop = () => {
			if (dotRef.current) {
				const s = hoverState === "hide-ring" ? 56 : hoverState === "text" ? 64 : hoverState === "interactive" ? 40 : 8;
				dotRef.current.style.transform = `translate3d(${pos.x - s / 2}px, ${pos.y - s / 2}px, 0)`;
				dotRef.current.style.width = `${s}px`;
				dotRef.current.style.height = `${s}px`;
			}
			ring.x += (pos.x - ring.x) * .15;
			ring.y += (pos.y - ring.y) * .15;
			angle += 1.2;
			if (ringRef.current) {
				const s = hoverState === "hide-ring" || hoverState === "text" ? 0 : hoverState === "interactive" ? 80 : 28;
				ringRef.current.style.width = `${s}px`;
				ringRef.current.style.height = `${s}px`;
				ringRef.current.style.opacity = hoverState === "hide-ring" || hoverState === "text" ? "0" : "1";
				ringRef.current.style.transform = `translate3d(${ring.x - s / 2}px, ${ring.y - s / 2}px, 0) rotate(${angle}deg)`;
			}
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		window.addEventListener("mousemove", onMove);
		document.documentElement.style.cursor = "none";
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", onMove);
			document.documentElement.style.cursor = "";
		};
	}, []);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: ringRef,
		className: "pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block border-2 border-white",
		style: {
			mixBlendMode: "difference",
			willChange: "transform, width, height"
		}
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dotRef,
		className: "pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block rounded-full bg-white",
		style: {
			mixBlendMode: "difference",
			willChange: "transform, width, height"
		}
	})] });
}
var NAV = [
	{
		id: "about",
		label: "ABOUT"
	},
	{
		id: "experience",
		label: "EXPERIENCE"
	},
	{
		id: "projects",
		label: "PROJECTS"
	},
	{
		id: "skills",
		label: "SKILLS"
	},
	{
		id: "contact",
		label: "CONTACT"
	}
];
var PROJECTS = [
	{
		tag: "MLOps + Forecasting",
		featured: true,
		title: "RetailPulse — AI-Powered Customer Analytics & Demand Forecasting",
		stack: [
			"Python",
			"Prophet",
			"LSTM",
			"XGBoost",
			"Streamlit",
			"Docker"
		],
		blurb: "End-to-end MLOps platform processing 1M+ retail transactions. Prophet + LSTM hybrid ensemble cuts demand-forecast error (MAPE) to 24.1%.",
		problem: "Retailers overstock and understock the wrong items — legacy forecasting misses seasonality, promos, and long-tail SKUs.",
		solution: "Built a full MLOps stack: RFM segmentation (K-Means, DBSCAN), XGBoost churn (0.94 ROC AUC), 5-page Streamlit dashboard, MLflow tracking, Evidently drift detection, Docker/K8s, GitHub Actions CI/CD, Prometheus + Grafana.",
		meta: "↗ Live · MLOps · 1M+ transactions",
		href: "https://retailpulse1554.netlify.app/",
		github: "https://github.com/Sunnykumar1554/AI-Powered-Customer-Analytics-Demand-Forecasting-Platform"
	},
	{
		tag: "AI + Healthcare",
		title: "MediAssist — AI Healthcare Data & Annotation Platform",
		stack: [
			"Python",
			"NLP",
			"LLMs",
			"Llama API"
		],
		blurb: "NLP + LLM-powered assistant that annotates symptom-based medical text across multiple modalities with strict quality control.",
		meta: "↗ NLP · Data quality · Llama API",
		href: "https://github.com/Sunnykumar1554/MediAssist-AI-Powered-Medical-Chatbot",
		github: "https://github.com/Sunnykumar1554/MediAssist-AI-Powered-Medical-Chatbot"
	},
	{
		tag: "Analytics",
		title: "Hospital ER Data Analytics — Full-Stack Solution",
		stack: [
			"Python",
			"MySQL",
			"Power BI",
			"Pandas"
		],
		blurb: "Automated cleaning & feature engineering on 500+ patient records, advanced MySQL for readmission tracking, and a Power BI dashboard for patient flow and department KPIs.",
		meta: "↗ Power BI · MySQL · Pandas",
		href: "https://github.com/Sunnykumar1554/hospital-er-analytics",
		github: "https://github.com/Sunnykumar1554/hospital-er-analytics"
	},
	{
		tag: "Streaming",
		title: "Real-Time Kafka Streaming Pipeline",
		stack: [
			"Apache Kafka",
			"Python",
			"ETL"
		],
		blurb: "Distributed Kafka producer-consumer ETL pipeline processing 10,000+ messages/sec — designed for high-throughput, low-latency multi-format data.",
		meta: "↗ 10k msg/sec · Distributed ETL",
		href: "https://github.com/Sunnykumar1554/Real-Time-Streaming-Kafka-Consumer-Streaming",
		github: "https://github.com/Sunnykumar1554/Real-Time-Streaming-Kafka-Consumer-Streaming"
	},
	{
		tag: "Big Data",
		title: "Big Data Analysis — Global E-Commerce Transactions",
		stack: [
			"Apache Spark",
			"PySpark",
			"Viz"
		],
		blurb: "Analyzed 1M+ transaction records using Apache Spark; 60% faster processing via distributed PySpark aggregation with visualized sales insights.",
		meta: "↗ 1M+ rows · 60% faster",
		href: "https://github.com/Sunnykumar1554/Big_Data_Analysis_on_Global_E_Commerce_Transaction_Using_Spark.ipynb",
		github: "https://github.com/Sunnykumar1554/Big_Data_Analysis_on_Global_E_Commerce_Transaction_Using_Spark.ipynb"
	}
];
var SKILL_GROUPS = [
	{
		label: "LANGUAGES & DATA",
		items: [
			"Python",
			"SQL",
			"MySQL",
			"PostgreSQL",
			"Pandas",
			"NumPy",
			"Statistics"
		]
	},
	{
		label: "AI / ML / NLP",
		items: [
			"LLMs",
			"Prophet",
			"LSTM",
			"XGBoost",
			"Optuna",
			"Data Labeling",
			"Prompt Eval"
		]
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
			"Grafana"
		]
	}
];
function Portfolio() {
	const [active, setActive] = (0, import_react.useState)("about");
	(0, import_react.useEffect)(() => {
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(e.target.id);
			});
		}, { rootMargin: "-40% 0px -55% 0px" });
		NAV.forEach((n) => {
			const el = document.getElementById(n.id);
			if (el) obs.observe(el);
		});
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b-2 border-ink bg-background/95 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#about",
						className: "mono text-lg font-bold tracking-tight",
						children: "sunny.dev"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden gap-6 md:flex",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${n.id}`,
							className: `mono text-xs tracking-wider transition-colors ${active === n.id ? "text-foreground underline decoration-primary decoration-2 underline-offset-8" : "text-muted-foreground hover:text-foreground"}`,
							children: n.label
						}, n.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "about",
						className: "relative py-24 md:py-36",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, { n: "01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-6xl font-black leading-[0.95] tracking-tight md:text-8xl",
									children: ["Hi, I'm ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-primary px-2",
										children: "Sunny"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mono mt-8 text-sm md:text-base",
									children: "Data Analyst. AI/ML Data Associate. Occasionally sleeping."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-xl text-lg font-semibold md:text-xl",
									children: "Turning messy data into decisions — dashboards, ML pipelines, and labeled datasets that actually ship."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-xl text-lg font-semibold md:text-xl",
									children: "Open for full-time roles and data collabs."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#projects",
										"data-cursor-hide-ring": true,
										className: "brutal-box inline-flex items-center bg-primary px-6 py-3 mono text-sm font-bold uppercase tracking-wider transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5",
										children: "View Projects →"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/Sunny_Kumar_Resume.pdf",
										download: "Sunny_Kumar_Resume.pdf",
										"data-cursor-hide-ring": true,
										className: "brutal-box inline-flex items-center bg-card px-6 py-3 mono text-sm font-bold uppercase tracking-wider transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5",
										children: "Download Resume ↓"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 flex flex-wrap gap-2",
									children: [
										"#DataAnalytics",
										"#MLOps",
										"#NLP",
										"#PowerBI",
										"#Python"
									].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "chip",
										children: t
									}, t))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "brutal-box-lg relative aspect-square w-full max-w-sm justify-self-center border-2 border-ink bg-primary p-6 shadow-[10px_10px_0_0_var(--ink)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-full flex-col justify-between",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mono text-xs",
											children: "// portrait.log"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-6xl font-black leading-none",
											children: ["SK", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-2 w-24 bg-ink" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mono text-xs",
											children: [
												"→ MCA Final Year · 2026 Batch",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"→ Tula's Institute, Dehradun"
											]
										})
									]
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "about-detail",
						className: "relative py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, { n: "02" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-5xl font-black md:text-6xl",
								children: "About"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-5 text-lg leading-relaxed",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'm Sunny Kumar — a Data Analyst & AI enthusiast pursuing MCA (Final Year, 2026 Batch) at Tula's Institute, Dehradun." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I work with multi-modal data — text, speech, image, audio, video — labeling, cleaning, and shipping datasets that ML systems can actually learn from. My sweet spot is where analytics, NLP, and MLOps meet: Power BI dashboards, LLM-assisted annotation, and end-to-end forecasting stacks." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fluent in Hindi & English, obsessive about labeling guidelines, and always open to opportunities in responsible AI/ML data work." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 flex flex-wrap gap-3 mono text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⚡ MCA Final Year" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🛠 Ships analytics tools" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🤝 Open to AI/ML data roles" })
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "brutal-box p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mono text-xs uppercase text-muted-foreground",
										children: "Quick stats"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-4 space-y-3 mono text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex justify-between border-b border-dashed border-ink/40 pb-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Location" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold",
													children: "India"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex justify-between border-b border-dashed border-ink/40 pb-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Focus" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold",
													children: "Data · AI/ML"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex justify-between border-b border-dashed border-ink/40 pb-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Graduating" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold",
													children: "2026"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-primary",
													children: "Open to work"
												})]
											})
										]
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "experience",
						className: "relative py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, { n: "03" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-5xl font-black md:text-6xl",
								children: "Experience"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 brutal-box p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-black",
										children: "Data Science & Analysis Intern"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mono mt-1 text-sm text-muted-foreground",
										children: "Zidio Development · Bangalore, India"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "chip",
										children: "2026 · 2 Months"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-6 space-y-3 text-base leading-relaxed",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Performed EDA on real-world datasets with Python (Pandas, NumPy, Matplotlib, Seaborn) — identified patterns and delivered actionable business insights." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Cleaned, labeled, and structured multi-format datasets (tabular, text, speech) under strict labeling guidelines and customer-privacy standards." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Built interactive Power BI and Tableau dashboards visualizing KPIs and operational metrics for stakeholder reporting." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Documented data workflows, proposed process improvements, and maintained accuracy under deadline-driven conditions." })
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "education",
						className: "relative py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, { n: "04" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-5xl font-black md:text-6xl",
								children: "Education"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 grid gap-6 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "brutal-box p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-black",
											children: "Master of Computer Applications (MCA)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mono mt-2 text-sm",
											children: "Tula's Institute · Dehradun, Uttarakhand"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mono mt-1 text-sm text-muted-foreground",
											children: "Final Year · Expected 2026"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "brutal-box p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-black",
											children: "Bachelor of Computer Applications (BCA)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mono mt-2 text-sm",
											children: "L.N. Mishra Institute of Economic Development & Social Change · Patna"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mono mt-1 text-sm text-muted-foreground",
											children: "2024 · CGPA 7.42"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mono text-sm uppercase tracking-widest",
									children: "Certifications"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 grid gap-2 md:grid-cols-3",
									children: [
										"Google Data Analytics Professional Certificate — Coursera",
										"Microsoft Power BI Data Analyst (PL-300)",
										"Web Development — SimpliLearn / SkillUP"
									].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "brutal-box-sm p-4 text-sm font-semibold",
										children: ["· ", c]
									}, c))
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "projects",
						className: "relative py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, { n: "05" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-5xl font-black md:text-6xl",
								children: "Projects"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mono mt-4 text-sm text-muted-foreground",
								children: "Things I've built and shipped."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-cursor-hide-ring": true,
								className: "mt-12 brutal-box-lg border-2 border-ink bg-card p-8 shadow-[10px_10px_0_0_var(--ink)] md:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "chip bg-primary",
											children: "Featured Project"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mono text-xs text-muted-foreground",
											children: PROJECTS[0].tag
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-3xl font-black md:text-4xl",
										children: PROJECTS[0].title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex flex-wrap gap-2",
										children: PROJECTS[0].stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "chip",
											children: s
										}, s))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-lg leading-relaxed",
										children: PROJECTS[0].blurb
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 grid gap-4 md:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-l-4 border-ink pl-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mono text-xs uppercase text-muted-foreground",
												children: "Problem"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm",
												children: PROJECTS[0].problem
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-l-4 border-primary pl-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mono text-xs uppercase text-muted-foreground",
												children: "Solution"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm",
												children: PROJECTS[0].solution
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex flex-wrap items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mono text-xs",
											children: PROJECTS[0].meta
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: PROJECTS[0].href,
												target: "_blank",
												rel: "noreferrer",
												className: "brutal-box-sm bg-primary px-5 py-2 mono text-xs font-bold uppercase tracking-wider transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5",
												children: "Live Project →"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: PROJECTS[0].github,
												target: "_blank",
												rel: "noreferrer",
												className: "brutal-box-sm bg-card px-5 py-2 mono text-xs font-bold uppercase tracking-wider transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5",
												children: "GitHub ↗"
											})]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mono text-sm uppercase tracking-widest",
									children: "More Projects"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 grid gap-6 md:grid-cols-2",
									children: PROJECTS.slice(1).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-cursor-hide-ring": true,
										className: "brutal-box group flex flex-col p-6 transition-transform hover:-translate-x-1 hover:-translate-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mono text-xs text-muted-foreground",
												children: p.tag
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "mt-2 text-xl font-black",
												children: p.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-3 flex flex-wrap gap-1.5",
												children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "chip",
													children: s
												}, s))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 flex-1 text-sm leading-relaxed",
												children: p.blurb
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 flex flex-wrap items-center justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mono text-xs",
													children: p.meta
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: p.github,
													target: "_blank",
													rel: "noreferrer",
													className: "brutal-box-sm bg-card px-4 py-1.5 mono text-xs font-bold uppercase tracking-wider transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5",
													children: "GitHub ↗"
												})]
											})
										]
									}, p.title))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-cursor-hide-ring": true,
								className: "mt-12 brutal-box flex flex-wrap items-center justify-between gap-4 bg-primary p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mono text-xs uppercase",
									children: "More coming"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-black",
									children: "Always building."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://github.com/Sunnykumar1554",
									target: "_blank",
									rel: "noreferrer",
									className: "brutal-box-sm bg-card px-5 py-2 mono text-xs font-bold uppercase tracking-wider",
									children: "GitHub ↗"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-cursor-hide-ring": true,
								className: "mt-6 brutal-box p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mono text-xs uppercase text-muted-foreground",
									children: "Contributions"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://github.com/Sunnykumar1554",
									target: "_blank",
									rel: "noreferrer",
									className: "mt-3 block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "https://ghchart.rshah.org/Sunnykumar1554",
										alt: "Sunny Kumar GitHub contributions",
										className: "w-full",
										loading: "lazy"
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "skills",
						className: "relative py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, { n: "06" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-5xl font-black md:text-6xl",
								children: "Skills"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 space-y-6",
								children: SKILL_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mono text-xs uppercase tracking-widest text-muted-foreground",
									children: group.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: group.items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "brutal-box-sm bg-card px-3 py-1.5 text-sm font-semibold",
										children: s
									}, s))
								})] }, group.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mono text-xs uppercase tracking-widest text-muted-foreground",
									children: "Soft Skills"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: [
										"Attention to Detail",
										"Analytical Thinking",
										"Structured Problem-Solving",
										"Judgment Under Ambiguity",
										"Hindi & English Fluency",
										"Teamwork",
										"Adaptability"
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "chip",
										children: s
									}, s))
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "contact",
						className: "relative py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, { n: "07" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-5xl font-black md:text-7xl",
								children: "Let's build something."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-lg",
								children: "Open for AI/ML Data Associate roles, analyst positions, and collaborations. Let's talk."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 grid gap-4 md:grid-cols-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
										label: "Email me",
										value: "sunnykr155415@gmail.com",
										href: "mailto:sunnykr155415@gmail.com",
										hint: "Say hello!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
										label: "GitHub",
										value: "Sunnykumar1554",
										href: "https://github.com/Sunnykumar1554",
										hint: "See my code!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
										label: "LinkedIn",
										value: "sunny-kumar-01208a268",
										href: "https://www.linkedin.com/in/sunny-kumar-01208a268/",
										hint: "Let's connect!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
										label: "Phone",
										value: "+91 8864091706",
										href: "tel:+918864091706",
										hint: "Call me!"
									})
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t-2 border-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 mono text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "© 2026 Sunny Kumar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Inspired by Neo-Brutalist UI" })]
				})
			})
		]
	});
}
function SectionNumber({ n }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mono absolute right-0 top-8 text-[6rem] font-black leading-none text-ink/5 md:text-[10rem]",
		children: n
	});
}
function Divider() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0.5 w-full bg-ink" });
}
function ContactCard({ label, value, href, hint }) {
	const isMail = href.startsWith("mailto:");
	const isTel = href.startsWith("tel:");
	const clickableHref = isMail ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(href.replace("mailto:", ""))}` : href;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: isTel ? href : clickableHref,
		target: isTel ? void 0 : "_blank",
		rel: "noopener noreferrer",
		"data-cursor-hide-ring": true,
		className: "brutal-box flex flex-col p-6 transition-transform hover:-translate-x-1 hover:-translate-y-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mono text-xs uppercase text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 break-all text-lg font-black",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mono mt-3 text-xs text-primary",
				children: [hint, " →"]
			})
		]
	});
}
//#endregion
export { Portfolio as component };
