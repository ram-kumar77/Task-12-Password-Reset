// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to forgot-password */}
        <Route path="/" element={<Navigate to="/forgot-password" replace />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        {/* Catch all route - redirect to forgot-password */}
        <Route path="*" element={<Navigate to="/forgot-password" replace />} />
      </Routes>
    </Router>
  );
}

export default App;