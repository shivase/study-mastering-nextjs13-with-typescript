'use client';

export const LazyLoad = () => {
  return (
    <button
      className="btn btn-secondary"
      onClick={async () => {
        const { default: _ } = await import('lodash');
        console.log(_.VERSION);
      }}>
      Click
    </button>
  );
};
