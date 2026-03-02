"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";

export function Contact() {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate sending
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2";

  const contactInfo = [
    { icon: Mail, label: t("info.email"), value: "your@email.com" },
    { icon: MapPin, label: t("info.location"), value: "Ha Noi, Vietnam" },
    {
      icon: Clock,
      label: t("info.availability"),
      value: "Mon - Fri, 9AM - 6PM",
    },
  ];

  return (
    <section
      id="contact"
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

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              {t("description")}
            </p>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "color-mix(in srgb, var(--primary) 15%, transparent)",
                      color: "var(--primary)",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <p
                      className="text-xs"
                      style={{
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{
                        color: "var(--foreground)",
                      }}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder={t("form.name")}
                  className={inputClass}
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                    // @ts-expect-error - CSS custom property
                    "--tw-ring-color": "var(--primary)",
                  }}
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder={t("form.email")}
                  className={inputClass}
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                />
              </div>

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder={t("form.subject")}
                className={inputClass}
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t("form.message")}
                className={`${inputClass} resize-none`}
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              />

              <motion.button
                type="submit"
                disabled={status === "sending" || status === "success"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-60"
                style={{
                  background: status === "success" ? "#22c55e" : "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                <Send size={16} />
                {status === "sending"
                  ? t("form.sending")
                  : status === "success"
                    ? t("form.success")
                    : t("form.send")}
              </motion.button>

              {status === "error" && (
                <p className="text-sm text-center text-red-500">{t("form.error")}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
