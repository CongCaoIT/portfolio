"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

type EduKey = "edu1";
const eduItems: { key: EduKey; icon: typeof GraduationCap }[] = [
  { key: "edu1", icon: GraduationCap },
];

export function Education() {
  const t = useTranslations("education");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding px-4">
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

        <div className="grid gap-6">
          {eduItems.map(({ key, icon: Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl border"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border"
                style={{
                  background: "color-mix(in srgb, var(--primary) 15%, transparent)",
                  borderColor: "var(--primary)",
                  color: "var(--primary)",
                }}
              >
                <Icon size={22} />
              </div>

              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-base font-bold" style={{ color: "var(--foreground)" }}>
                  {t(`items.${key}.degree` as "items.edu1.degree")}
                </h3>
                <span
                  className="text-xs px-2 py-1 rounded-full border whitespace-nowrap flex-shrink-0"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {t(`items.${key}.period` as "items.edu1.period")}
                </span>
              </div>

              <p className="text-sm font-medium mb-2" style={{ color: "var(--primary)" }}>
                {t(`items.${key}.school` as "items.edu1.school")}
              </p>

              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {t(`items.${key}.description` as "items.edu1.description")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
