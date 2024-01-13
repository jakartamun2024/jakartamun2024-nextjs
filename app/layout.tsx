import type { Metadata } from 'next';
import './globals.css';
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: 'Jakarta MUN 2024',
  description: 'Jakarta International United Nations 2024 Conference',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={"w-full h-full inset-0 bg-gradient-to-b from-[#FD8653] via-[#FFC363] to-[#FD8653] opacity-100"}>
        <div className='bg-pucuk-rebung bg-repeat-y bg-center bg-[length:100%]'>
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
