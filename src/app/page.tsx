import _ from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { LazyLoad } from '@/app/LazyLoad';
import coffee from 'public/images/coffee.jpg';

const Home = async () => {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href={'/users'}>Users</Link>
      <Image src={coffee} alt="Coffee" />
      <LazyLoad />
    </main>
  );
};

export default Home;
