import { useTranslations } from "next-intl";
import { useMemo } from "react";

export function MainTitle() {
  const t = useTranslations("home-page");

  const greating = t("greating");
  const presentation = t("presentation").split(" __name__ ");
  const rolePrefix = t("role_prefix");
  const role = t("role").split(" ");

  return (
    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
      <span className="block font-light mb-4">
        <AnimatedWord word={greating} />
        <span className="inline-block ml-2 motion-safe:animate-shake">!</span>
      </span>

      <span className="flex flex-wrap gap-x-2 gap-y-1 mb-3">
        {presentation[0]}
        <span className="font-light">
          <AnimatedWord word={t("name")} />
        </span>
        {presentation[1]}
      </span>

      <span className="flex flex-wrap gap-x-2 gap-y-1 font-light">
        <span className="font-extralight tracking-wide">
          <AnimatedWord word="..." />
        </span>
        <span className="font-bold">{rolePrefix}</span>
        {role.map((word, i) => (
          <span key={`word-${i}`} className="inline-block">
            <AnimatedWord word={word} />
          </span>
        ))}
      </span>
    </h1>
  );
}

function AnimatedWord({ word }: { word: string }) {
  const letters = useMemo(() => word.split(""), [word]);
  return (
    <>
      {letters.map((char, i) => (
        <span
          key={`letter-${i}`}
          className="inline-block motion-safe:animate-pulse"
          style={{ animationDelay: `${i * 500}ms` }}
        >
          {char}
        </span>
      ))}
    </>
  );
}
