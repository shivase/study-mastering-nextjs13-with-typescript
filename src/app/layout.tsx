import { Metadata } from 'next';
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
      <body>{children}</body>
    </html>
  );
};

export default Layout;
