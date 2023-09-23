import { sort } from 'fast-sort';
import Link from 'next/link';

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  sortOrder: string;
};
export const UserTable = async (props: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  const sortedUser = sort(users).asc(
    props.sortOrder === 'email' ? (user) => user.email : (user) => user.name,
  );

  return (
    <table className="table-bordered table">
      <thead>
        <tr>
          <th>
            <Link href={'/users?sortOrder=name'}>Name</Link>
          </th>
          <th>
            <Link href={'/users?sortOrder=email'}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUser.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
