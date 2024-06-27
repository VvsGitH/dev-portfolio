"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { LOCALES } from "@/constants/locales";
import { ChangeEventHandler } from "react";
import { useRouter } from "@/components/navigation";

export function LangButton() {
  const currentLocale = useParams().locale;
  const router = useRouter();
  const t = useTranslations("languages");

  const updateLocale: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selected = event.target.value;
    if (!selected) return;
    router.push("/", { locale: selected });
  };

  return (
    <div>
      <label htmlFor="lang-select">{t("select_lang")}</label>
      <select id="lang-select" value={currentLocale} onChange={updateLocale}>
        {LOCALES.map((locale) => (
          <option key={locale} value={locale}>
            {t(locale)}
          </option>
        ))}
      </select>
    </div>
  );
}
