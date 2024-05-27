import React from 'react';

const PdfUploader = ({ onFileChange }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="file"
        accept="application/pdf"
        onChange={onFileChange}
        className="mb-4 p-2 border rounded"
      />
    </div>
  );
};

export default PdfUploader;
