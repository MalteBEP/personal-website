import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jetBrains_Mono = JetBrains_Mono({
  variable: "--font-jetBrains",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetBrains_Mono.variable} h-full antialiased scroll-smooth`}>
    <body>
      <div className="fixed inset-0 bg-white">
        <div className="absolute backdrop-blur-2xl" />
      </div>
      <div className="relative w-full">
        <Header />
        {children}
      </div>
    </body>
    </html>
  );
}
