import { Metadata, Viewport } from "next";
import { RedirectType, redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ThemeProvider } from "@/providers/theme-provider";
import { DEFAULT_LOCALE, LOCALES } from "@/constants/locales";
import { getTheme } from "@/utils/theme-server";
import { font } from "@/constants/fonts";
import { Header } from "./_components/header";

import "@/app/globals.css";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!LOCALES.includes(params.locale)) {
    redirect(`/${DEFAULT_LOCALE}`, RedirectType.replace);
  }

  const messages = useMessages();
  const theme = getTheme();

  return (
    <html lang={params.locale} data-theme={theme}>
      <body className={`${font.className} flex flex-col h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider serverTheme={theme}>
            <Header />
            {children}
            <div className="footer-image" />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "metadata" });
  const url = new URL("https://vito.ps.dev");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "Software",
      "Web",
      "Development",
      "Developer",
      "Javascript",
      "Typescript",
      "Node.js",
      "React",
      "Next.js",
      "Angular",
    ],
    authors: [{ name: "Vito Paparella Santorsola" }],
    creator: "Vito Paparella Santorsola",
    applicationName: "Vito PS Portfolio",

    metadataBase: url,
    alternates: {
      canonical: "/",
      languages: {
        "it-IT": "/it",
        "en-US": "/en",
      },
    },

    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      siteName: "Vito PS Portfolio",
      locale: params.locale,
      url: url,
    },

    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
  };
}

export async function generateViewport(): Promise<Viewport> {
  const theme = getTheme();
  let themeColor: string | { media: string; color: string }[];
  if (!theme) {
    themeColor = [
      { media: "(prefers-color-scheme: light)", color: "#fff" },
      { media: "(prefers-color-scheme: dark)", color: "#000" },
    ];
  } else {
    themeColor = theme === "dark" ? "#000" : "#fff";
  }
  return { themeColor };
}
