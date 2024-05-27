import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadPage from './pages/UploadPage';
import BlankPage from './pages/BlankPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/blank" element={<BlankPage />} />
      </Routes>
    </Router>
  );
}

export default App;
