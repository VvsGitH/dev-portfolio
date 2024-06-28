import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { ThemeVariant } from "@/types";
import { Select, SelectOption } from "./select";
import { getTheme, updateTheme } from "../utils/theme-server";

export function ThemeButton() {
  const t = useTranslations("theme");

  const themeOptions: SelectOption<ThemeVariant>[] = [
    {
      value: "dark",
      label: t("dark"),
      displayAs: <MoonIcon aria-label={t("dark")} className="fill-white size-5" />,
    },
    {
      value: "light",
      label: t("light"),
      displayAs: <SunIcon aria-label={t("light")} className="fill-slate-900 size-5" />,
    },
  ];

  const theme = getTheme() || "dark";
  const value = themeOptions.find((opt) => opt.value == theme)!;

  const setTheme = async (theme: ThemeVariant) => {
    "use server";
    updateTheme(theme);
  };

  return <Select label={t("theme")} options={themeOptions} value={value} onChange={setTheme} />;
}
