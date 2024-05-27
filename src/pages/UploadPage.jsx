import React, { useState } from 'react';
import PdfUploader from '../components/PdfUploader';
import PdfViewer from '../components/PdfViewer';
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = () => {
        setPdfFile(fileReader.result);
      };
    } else {
      alert('Please select a valid PDF file');
    }
  };

  const handleConfirm = () => {
    navigate('/blank');
  };

  const handleReject = () => {
    setPdfFile(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">PDF Viewer</h1>
      {!pdfFile && <PdfUploader onFileChange={handleFileChange} />}
      {pdfFile && (
        <PdfViewer pdfFile={pdfFile} onConfirm={handleConfirm} onReject={handleReject} />
      )}
    </div>
  );
};

export default UploadPage;
