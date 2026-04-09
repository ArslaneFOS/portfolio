import { Suspense } from "react";
import { Doto, Raleway } from "next/font/google";
import "./globals.css";
import HtmlLangSync from "@/components/HtmlLangSync";


const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"]
})

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${doto.variable} ${raleway.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col dark:bg-black scroll-smooth">
        <Suspense fallback={null}>
          <HtmlLangSync />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
