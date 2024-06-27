export function getCookie<T = string>(key: string): T | undefined {
  const value = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${key}=`))
    ?.split("=")[1];
  return value ? (value as T) : undefined;
}
