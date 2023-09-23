import { Route } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

import { UserTable } from '@/app/users/UserTable';

type Props = {
  searchParams: {
    sortOrder: string;
  };
};

const page = (props: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href={'/users/new' as Route} className="btn">
        New User
      </Link>
      <UserTable sortOrder={props.searchParams.sortOrder} />
    </>
  );
};

export default page;
