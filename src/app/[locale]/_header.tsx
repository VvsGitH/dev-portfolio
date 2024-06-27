import { getTheme, updateTheme } from "@/utils/theme-server";
import { ThemeVariant } from "@/types";
import { LangButton } from "@/components/langButton";
import { ThemeButton } from "@/components/themeButton";

export function Header() {
  const setTheme = async (theme: ThemeVariant) => {
    "use server";
    updateTheme(theme);
  };

  return (
    <header className="flex justify-end sticky top-0">
      <div className="flex gap-4 px-4 py-4 relative before:absolute before:inset-0 before:bg-glass before:-z-10 before:-left-24">
        <ThemeButton theme={getTheme()} onThemeChange={setTheme} />
        <LangButton />
      </div>
    </header>
  );
}
