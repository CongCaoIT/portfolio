"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, Briefcase, Cpu } from "lucide-react";
import Image from "next/image";

const stats = [
  { key: "years", value: "1", icon: Briefcase },
  { key: "projects", value: "10+", icon: Code2 },
  { key: "clients", value: "100+", icon: Users },
  { key: "tech", value: "8+", icon: Cpu },
];

export function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {t("section_title")}
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "var(--primary)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Avatar */}
            <div className="relative mx-auto lg:mx-0 w-40 h-40">
              <div
                className="absolute inset-0 rounded-2xl blur-md opacity-30"
                style={{ background: "var(--primary)" }}
              />
              <div
                className="relative w-full h-full rounded-2xl border-2 overflow-hidden"
                style={{ borderColor: "var(--primary)" }}
              >
                <Image src="/avatar.jpg" alt="Cao Tan Cong" fill className="object-cover" />
              </div>
            </div>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              {t("description1")}
            </p>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              {t("description2")}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ key, value, icon: Icon }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.1,
                }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl border text-center"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <Icon size={24} className="mx-auto mb-2" style={{ color: "var(--primary)" }} />
                <div className="text-3xl font-bold mb-1" style={{ color: "var(--foreground)" }}>
                  {value}
                </div>
                <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  {t(`stats.${key}` as "stats.years")}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
