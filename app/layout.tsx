import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Nav from "@/components/Nav";
import Providers from "@/utils/providers";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });
import SideContent from "@/components/SideContent";

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
            <main className="grid grid-cols-12 place-content-center min-h-screen">
              <aside
                className={cn(
                  "border border-r-white bg-[#ff4136] h-screen col-span-2 min-w-40 ",
                )}
              >
                <SideContent />
              </aside>
              {children}
            </main>
            <footer>footer</footer>
          </ThemeProvider>
        </body>
      </Providers>
    </html>
  );
}
