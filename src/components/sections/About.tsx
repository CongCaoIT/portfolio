"use client";

import React, { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  Code2,
  Users,
  Briefcase,
  Cpu,
  MapPin,
  Mail,
  Calendar,
  Phone,
  Activity,
  Gamepad2,
  Music,
  Tv2,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";

const stats = [
  { key: "years", value: "1.5+", icon: Briefcase },
  { key: "projects", value: "15+", icon: Code2 },
  { key: "clients", value: "10,000+", icon: Activity },
  { key: "tech", value: "8+", icon: Cpu },
];

export function About() {
  const t = useTranslations("about");
  const locale = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const cvDownloadHref =
    locale === "vi" ? "/cv_caotancong_tiengviet.pdf" : "/cv_caotancong_english.pdf";

  return (
    <section id="about" className="section-padding px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
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

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative w-72 lg:w-full max-w-xs">
              {/* Glow */}
              <div
                className="absolute -inset-2 rounded-3xl blur-xl opacity-20"
                style={{ background: "var(--primary)" }}
              />
              {/* Frame */}
              <div
                className="relative rounded-3xl border-2 overflow-hidden shadow-2xl"
                style={{ borderColor: "var(--primary)" }}
              >
                <Image
                  src="/about.jpg"
                  alt="Cao Tan Cong"
                  width={400}
                  height={560}
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: "5/7" }}
                />
                {/* Overlay gradient bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-20"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  }}
                />
                {/* Name tag */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span
                    className="text-sm font-semibold px-3 py-1 rounded-full border"
                    style={{
                      background: "color-mix(in srgb, var(--primary) 20%, rgba(0,0,0,0.5))",
                      borderColor: "var(--primary)",
                      color: "#ffffff",
                    }}
                  >
                    Cao Tấn Công
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Description */}
            <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              {t("description1")}
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              {t("description2")}
            </p>

            {/* Personal info */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl border"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              {[
                { icon: Mail, label: t("info.email"), value: t("info.email_value") },
                { icon: Phone, label: t("info.phone"), value: t("info.phone_value") },
                { icon: Calendar, label: t("info.dob"), value: t("info.dob_value") },
                { icon: MapPin, label: t("info.address"), value: t("info.address_value") },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-2">
                  <Icon size={15} className="mt-0.5 shrink-0" style={{ color: "var(--primary)" }} />
                  <div>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                      {label}
                    </p>
                    <p
                      className="text-xs font-medium break-all"
                      style={{ color: "var(--foreground)" }}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map(({ key, value, icon: Icon }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-2xl border text-center"
                  style={{ background: "var(--card)", borderColor: "var(--border)" }}
                >
                  <Icon size={20} className="mx-auto mb-1" style={{ color: "var(--primary)" }} />
                  <div className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                    {value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>
                    {t(`stats.${key}` as "stats.years")}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download CV */}
            <motion.a
              href={cvDownloadHref}
              download
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px var(--primary)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all"
              style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
            >
              {t("download_cv")}
            </motion.a>

            {/* Hobbies */}
            <div>
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                {t("hobbies_title")}
              </p>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    { icon: Activity, label: t("hobbies.badminton") },
                    { icon: Gamepad2, label: t("hobbies.gaming") },
                    { icon: Music, label: t("hobbies.music") },
                    { icon: Tv2, label: t("hobbies.anime") },
                    { icon: Lightbulb, label: t("hobbies.tech") },
                  ] as { icon: React.ElementType; label: string }[]
                ).map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium"
                    style={{
                      borderColor: "var(--primary)",
                      color: "var(--primary)",
                      background: "color-mix(in srgb, var(--primary) 8%, transparent)",
                    }}
                  >
                    <Icon size={12} />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
