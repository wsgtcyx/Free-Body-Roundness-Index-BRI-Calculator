"use client";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import { defaultLocale } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ThemedButton } from "../ThemedButton";

// const links = [
//   { label: "Features", href: "#Features" },
//   { label: "Pricing", href: "#Pricing" },
//   { label: "Testimonials", href: "#Testimonials" },
//   { label: "FAQ", href: "#FAQ" },
// ];

// 我希望添加title的config，这样我可以根据不同的语言显示不同的title，包括英语、德语、荷兰语
const titleConfig: { [key: string]: string } = {
  en: "BRI Calculator",
  de: "BRI Rechner",
  nl: "BRI Rekenmachine",
};

const Header = () => {
  const params = useParams();
  const lang = params.lang as string;
  const locale = (lang in titleConfig) ? lang : defaultLocale;

  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="py-10 pb-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav className="relative z-50 flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center md:gap-x-12 flex-1">
          <Link
            href="/"
            aria-label="BRI Calculator"
            title="BRI Calculator"
            className="flex items-center space-x-1 font-bold"
          >
            <Image
              alt="Logo"
              src="/logo.svg"
              className="w-12 h-12 rounded-lg"
              width={32}
              height={32}
            />
            <span className="text-gray-950 dark:text-gray-300 hidden md:block">
              {titleConfig[locale as keyof typeof titleConfig]}
            </span>
          </Link>
        </div>

        {/* Center section - Navigation */}
        {/* <ul className="hidden md:flex items-center justify-center gap-6 flex-1">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={`/${lang === "en" ? "" : lang}${link.href}`}
                aria-label={link.label}
                title={link.label}
                className="tracking-wide transition-colors duration-200 font-normal"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul> */}

        {/* Right section */}
        <div className="flex items-center justify-end gap-x-6 flex-1">
          {/* <HeaderLinks /> */}
          <div className="flex items-center space-x-2">
            <ThemedButton />
            <LangSwitcher />
          </div>
        </div>

        {/* Mobile menu button */}
        {/* <div className="md:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-background border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="Landing Page Boilerplate"
                      title="Landing Page Boilerplate"
                      className="inline-flex items-center"
                    >
                      <Image
                        alt={siteConfig.name}
                        src="/logo.svg"
                        className="w-8 h-8"
                        width={32}
                        height={32}
                      />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-950 dark:text-gray-300">
                        {siteConfig.name}
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="tracking-wide transition-colors duration-200 font-normal"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <CgClose />
                    </button>
                  </div>
                </div>
                {/* <nav>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          aria-label={link.label}
                          title={link.label}
                          className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav> 
                <div className="pt-4">
                  <div className="flex items-center gap-x-5 justify-between">
                    <HeaderLinks />
                    <div className="flex items-center justify-end gap-x-5">
                      <ThemedButton />
                      <LangSwitcher />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>  */}
      </nav>
    </header>
  );
};

export default Header;
