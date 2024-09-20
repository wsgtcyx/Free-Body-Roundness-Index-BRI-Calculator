"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams, usePathname, useRouter } from "next/navigation";

import { defaultLocale, localeNames } from "@/lib/i18n";

export const LangSwitcher = () => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  let langName = (params.lang as string) || defaultLocale;

  const handleSwitchLanguage = (value: string) => {
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment !== "");
    let newPath;

    if (pathSegments[0] === params.lang) {
      // Current path has a language code
      newPath = pathSegments.slice(1).join("/");
    } else {
      // Current path doesn't have a language code
      newPath = pathSegments.join("/");
    }

    if (value === defaultLocale) {
      router.push(`/${newPath}`);
    } else {
      router.push(`/${value}/${newPath}`);
    }
  };

  return (
    <Select value={langName as string} onValueChange={handleSwitchLanguage}>
      <SelectTrigger className="w-fit bg-[#009b7d] text-white hover:bg-[#007a63] dark:bg-[#33af97] dark:hover:bg-[#2a8f7c] px-4 py-2 rounded-md font-semibold transition-colors duration-200">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
        {Object.keys(localeNames).map((key: string) => {
          const name = localeNames[key];
          return (
            <SelectItem
              className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 transition-colors duration-200"
              key={key}
              value={key}
            >
              {name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
