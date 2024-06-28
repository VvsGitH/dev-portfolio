// import { useTranslations } from "next-intl";
import { MainTitle } from "./_components/main-title";

export default function Home() {
  // const t = useTranslations("home-page");

  return (
    <main className="flex flex-col items-center justify-between p-12 sm:p-24">
      <MainTitle />
    </main>
  );
}
