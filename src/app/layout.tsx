import { Metadata } from 'next';

import { Navbar } from '@/app/Navbar';

import './output.css';

export const metadata: Metadata = {
  title: 'My Page Title',
  icons: {
    icon: '/favicon.png',
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <Navbar />
        <main className="p-5">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
