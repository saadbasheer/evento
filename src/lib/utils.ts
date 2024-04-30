import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

