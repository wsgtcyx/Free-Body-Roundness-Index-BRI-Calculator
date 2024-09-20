import { defaultLocale, localeNames } from "@/lib/i18n";
import Link from "next/link";

const LangLinks = () => {
  return (
    <div className="flex space-x-4 flex-wrap justify-center">
      {Object.keys(localeNames).map((key: string) => {
        const name = localeNames[key];
        return (
          <span key={key} className="text-lg font-medium">
            <Link
              href={`/${key === defaultLocale ? "" : key}`}
              className="text-[#009b7d] hover:text-[#33af97] transition-colors duration-300 underline"
            >
              {name}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default LangLinks;
