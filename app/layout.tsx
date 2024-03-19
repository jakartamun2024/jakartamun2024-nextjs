import Head from "next/head";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Jakarta International MUN 2024",
  description: "Jakarta International United Nations 2024 Conference",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <html lang="en" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={"w-full h-full inset-0 opacity-100"}>
        <div className="bg-fixed bg-pucuk-rebung bg-no-repeat bg-cover bg-center text-white">
          <Providers>{children}</Providers>
        </div>
      </body>
    </>
  );
}
