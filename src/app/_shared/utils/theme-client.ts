import { THEME_COOKIE } from "@/constants/theme";
import { ThemeVariant } from "@/types";
import { getCookie } from "./cookies-client";

export function getThemeClient() {
  const theme = getCookie<ThemeVariant>(THEME_COOKIE);
  if (theme) {
    return theme;
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return undefined;
}
