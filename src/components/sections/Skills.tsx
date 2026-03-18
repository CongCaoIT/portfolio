"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type SkillLevel = "proficient" | "intermediate" | "familiar";

type SkillItem = {
  name: string;
  level: SkillLevel;
};

const skillsData = {
  frontend: [
    { name: "NextJS", level: "proficient" },
    { name: "ReactJS", level: "proficient" },
    { name: "JavaScript", level: "intermediate" },
    { name: "HTML / CSS", level: "intermediate" },
  ],
  backend: [
    { name: "PHP", level: "proficient" },
    { name: "Laravel", level: "proficient" },
    { name: "NestJS", level: "intermediate" },
    { name: "ExpressJS", level: "intermediate" },
    { name: "ASP .NET MVC", level: "intermediate" },
    { name: "Python", level: "familiar" },
  ],
  database: [
    { name: "SQL Server / MySQL", level: "proficient" },
    { name: "NoSQL (MongoDB)", level: "familiar" },
  ],
  tools: [
    { name: "Android Java", level: "intermediate" },
    { name: ".NET WinForms", level: "intermediate" },
    { name: "React Native", level: "familiar" },
    { name: "Java Swing", level: "familiar" },
  ],
  other: [
    { name: "GitHub", level: "proficient" },
    { name: "AI Tools", level: "intermediate" },
    { name: "Word / Excel", level: "intermediate" },
    { name: "Canva", level: "familiar" },
  ],
};

const levelStyles: Record<SkillLevel, { bg: string; border: string; text: string }> = {
  proficient: {
    bg: "color-mix(in srgb, var(--primary) 14%, transparent)",
    border: "color-mix(in srgb, var(--primary) 30%, transparent)",
    text: "var(--primary)",
  },
  intermediate: {
    bg: "color-mix(in srgb, var(--accent) 14%, transparent)",
    border: "color-mix(in srgb, var(--accent) 30%, transparent)",
    text: "var(--foreground)",
  },
  familiar: {
    bg: "color-mix(in srgb, var(--muted-foreground) 12%, transparent)",
    border: "var(--border)",
    text: "var(--muted-foreground)",
  },
};

export function Skills() {
  const t = useTranslations("skills");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const levelLegend: SkillLevel[] = ["proficient", "intermediate", "familiar"];

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
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {levelLegend.map((level) => (
              <span
                key={level}
                className="text-xs px-3 py-1 rounded-full border font-medium"
                style={{
                  background: levelStyles[level].bg,
                  borderColor: levelStyles[level].border,
                  color: levelStyles[level].text,
                }}
              >
                {t(`levels.${level}` as "levels.proficient")}
              </span>
            ))}
          </div>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "var(--primary)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {(
            Object.entries(skillsData) as [
              keyof typeof skillsData,
              SkillItem[],
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
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold" style={{ color: "var(--primary)" }}>
                  {t(`categories.${category}` as "categories.frontend")}
                </h3>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                  {skills.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.28, delay: catIndex * 0.08 + i * 0.05 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border"
                    style={{
                      background: levelStyles[skill.level].bg,
                      borderColor: levelStyles[skill.level].border,
                    }}
                  >
                    <span className="text-xs font-medium" style={{ color: "var(--foreground)" }}>
                      {skill.name}
                    </span>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wide"
                      style={{ color: levelStyles[skill.level].text }}
                    >
                      {t(`levels.${skill.level}` as "levels.proficient")}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
