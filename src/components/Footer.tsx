"use client";

import { useTranslations } from "next-intl";
import { Heart } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-4 border-t text-center"
      style={{
        borderColor: "var(--border)",
        background: "var(--background)",
      }}
    >
      <p
        className="text-sm flex items-center justify-center gap-1.5 flex-wrap"
        style={{ color: "var(--muted-foreground)" }}
      >
        {t("made_with")}
        <Heart size={14} className="text-red-500 fill-red-500" />
        {t("by")}
        <span className="font-medium gradient-text">Cao Tan Cong</span>
        &mdash; &copy; {year} {t("rights")}
      </p>
    </footer>
  );
}
