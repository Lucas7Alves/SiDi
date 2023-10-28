import Login from '../pages/Login';
import Home from '../pages/Home';
import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />

          <Route path="*" element={<Navigate to="/Login"/>}/>

        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
