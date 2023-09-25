import { Metadata } from 'next';

import { AuthProvider } from '@/app/auth/Provider';
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
        <AuthProvider>
          <Navbar />
          <main className="p-5">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
};

export default Layout;
