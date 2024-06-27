import { THEME_COOKIE } from "@/constants/theme";
import { ThemeVariant } from "@/types";
import { cookies } from "next/headers";

export function getTheme(): ThemeVariant | undefined {
  const theme = cookies().get(THEME_COOKIE);
  if (theme) {
    return theme.value as ThemeVariant;
  } else {
    return undefined;
  }
}

export function updateTheme(theme: ThemeVariant): void {
  cookies().set(THEME_COOKIE, theme, { httpOnly: false });
}
