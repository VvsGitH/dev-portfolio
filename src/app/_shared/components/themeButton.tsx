"use client";

import { ChangeEventHandler, useMemo } from "react";
import { ThemeVariant } from "@/types";
import { useTranslations } from "next-intl";
import { getThemeClient } from "../utils/theme-client";
import { isClient } from "../utils/isClient";

export function ThemeButton({
  theme,
  onThemeChange,
}: {
  theme?: ThemeVariant;
  onThemeChange: (theme: ThemeVariant) => void;
}) {
  const t = useTranslations("theme");

  const themeClient = useMemo(() => (isClient() && getThemeClient()) || "", []);

  const handleThemeChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selected = event.target.value;
    if (!selected) return;
    onThemeChange(selected as ThemeVariant);
  };

  return (
    <div>
      <label htmlFor="theme-select">{t("theme")}</label>
      <select id="theme-select" value={theme || themeClient} onChange={handleThemeChange}>
        <option value="dark">{t("dark")}</option>
        <option value="light">{t("light")}</option>
      </select>
    </div>
  );
}
