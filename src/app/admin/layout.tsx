type Props = {
  children: React.ReactNode;
};
const layout = (props: Props) => {
  return (
    <div className="flex">
      <aside className="phone-5 mr-5 bg-slate-200">Admin Sidebar</aside>
      <div>{props.children}</div>
    </div>
  );
};

export default layout;
