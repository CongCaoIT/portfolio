# 📁 Source Structure

Dưới đây là cấu trúc thư mục của dự án **Next.js Portfolio**.

---

## Tổng quan

```
e:\Portfolio\
├── .github\
│   └── copilot-instructions.md     # Hướng dẫn tùy chỉnh cho GitHub Copilot
├── messages\
│   ├── en.json                     # Nội dung tiếng Anh (i18n)
│   └── vi.json                     # Nội dung tiếng Việt (i18n)
├── public\                          # Tài nguyên tĩnh (ảnh, icons, ...)
├── src\
│   ├── app\                         # Next.js App Router
│   ├── components\                  # Các React components
│   ├── i18n\                        # Cấu hình đa ngôn ngữ
│   ├── lib\                         # Tiện ích dùng chung
│   └── proxy.ts                     # Middleware định tuyến theo locale
├── next.config.ts                   # Cấu hình Next.js + next-intl
├── tailwind.config.ts               # Cấu hình Tailwind CSS
├── tsconfig.json                    # Cấu hình TypeScript
└── package.json                     # Dependencies và scripts
```

---

## `src/app/` — Next.js App Router

```
src/app/
├── favicon.ico                      # Icon tab trình duyệt
├── globals.css                      # CSS toàn cục, CSS variables dark/light theme
├── layout.tsx                       # Root layout (passthrough sang [locale])
├── page.tsx                         # Root page — redirect tới /en
└── [locale]/                        # Dynamic route theo ngôn ngữ (en | vi)
    ├── layout.tsx                   # Locale layout: ThemeProvider + NextIntlClientProvider
    └── page.tsx                     # Trang chính — ghép toàn bộ sections
```

### `globals.css`

Định nghĩa CSS custom properties (`--background`, `--foreground`, `--primary`, ...) cho cả hai theme:

- `:root { ... }` → Light theme
- `.dark { ... }` → Dark theme

---

## `src/components/` — React Components

```
src/components/
├── Navbar.tsx                       # Thanh điều hướng cố định, toggle ngôn ngữ & theme
├── Footer.tsx                       # Chân trang
├── providers/
│   └── ThemeProvider.tsx            # Wrapper cho next-themes
└── sections/
    ├── Hero.tsx                     # Section đầu trang: tên, chức danh, CTA
    ├── About.tsx                    # Giới thiệu bản thân + thống kê
    ├── Skills.tsx                   # Kỹ năng với thanh tiến trình animated
    ├── Projects.tsx                 # Danh sách dự án nổi bật
    ├── Experience.tsx               # Kinh nghiệm làm việc (timeline)
    ├── Education.tsx                # Học vấn & chứng chỉ
    └── Contact.tsx                  # Form liên hệ
```

### Navbar.tsx

- Cố định trên đầu trang, blur backdrop khi scroll
- Nút **EN ↔ VI** để chuyển ngôn ngữ
- Nút ☀️/🌙 để chuyển dark/light theme
- Responsive: mobile menu ẩn/hiện

### sections/

| File             | Mô tả                                                             |
| ---------------- | ----------------------------------------------------------------- |
| `Hero.tsx`       | Intro, tên, chức danh, nút CTA, social links                      |
| `About.tsx`      | Bio text, avatar placeholder, 4 thống kê (năm KN, projects, ...)  |
| `Skills.tsx`     | 4 nhóm kỹ năng, animated progress bar khi scroll vào              |
| `Projects.tsx`   | 3 project cards với tags, link GitHub và Demo                     |
| `Experience.tsx` | Timeline dọc với 3 vị trí công việc                               |
| `Education.tsx`  | 2 thẻ học vấn/chứng chỉ                                           |
| `Contact.tsx`    | Form liên hệ (name, email, subject, message) + thông tin liên lạc |

---

## `src/i18n/` — Cấu hình Đa Ngôn Ngữ

```
src/i18n/
├── routing.ts                       # Khai báo locales: ["en", "vi"], defaultLocale: "en"
└── request.ts                       # Cấu hình getRequestConfig, nạp file messages theo locale
```

### Luồng hoạt động i18n

```
Request /vi/...
  └─► proxy.ts (middleware)          # Phát hiện locale từ URL
        └─► [locale]/layout.tsx      # Nạp messages/vi.json
              └─► NextIntlClientProvider
                    └─► useTranslations("section_key")
```

---

## `src/lib/` — Tiện ích

```
src/lib/
└── utils.ts                         # Hàm cn() — kết hợp clsx + tailwind-merge
```

---

## `src/proxy.ts` — Middleware

```ts
// Tự động redirect theo locale
// Ví dụ: / → /en, /about → /en/about
```

Matcher: tất cả route trừ `api`, `_next`, `_vercel`, và file tĩnh.

---

## `messages/` — Nội dung Đa Ngôn Ngữ

```
messages/
├── en.json    # Tiếng Anh
└── vi.json    # Tiếng Việt
```

Cả hai file có cùng cấu trúc key:

```json
{
  "nav":        { "home", "about", "skills", ... },
  "hero":       { "greeting", "name", "title", "subtitle", "cta_projects", ... },
  "about":      { "section_title", "description1", "description2", "stats": { ... } },
  "skills":     { "section_title", "section_subtitle", "categories": { ... } },
  "projects":   { "section_title", "items": { "project1": { "title", "description" }, ... } },
  "experience": { "section_title", "items": { "job1": { "title", "company", "period", ... } } },
  "education":  { "section_title", "items": { "edu1": { "degree", "school", "period", ... } } },
  "contact":    { "section_title", "form": { ... }, "info": { ... } },
  "footer":     { "made_with", "by", "rights" },
  "theme":      { "toggle", "light", "dark", "system" }
}
```

> **Để thêm ngôn ngữ mới:** thêm locale vào `src/i18n/routing.ts` và tạo file `messages/<locale>.json`.

---

## Công nghệ sử dụng

| Thư viện                  | Mục đích                                        |
| ------------------------- | ----------------------------------------------- |
| `next` 16                 | Framework React, App Router, SSR                |
| `typescript`              | Type safety                                     |
| `tailwindcss`             | Utility-first CSS                               |
| `framer-motion`           | Animations (scroll-triggered, hover, page load) |
| `next-intl`               | Đa ngôn ngữ (EN/VI)                             |
| `next-themes`             | Đa theme (dark/light)                           |
| `lucide-react`            | Icon library                                    |
| `clsx` + `tailwind-merge` | Kết hợp class names an toàn                     |
| `@radix-ui/*`             | Headless UI primitives (shadcn/ui base)         |

---

## Scripts

```bash
npm run dev     # Chạy dev server (http://localhost:3000)
npm run build   # Build production
npm run start   # Chạy production server
npm run lint    # Kiểm tra linting
```

---

## Cách cá nhân hóa

1. **Thông tin cá nhân** → sửa `messages/en.json` và `messages/vi.json`
2. **Kỹ năng** → sửa mảng `skillsData` trong `src/components/sections/Skills.tsx`
3. **Dự án** → sửa `projectsData` trong `src/components/sections/Projects.tsx`
4. **Ảnh đại diện** → thay placeholder `YN` trong `src/components/sections/About.tsx` bằng `<Image>`
5. **Màu chủ đạo** → đổi `--primary` trong `src/app/globals.css`
6. **Social links** → cập nhật `href` trong `src/components/sections/Hero.tsx`
