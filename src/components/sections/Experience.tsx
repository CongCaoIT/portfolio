"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin } from "lucide-react";

type JobKey = "job1" | "job2" | "job3" | "job4" | "job5" | "job6" | "job7";
const jobs: { key: JobKey }[] = [
  { key: "job1" },
  { key: "job2" },
  { key: "job3" },
  { key: "job4" },
  { key: "job5" },
  { key: "job6" },
  { key: "job7" },
];

export function Experience() {
  const t = useTranslations("experience");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const getOptionalString = (messageKey: string): string | null => {
    try {
      const value = t.raw(messageKey as never);
      return typeof value === "string" && value.trim().length > 0 ? value : null;
    } catch {
      return null;
    }
  };

  return (
    <section
      id="experience"
      className="section-padding px-4"
      style={{ background: "var(--secondary)" }}
    >
      <div className="max-w-4xl mx-auto">
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{ background: "var(--border)" }}
          />

          <div className="space-y-8">
            {jobs.map(({ key }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-6"
              >
                {(() => {
                  const companyWebsite = getOptionalString(`items.${key}.website`);

                  return (
                    <>
                      {/* Timeline dot */}
                      <div className="relative flex-shrink-0">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 relative"
                          style={{
                            background: "var(--card)",
                            borderColor: "var(--primary)",
                            color: "var(--primary)",
                          }}
                        >
                          <Briefcase size={18} />
                        </div>
                      </div>

                      {/* Content */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 p-6 rounded-2xl border mb-2"
                        style={{
                          background: "var(--card)",
                          borderColor: "var(--border)",
                        }}
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h3
                              className="text-lg font-bold"
                              style={{
                                color: "var(--foreground)",
                              }}
                            >
                              {t(`items.${key}.title` as "items.job1.title")}
                            </h3>
                            <div
                              className="flex items-center gap-1.5 text-sm mt-0.5"
                              style={{
                                color: "var(--primary)",
                              }}
                            >
                              <MapPin size={12} />
                              {companyWebsite ? (
                                <a
                                  href={companyWebsite}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline underline-offset-4 decoration-dotted hover:opacity-80 transition-opacity"
                                >
                                  {t(`items.${key}.company` as "items.job1.company")}
                                </a>
                              ) : (
                                t(`items.${key}.company` as "items.job1.company")
                              )}
                            </div>
                          </div>
                          <span
                            className="text-xs px-3 py-1 rounded-full border whitespace-nowrap"
                            style={{
                              borderColor: "var(--border)",
                              color: "var(--muted-foreground)",
                            }}
                          >
                            {t(`items.${key}.period` as "items.job1.period")}
                          </span>
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{
                            color: "var(--muted-foreground)",
                          }}
                        >
                          {t(`items.${key}.description` as "items.job1.description")}
                        </p>
                        {(() => {
                          const technologiesRaw = t.raw(
                            `items.${key}.technologies` as "items.job1.technologies"
                          );
                          const technologies = Array.isArray(technologiesRaw)
                            ? technologiesRaw.filter(
                                (item): item is string => typeof item === "string"
                              )
                            : [];

                          if (technologies.length === 0) {
                            return null;
                          }

                          return (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {technologies.map((tech) => (
                                <span
                                  key={`${key}-${tech}`}
                                  className="text-xs px-3 py-1 rounded-full border"
                                  style={{
                                    background: "var(--secondary)",
                                    borderColor: "var(--primary)",
                                    color: "var(--primary)",
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          );
                        })()}
                      </motion.div>
                    </>
                  );
                })()}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
