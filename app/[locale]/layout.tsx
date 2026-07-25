import "../globals.css";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n/context";
import { type Locale, resolveLocale } from "@/lib/i18n/locale-store";
import { baseUrl } from "@/lib/site";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const META: Record<Locale, { description: string; title: string }> = {
  en: {
    description:
      "Professional Korean app localization with developer-grade precision. iOS, Android, Web coverage with API-driven workflow automation.",
    title: "Andrew, Yu | Korean App Localization Specialist",
  },
  ko: {
    description:
      "개발자 수준의 정밀함으로 제공하는 전문 한국어 앱 로컬라이제이션. iOS, Android, 웹을 아우르는 API 기반 워크플로 자동화.",
    title: "Andrew, Yu | 한국어 앱 로컬라이제이션 전문가",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  availableLanguage: ["en", "ko"],
  description: META.en.description,
  founder: {
    "@type": "Person",
    jobTitle: "Korean App Localization Specialist",
    name: "Andrew, Yu",
    sameAs: [
      "https://github.com/AndrewDongminYoo",
      "https://www.linkedin.com/in/dongmin-yu-0394a5223/",
      "https://www.upwork.com/freelancers/~016fc725ffde2a2ee2",
    ],
  },
  name: "Andrew, Yu — Korean App Localization",
  serviceType: "App localization (English to Korean)",
  url: baseUrl,
};

export const dynamicParams = false;

export function generateStaticParams(): { locale: Locale }[] {
  return [{ locale: "en" }, { locale: "ko" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  return {
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", ko: "/ko", "x-default": "/en" },
    },
    description: META[locale].description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      description: META[locale].description,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      siteName: "Andrew, Yu — Korean App Localization",
      title: META[locale].title,
      type: "website",
      url: `/${locale}`,
    },
    title: META[locale].title,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = resolveLocale((await params).locale);
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable}`}
      lang={locale}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange enableSystem>
          <I18nProvider initialLocale={locale}>{children}</I18nProvider>
        </ThemeProvider>
        <Analytics />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
