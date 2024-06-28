import { LangButton } from "@/components/lang-button";
import { ThemeButton } from "@/components/theme-button";

export function Header() {
  return (
    <header className="flex justify-end sticky top-0">
      <div className="flex gap-4 px-4 py-4 relative before:absolute before:inset-0 before:bg-glass before:-z-10 before:-left-24">
        <ThemeButton />
        <LangButton />
      </div>
    </header>
  );
}
