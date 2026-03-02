"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("hero");
  const roles = t.raw("roles") as string[];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border mb-6"
          style={{
            borderColor: "var(--primary)",
            color: "var(--primary)",
            background: "color-mix(in srgb, var(--primary) 10%, transparent)",
          }}
        >
          <Sparkles size={14} />
          {t("available")}
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative mx-auto mb-6 w-28 h-28 md:w-36 md:h-36"
        >
          <div
            className="absolute inset-0 rounded-full blur-md opacity-40"
            style={{ background: "var(--primary)" }}
          />
          <div
            className="relative w-full h-full rounded-full border-2 overflow-hidden"
            style={{ borderColor: "var(--primary)" }}
          >
            <Image src="/avatar.jpg" alt="Cao Tan Cong" fill className="object-cover" priority />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl mb-2"
          style={{ color: "var(--muted-foreground)" }}
        >
          {t("greeting")}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
        >
          {t("name")}
        </motion.h1>

        {/* Title with animated role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl md:text-3xl font-semibold mb-6 flex items-center justify-center gap-2"
          style={{ color: "var(--foreground)" }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              style={{ color: "var(--primary)" }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--muted-foreground)" }}
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px var(--primary)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 rounded-xl font-semibold transition-all"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            {t("cta_projects")}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 rounded-xl font-semibold border transition-all"
            style={{
              borderColor: "var(--primary)",
              color: "var(--primary)",
              background: "transparent",
            }}
          >
            {t("cta_contact")}
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/CongCaoIT/",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:caotancong2003@gmail.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-full border transition-colors"
              style={{
                borderColor: "var(--border)",
                color: "var(--muted-foreground)",
              }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
          onClick={() => scrollTo("about")}
          style={{ color: "var(--muted-foreground)" }}
        >
          <ArrowDown size={20} />
        </motion.button>
      </div>
    </section>
  );
}
