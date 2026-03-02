/**
 * Portfolio Color Palette
 * =========================================
 * Mệnh: Dương Liễu Mộc (Mộc) — sinh năm Quý Mùi 2003
 *
 *  Màu hợp mệnh:
 *   - Xanh lam / Navy (Blue) → Thủy sinh Mộc (dùng làm màu chủ đạo)
 *   - Cyan / Teal            → Thủy sinh Mộc (dùng làm accent nhạt)
 *
 *  Màu kỵ đã tránh:
 *   - Trắng / Xám / Bạc (Kim khắc Mộc)
 *   - Đỏ đậm (Mộc sinh Hỏa — hao tổn)
 * =========================================
 *
 * Chỉnh sửa tại đây → thay đổi tự động toàn bộ site.
 */

// ─── LIGHT MODE ────────────────────────────────────────────────
export const light = {
  /** Nền trang (sky-50 — xanh biển rất nhạt) */
  background: "#f0f9ff",

  /** Chữ chính (navy thuần — không ngả tím) */
  foreground: "#0a2540",

  /** Nền card / panel */
  card: "#ffffff",

  /** Chữ trên card */
  cardForeground: "#0a2540",

  /** Màu chủ đạo (sky-600 — xanh biển thuần) */
  primary: "#0284c7",

  /** Chữ nằm trên primary */
  primaryForeground: "#ffffff",

  /** Màu phụ (sky-100) */
  secondary: "#e0f2fe",

  /** Chữ trên secondary */
  secondaryForeground: "#0a2540",

  /** Vùng muted / placeholder */
  muted: "#f0f9ff",

  /** Chữ muted (sky-700) */
  mutedForeground: "#0369a1",

  /** Màu nhấn accent (sky-500 — xanh biển thuần) */
  accent: "#0ea5e9",

  /** Chữ trên accent */
  accentForeground: "#ffffff",

  /** Viền (sky-200) */
  border: "#bae6fd",

  /** Ring focus */
  ring: "#0284c7",

  /** Border radius mặc định */
  radius: "0.5rem",
} as const;

// ─── DARK MODE ─────────────────────────────────────────────────
export const dark = {
  /** Nền trang (ocean dark — xanh đen thuần) */
  background: "#020c1b",

  /** Chữ chính (sky-100 — trắng xanh biển) */
  foreground: "#e0f2fe",

  /** Nền card (ocean card) */
  card: "#0d2137",

  /** Chữ trên card */
  cardForeground: "#e0f2fe",

  /** Màu chủ đạo (sky-500 — xanh biển thuần) */
  primary: "#0ea5e9",

  /** Chữ nằm trên primary */
  primaryForeground: "#ffffff",

  /** Màu phụ dark */
  secondary: "#0c2a47",

  /** Chữ trên secondary */
  secondaryForeground: "#e0f2fe",

  /** Vùng muted dark */
  muted: "#0c2a47",

  /** Chữ muted (sky-300 — dễ đọc) */
  mutedForeground: "#7dd3fc",

  /** Màu nhấn accent (sky-400 — accent sáng) */
  accent: "#38bdf8",

  /** Chữ trên accent */
  accentForeground: "#0a2540",

  /** Viền dark (sky-900) */
  border: "#0c4a6e",

  /** Ring focus dark */
  ring: "#0ea5e9",
} as const;

// ─── GRADIENT (dùng trên heading nổi bật) ─────────────────────
export const gradient = {
  /** Gradient chữ hero / section title (sky → azure → cyan) */
  text: "linear-gradient(135deg, #0284c7, #0ea5e9, #22d3ee)",

  /** Gradient nền hero / banner */
  heroBg: "linear-gradient(135deg, #020c1b 0%, #0d2137 60%, #0a2540 100%)",

  /** Gradient card hover */
  cardHover: "linear-gradient(135deg, #0ea5e922, #38bdf822)",
} as const;

// ─── SECTION ACCENT COLORS ────────────────────────────────────
/**
 * Màu nhấn riêng cho từng section.
 * Giá trị là CSS color string — đổi thoải mái.
 */
export const sectionAccents = {
  hero: "#0ea5e9" /* sky-500 — xanh biển thuần */,
  about: "#0284c7" /* sky-600                  */,
  skills: "#38bdf8" /* sky-400 sáng             */,
  projects: "#0369a1" /* sky-700                  */,
  experience: "#0ea5e9" /* sky-500                  */,
  education: "#22d3ee" /* cyan-400                 */,
  contact: "#0284c7" /* sky-600                  */,
} as const;
