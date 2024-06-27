import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LOCALES } from "../constants/locales";

export const { Link, usePathname, useRouter, redirect, permanentRedirect } = createSharedPathnamesNavigation({
  locales: LOCALES,
});
