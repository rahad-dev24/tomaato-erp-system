import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Nav from "@/components/Nav";
import Providers from "@/utils/providers";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomaato | ERP System",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  searchParams: any;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={cn(inter.className)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header>
              <Nav />
            </header>
            {children} <footer>footer</footer>
          </ThemeProvider>
        </body>
      </Providers>
    </html>
  );
}
