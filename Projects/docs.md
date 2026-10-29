vision-fit-client/
├── src/
│   ├── app/
│   │   │                                   # KHÔNG có app/layout.tsx và app/page.tsx
│   │   ├── globals.css
│   │   ├── favicon.ico
│   │   ├── global-not-found.tsx            # 404 cho URL không khớp route (experimental, tự có <html>)
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   └── [locale]/
│   │       ├── layout.tsx                  # ROOT LAYOUT: <html lang={locale}>, font, validate locale
│   │       ├── page.tsx                    # trang chủ
│   │       ├── not-found.tsx               # 404 theo ngôn ngữ
            ├── [...rest]/page.tsx  # catch-all gọi notFound()
│   │       ├── (public)/
│   │       │   ├── jobs/
│   │       │   │   ├── page.tsx
│   │       │   │   ├── loading.tsx
│   │       │   │   ├── [slug]/page.tsx
│   │       │   │   ├── category/[slug]/page.tsx
│   │       │   │   └── location/[slug]/page.tsx
│   │       │   └── companies/
│   │       │       ├── page.tsx
│   │       │       └── [slug]/page.tsx
│   │       ├── (auth)/                     # layout.tsx chỉ khi cần khung riêng hoặc noindex chung
│   │       │   ├── login/page.tsx
│   │       │   ├── register/page.tsx
│   │       │   ├── verify-email/page.tsx
│   │       │   ├── forgot-password/page.tsx
│   │       │   └── reset-password/page.tsx
│   │       └── (private)/                  # layout.tsx đặt noindex chung
│   │           ├── account/page.tsx
│   │           ├── candidate/...
│   │           ├── recruiter/...
│   │           ├── conversations/...
│   │           └── admin/...
│   │
│   ├── features/                           # mỗi domain: components, hooks, actions, services, schemas, types
│   │   ├── auth/
│   │   ├── jobs/
│   │   ├── companies/
│   │   ├── candidate/
│   │   ├── recruiter/
│   │   ├── chat/
│   │   └── admin/
│   │
│   ├── components/
│   │   ├── ui/                             # shadcn (đã có button.tsx)
│   │   ├── layout/                         # site-header, site-footer, language-switcher
│   │   ├── seo/                            # json-ld.tsx
│   │   └── common/
│   │
│   ├── lib/
│   │   ├── api/                            # HTTP layer gọi backend (server-only)
│   │   │   ├── api-fetch.ts                # hoặc client.ts, chọn một tên
│   │   │   ├── error.ts
│   │   │   ├── response.ts
│   │   │   └── index.ts
│   │   ├── utils.ts                        # cn()
│   │   ├── format.ts
│   │   └── slug.ts
│   │
│   ├── auth/                               # session, cookies, guards
│   ├── i18n/                               # config, get-dictionary, fallback, messages/{ja,vi}
│   ├── seo/                                # urls, metadata, json-ld, breadcrumbs
│   ├── config/                             # env.ts, routes.ts
│   ├── constants/                          # languages.ts hiện có (nên chuyển chuỗi sang i18n)
│   └── hooks/                              # hook client dùng chung
│
├── e2e/                                    # Playwright
├── public/
├── components.json
├── next.config.ts                          # redirects: "/" -> "/ja", cờ globalNotFound
├── tsconfig.json
├── eslint.config.mjs
├── .env.example                            # API_BASE_URL, SITE_URL
└── package.json

---------------------------------
# Fixed Version
vision-fit-client/
├── .env
├── .gitignore
├── .yarnrc.yml
├── AGENTS.md                       # do next dev tạo lại
├── README.md
├── components.json                 # cấu hình shadcn
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts                  # createNextIntlPlugin, globalNotFound
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── yarn.lock
├── public/                         # svg mẫu (nên xoá), ảnh tĩnh, og-image (sẽ thêm)
├── e2e/                            # (sẽ thêm) Playwright: SSR, hreflang, noindex
└── src/
    ├── proxy.ts                    # tiền tố /ja, /vi và redirect (next-intl)
    │
    ├── app/
    │   ├── globals.css
    │   ├── favicon.ico
    │   ├── robots.ts
    │   ├── sitemap.ts              # (sẽ thêm)
    │   ├── global-not-found.tsx    # 404 dự phòng, song ngữ
    │   └── [locale]/
    │       ├── layout.tsx          # <html lang>, font, NextIntlClientProvider
    │       ├── page.tsx            # trang chủ
    │       ├── not-found.tsx       # 404 theo locale
    │       ├── [...rest]/page.tsx  # catch-all gọi notFound()
    │       │
    │       ├── jobs/               # (sẽ thêm) công khai, SEO
    │       │   ├── page.tsx
    │       │   ├── [slug]/page.tsx
    │       │   ├── category/[slug]/page.tsx
    │       │   └── location/[slug]/page.tsx
    │       ├── companies/          # (sẽ thêm) công khai, SEO
    │       │   ├── page.tsx
    │       │   └── [slug]/page.tsx
    │       ├── login/page.tsx      # (sẽ thêm) noindex
    │       ├── register/page.tsx   # (sẽ thêm) noindex
    │       └── (private)/          # (sẽ thêm) layout noindex dùng chung
    │           ├── layout.tsx
    │           ├── candidate/...
    │           ├── recruiter/...
    │           └── admin/...
    │
    ├── components/
    │   ├── ui/                     # shadcn: button... (không chứa chuỗi hiển thị)
    │   └── layout/                 # site-header, site-footer, language-switcher
    │
    ├── hooks/                      # use-language-switcher (hiện đang ở app/hooks/)
    ├── configs/                    # api, fonts, language, routes, seo
    │
    ├── i18n/
    │   ├── config.ts               # locales, defaultLocale, localeNames
    │   ├── routing.ts              # defineRouting (proxy dùng)
    │   ├── navigation.ts           # Link, useRouter, usePathname có locale
    │   ├── request.ts              # đọc locale bằng next/root-params, nạp messages
    │   ├── global.d.ts             # gõ kiểu key của useTranslations
    │   └── messages/               # index.ts, ja.ts, vi.ts
    │
    ├── seo/                        # (sẽ thêm) canonical, hreflang, metadata, JSON-LD
    ├── lib/
    │   ├── utils.ts
    │   └── api/                    # api-fetch, error, response
    ├── services/                   # (sẽ thêm) client gọi API theo domain: jobs, companies...
    └── features/                   # (sẽ thêm, tuỳ chọn) component riêng cho từng tính năng
