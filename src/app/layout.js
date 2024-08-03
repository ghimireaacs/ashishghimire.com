// src/app/layout.js
import React from "react";
import "@/app/styles/globals.css";
import Header from "@/components/layout/header";
import { font_body, font_heading, font_menu } from "./fonts";

export const metadata = {
  title: "Prashant Ghimire",
  description: "A web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${font_body.variable} ${font_heading.variable} ${font_menu.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
