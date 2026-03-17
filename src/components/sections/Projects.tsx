"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Github,
  ExternalLink,
  X,
  ChevronRight,
  Globe,
  Settings,
  Package,
  Users,
} from "lucide-react";

type ProjectKey = "project1" | "project2" | "project3" | "project4" | "project5" | "project6";

const DETAIL_GROUPS = ["website", "system", "products", "members"] as const;
type DetailGroup = (typeof DETAIL_GROUPS)[number];

const GROUP_ICONS: Record<
  DetailGroup,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  website: Globe,
  system: Settings,
  products: Package,
  members: Users,
};

const projectsData: {
  key: ProjectKey;
  tags: string[];
  github: string;
  demo: string;
  hasDetails?: boolean;
}[] = [
  {
    key: "project1",
    tags: ["NestJS", "Next.js", "MySQL"],
    github: "https://github.com/COVASOL/Clothing.git",
    demo: "https://tafas.vn",
    hasDetails: true,
  },
  {
    key: "project2",
    tags: ["ReactJS", "ExpressJS", "Node.js"],
    github: "https://github.com/COVASOL/smartmath.git",
    demo: "https://smartmath.covasol.io.vn/",
    hasDetails: true,
  },
  {
    key: "project3",
    tags: ["React Native", "Web Admin", "Google Maps API", "Logistics"],
    github: "https://github.com/CongCaoIT/",
    demo: "https://sof.com.vn",
    hasDetails: true,
  },
  {
    key: "project4",
    tags: ["PHP", "Laravel", "MySQL"],
    github: "https://github.com/CongCaoIT/",
    demo: "https://youtu.be/pMGjSCBlxDY",
    hasDetails: true,
  },
  {
    key: "project5",
    tags: [".NET WinForms", "Dev Express", "SQL Server"],
    github: "https://github.com/CongCaoIT/",
    demo: "",
  },
  {
    key: "project6",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/CongCaoIT/",
    demo: "",
  },
];

export function Projects() {
  const t = useTranslations("projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeDetail, setActiveDetail] = useState<ProjectKey | null>(null);

  return (
    <section id="projects" className="section-padding px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            {t("section_title")}
          </h2>
          <p className="text-sm mb-4" style={{ color: "var(--muted-foreground)" }}>
            {t("section_subtitle")}
          </p>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "var(--primary)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map(({ key, tags, github, demo, hasDetails }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl border flex flex-col group"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              {/* Project thumbnail placeholder */}
              <div
                className="w-full h-36 rounded-xl mb-4 flex items-center justify-center text-4xl font-bold"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, var(--primary) 20%, transparent), color-mix(in srgb, var(--accent) 20%, transparent))`,
                  color: "var(--primary)",
                }}
              >
                {i + 1}
              </div>

              <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                {t(`items.${key}.title` as "items.project1.title")}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1 mb-4"
                style={{ color: "var(--muted-foreground)" }}
              >
                {t(`items.${key}.description` as "items.project1.description")}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "color-mix(in srgb, var(--primary) 15%, transparent)",
                      color: "var(--primary)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-3">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium transition-colors"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    <Github size={14} />
                    {t("view_code")}
                  </a>
                )}
                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium transition-colors"
                    style={{ color: "var(--primary)" }}
                  >
                    <ExternalLink size={14} />
                    {t("live_demo")}
                  </a>
                )}
                {hasDetails && (
                  <button
                    onClick={() => setActiveDetail(key)}
                    className="flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-80 ml-auto"
                    style={{ color: "var(--primary)" }}
                  >
                    {t("view_details")}
                    <ChevronRight size={14} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeDetail && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setActiveDetail(null)}
            />
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border pointer-events-auto"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                {/* Modal header */}
                <div
                  className="flex items-start justify-between gap-4 p-6 pb-4 sticky top-0 rounded-t-2xl"
                  style={{ background: "var(--card)", borderBottom: "1px solid var(--border)" }}
                >
                  <div>
                    <h3 className="text-xl font-bold gradient-text">
                      {t(`items.${activeDetail}.title` as "items.project1.title")}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
                      {t("features_title")}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveDetail(null)}
                    className="flex-shrink-0 p-1.5 rounded-lg transition-colors hover:opacity-70"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Feature groups */}
                <div className="p-6 grid sm:grid-cols-2 gap-4">
                  {DETAIL_GROUPS.map((group) => {
                    const Icon = GROUP_ICONS[group];
                    const items = t.raw(`items.${activeDetail}.details.${group}.items`) as string[];
                    const title = t.raw(`items.${activeDetail}.details.${group}.title`) as string;
                    return (
                      <div
                        key={group}
                        className="p-4 rounded-xl border"
                        style={{
                          background: "color-mix(in srgb, var(--primary) 5%, transparent)",
                          borderColor: "color-mix(in srgb, var(--primary) 20%, transparent)",
                        }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                              background: "color-mix(in srgb, var(--primary) 15%, transparent)",
                              color: "var(--primary)",
                            }}
                          >
                            <Icon size={14} />
                          </div>
                          <span
                            className="text-sm font-semibold"
                            style={{ color: "var(--foreground)" }}
                          >
                            {title}
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {items.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2 text-xs"
                              style={{ color: "var(--muted-foreground)" }}
                            >
                              <span
                                className="w-1 h-1 rounded-full flex-shrink-0"
                                style={{ background: "var(--primary)" }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="px-6 pb-6 flex gap-3">
                  {projectsData.find((p) => p.key === activeDetail)?.demo && (
                    <a
                      href={projectsData.find((p) => p.key === activeDetail)!.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
                      style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                    >
                      <ExternalLink size={14} />
                      {t("live_demo")}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
