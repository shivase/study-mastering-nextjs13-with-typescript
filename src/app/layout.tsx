import { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';

import { AuthProvider } from '@/app/auth/Provider';
import { Navbar } from '@/app/Navbar';
import './output.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-roboto' });

export const metadata: Metadata = {
  title: 'My Page Title',
  icons: {
    icon: '/favicon.png',
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className={`${roboto.variable} font-roboto`}>
        <AuthProvider>
          <Navbar />
          <main className="p-5">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
};

export default Layout;
