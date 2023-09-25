'use client';
import { Route } from 'next';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex space-x-3 bg-slate-200 p-5">
      <Link href="/" className="">
        Next.js
      </Link>
      <Link href={'/users'} className="">
        Users
      </Link>
      {status === 'authenticated' && (
        <div>
          {session?.user?.name}
          <Link href={'/api/auth/signout' as Route} className="ml-3">
            Sign Out
          </Link>
        </div>
      )}
      {status === 'unauthenticated' && <Link href={'/api/auth/signin' as Route}>Login</Link>}
    </div>
  );
};
