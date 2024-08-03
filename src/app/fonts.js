import { Montserrat, Concert_One, Be_Vietnam_Pro } from "next/font/google";

export const font_body = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  weight: "800",
});

export const font_heading = Concert_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: "400",
});
export const font_menu = Montserrat({
  subsets: ["latin"],
  variable: "--font-menu",
  weight: "600",
  style: "normal",
});
