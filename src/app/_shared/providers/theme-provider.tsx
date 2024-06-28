"use client";

import { ReactNode, createContext, useContext, useMemo } from "react";
import { isClient } from "@/utils/isClient";
import { getCookie } from "@/utils/cookies-client";
import { THEME_COOKIE } from "@/constants/theme";
import { ThemeVariant } from "@/types";

const ThemeContext = createContext<ThemeVariant>("dark");

function ThemeProvider({ children, serverTheme }: { children: ReactNode[]; serverTheme?: ThemeVariant }) {
  const theme: ThemeVariant = useMemo(() => {
    const current = isClient() ? getThemeClient() : serverTheme;
    return current || "dark";
  }, [serverTheme]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

function getThemeClient() {
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

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
