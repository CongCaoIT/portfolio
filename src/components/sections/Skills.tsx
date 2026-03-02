"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillsData = {
  frontend: [
    { name: "React / Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Vue.js", level: 70 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Python / FastAPI", level: 75 },
    { name: "Go", level: 60 },
    { name: "REST / GraphQL", level: 80 },
  ],
  database: [
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Redis", level: 65 },
    { name: "MySQL", level: 70 },
  ],
  tools: [
    { name: "Git / GitHub", level: 90 },
    { name: "Docker / K8s", level: 70 },
    { name: "AWS / GCP", level: 65 },
    { name: "CI/CD", level: 75 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between text-sm">
        <span style={{ color: "var(--foreground)" }}>{name}</span>
        <span style={{ color: "var(--muted-foreground)" }}>{level}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--secondary)" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, var(--primary), var(--accent))",
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const t = useTranslations("skills");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="section-padding px-4"
      style={{ background: "var(--secondary)" }}
    >
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

        <div className="grid md:grid-cols-2 gap-8">
          {(
            Object.entries(skillsData) as [
              keyof typeof skillsData,
              { name: string; level: number }[],
            ][]
          ).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: catIndex * 0.1,
              }}
              className="p-6 rounded-2xl border"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <h3 className="text-lg font-semibold mb-5" style={{ color: "var(--primary)" }}>
                {t(`categories.${category}` as "categories.frontend")}
              </h3>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIndex * 0.1 + i * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
