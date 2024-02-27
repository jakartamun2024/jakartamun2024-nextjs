import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Jakarta MUN 2024",
  description: "Jakarta International United Nations 2024 Conference",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"w-full h-full inset-0 opacity-100"}>
        <div className="bg-fixed bg-pucuk-rebung bg-no-repeat bg-cover bg-center">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
