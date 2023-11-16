import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toolbar } from '@/shared/components/Toolbar';
import { ErrorBoundary } from '@/shared/components/ErrorBoundary';
import { AppProvider } from '@/store/app.context';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Delosi Challenge',
  description: 'Reto tecnico Delosi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppProvider>
          <ErrorBoundary>
            <Toolbar />
            {children}
          </ErrorBoundary>
        </AppProvider>
      </body>
    </html>
  );
}
