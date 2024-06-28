"use client";

import { ReactNode } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import { useTheme } from "@/providers/theme-provider";
import { clsx } from "@/utils/clsx";

export interface SelectOption<T> {
  value: T;
  label: string;
  displayAs: ReactNode;
}

interface SelectProps<T> {
  options: SelectOption<T>[];
  value: SelectOption<T>;
  onChange: (selected: T) => void;
  label: string;
}

export function Select<T = string>({ value, options, onChange, label }: SelectProps<T>) {
  const theme = useTheme();

  return (
    <Listbox value={value} by="value" onChange={(selected) => onChange(selected.value)}>
      <ListboxButton
        aria-label={label}
        className={clsx(
          "flex items-center justify-between gap-2 rounded-lg py-2 px-4 text-left text-sm/6",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2",
          theme === "dark"
            ? "bg-white/5 text-white data-[focus]:outline-white/25"
            : "bg-slate-900/5 text-slatebg-slate-900 data-[focus]:outline-slatebg-slate-900/25"
        )}
      >
        {value.displayAs || value.label}
        <ChevronDownIcon
          aria-hidden="true"
          className={clsx(
            "group pointer-events-none size-4",
            theme === "dark" ? "fill-white" : "fill-slate-900"
          )}
        />
      </ListboxButton>

      <ListboxOptions
        anchor={{ to: "bottom", gap: "0.5rem", padding: "0.5rem" }}
        transition
        className={clsx(
          "rounded-xl border p-1 focus:outline-none",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
          theme === "dark" ? "border-white/5 bg-white/5" : "border-slate-900/5 bg-slate-900/5"
        )}
      >
        {options.map((option) => (
          <ListboxOption
            key={`${option.value}`}
            value={option}
            className={clsx(
              "group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none",
              theme === "dark"
                ? "data-[focus]:bg-white/10 text-white fill-white"
                : "data-[focus]:bg-slate-900/10 text-slate-900 fill-slate-900"
            )}
          >
            <CheckIcon className="invisible size-4 flex-shrink-0 fill-inherit group-data-[selected]:visible" />
            <div className="text-sm/6">{option.label}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
