type ClsxItem = string | false | undefined | null | Record<string, boolean | undefined | null>;
type ClsxValidItem = Exclude<ClsxItem, false | undefined | null>;

export function clsx(...classes: ClsxItem[]): string {
  const validClasses = classes.filter(Boolean) as ClsxValidItem[];

  let className: string[] = [];
  for (const cls of validClasses) {
    if (typeof cls === "string") {
      className.push(cls.trim());
    } else {
      const entries = Object.entries(cls)
        .filter(([, value]) => !!value)
        .map(([key]) => key.trim());
      className.push(...entries);
    }
  }

  return className.join(" ");
}
