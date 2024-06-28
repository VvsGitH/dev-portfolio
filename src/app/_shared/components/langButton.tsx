"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { LOCALES } from "@/constants/locales";
import { useRouter } from "@/components/navigation";
import { Select, SelectOption } from "./select";

export function LangButton() {
  const params = useParams();
  const router = useRouter();
  const t = useTranslations("languages");

  const localeOptions: SelectOption<string>[] = LOCALES.map((locale) => ({
    value: locale,
    label: t(locale),
    displayAs: <span className="font-semibold">{locale.toUpperCase()}</span>,
  }));

  const currentLocale = localeOptions.find((opt) => opt.value === params.locale)!;

  const updateLocale = (locale: string) => {
    if (!locale || !LOCALES.includes(locale)) return;
    router.push("/", { locale: locale });
  };

  return (
    <Select label={t("select_lang")} options={localeOptions} value={currentLocale} onChange={updateLocale} />
  );
}
