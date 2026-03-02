"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

type ProjectKey = "project1" | "project2" | "project3" | "project4" | "project5" | "project6";

const projectsData: {
  key: ProjectKey;
  tags: string[];
  github: string;
  demo: string;
}[] = [
  {
    key: "project1",
    tags: ["Android Java", "MySQL", "PHP API", "Firebase"],
    github: "https://github.com/CongCaoIT/",
    demo: "",
  },
  {
    key: "project2",
    tags: ["PHP", "MySQL"],
    github: "https://github.com/CongCaoIT/",
    demo: "",
  },
  {
    key: "project3",
    tags: ["Java Swing", "SQL Server"],
    github: "https://github.com/CongCaoIT/",
    demo: "",
  },
  {
    key: "project4",
    tags: ["ASP.NET MVC", "SQL Server"],
    github: "https://github.com/CongCaoIT/",
    demo: "",
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
          {projectsData.map(({ key, tags, github, demo }, i) => (
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
              <div className="flex gap-3">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
