import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Gets an environment variable in a type-safe way.
 * Throws an error if the variable is not defined.
 * @param key The name of the environment variable
 * @returns The value of the environment variable
 */
export function getEnv(key: string): string {
  const value = process.env[key];

  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not defined`);
  }

  return value;
}
