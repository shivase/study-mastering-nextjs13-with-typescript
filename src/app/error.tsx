'use client';

type Props = {
  error: Error;
  reset: () => void;
};
const Error = (props: Props) => {
  console.log(props.error);

  return (
    <>
      <div>An unexpected error has occurred.</div>;
      <button className="btn" onClick={() => props.reset()}>
        Retry
      </button>
    </>
  );
};

export default Error;
