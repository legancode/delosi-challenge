import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Toolbar } from '@/shared/components/Toolbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Delosi Challenge',
  description: 'Reto tecnico Delosi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Toolbar />
        {children}
      </body>
    </html>
  );
}
