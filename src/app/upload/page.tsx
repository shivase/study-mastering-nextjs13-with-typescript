'use client';
import { CldUploadWidget, CldImage } from 'next-cloudinary';
import { useState } from 'react';

type CloudinaryResult = {
  public_id: string;
};

const Page = () => {
  const [publicId, setPublicId] = useState('');

  return (
    <>
      {publicId && <CldImage src={publicId} width="270" height="180" alt="alt image" />}
      <CldUploadWidget
        uploadPreset="agtd23oy"
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles: 5,
          styles: {},
        }}
        onUpload={(result, widget) => {
          if (result.event !== 'success') return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}>
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default Page;
