import type { Metadata } from "next";
import PPMori from "next/font/local";
import "@/globals.css"

const ppMori = PPMori({
  src: "../../public/PPMori-Regular.otf",
});


export const metadata: Metadata = {
  title: "Matheus de Sousa",
  description: "Portfólio Matheus de Sousa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ppMori.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
