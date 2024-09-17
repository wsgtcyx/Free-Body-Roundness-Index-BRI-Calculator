import { SiteConfig } from "@/types/siteConfig";
import { MdEmail } from "react-icons/md";

const baseSiteConfig = {
  name: "Free Body Roundness Index (BRI) Calculator",
  description:
    "Use our 100% free Body Roundness Index (BRI) calculator to assess your body shape and health risks. Easy to use, no registration required.",
  url: "https://bri-calculator.com",
  ogImage: "https://bri-calculator.com/og.png",
  metadataBase: "/",
  keywords: [
    "free BRI calculator",
    "Body Roundness Index",
    "free health assessment",
    "body shape calculator",
    "no cost BRI tool",
  ],
  authors: [
    {
      name: "BRI Calculator Team",
      url: "https://bri-calculator.com",
    },
  ],
  creator: "@yxchen1994",
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  defaultNextTheme: "light",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  headerLinks: [
    // {
    //   name: "github",
    //   href: "https://github.com/wsgtcyx",
    //   icon: BsGithub,
    // },
    // {
    //   name: "twitter",
    //   href: "https://twitter.com/your-twitter",
    //   icon: BsTwitterX,
    // },
  ],
  footerLinks: [
    { name: "email", href: "mailto:support@bri-calculator.com", icon: MdEmail },
    // {
    //   name: "twitter",
    //   href: "https://twitter.com/your-twitter",
    //   icon: BsTwitterX,
    // },
    // {
    //   name: "github",
    //   href: "https://github.com/your-github-repo",
    //   icon: BsGithub,
    // },
    // {
    //   name: "buyMeCoffee",
    //   href: "https://www.buymeacoffee.com/your-profile",
    //   icon: SiBuymeacoffee,
    // },
  ],
  footerProducts: [
    { url: "https://bri-calculator.com/", name: "BRI Calculator" },
  ],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};
