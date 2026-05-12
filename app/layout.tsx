import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fuzail Akhtar | Full Stack Developer",
  description:
    "Full Stack Developer with 3+ years of WordPress/PHP and 2.5+ years of React/MERN stack experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <form name="contact" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="text" name="subject" />
          <textarea name="message"></textarea>
        </form>
      </body>
    </html>
  );
}
