type Props = {
  params: { slug: string[] };
  searchParams: {
    sortOrder: string;
  };
};

const page = (props: Props) => {
  return (
    <div>
      ProductPage {props.params.slug} {props.searchParams.sortOrder}
    </div>
  );
};

export default page;
