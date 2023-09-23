import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: number;
  };
};

const page = (props: Props) => {
  if (props.params.id > 10) {
    notFound();
  }

  return <div>UserDetailProps {props.params.id}</div>;
};

export default page;
