import { LangButton } from "@/components/lang-button";
import { ThemeButton } from "@/components/theme-button";

export function Header() {
  return (
    <header className="flex justify-end sticky top-0">
      <div className="flex gap-4 px-4 py-4 ">
        <ThemeButton />
        <LangButton />
      </div>
    </header>
  );
}
