import React from 'react';
import App from '../App';
import Login from '../pages/Login';
import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
