import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import SplashScreenProvider from "../components/ui/splash screen/splash-screen-provider";
import AOSInitializer from "@/components/common/AOSInitializer";

const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geeks Vision",
  description: "Blockrithm's Portfolio",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <SplashScreenProvider>
          <AOSInitializer />
          <div>{children}</div>
        </SplashScreenProvider>
      </body>
    </html>
  );
}
