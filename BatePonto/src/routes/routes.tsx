import Login from '../pages/Login';
import Home from '../pages/Home';
import EsqueciSenha from '../pages/EsqueciSenha';
import Erro404 from '../pages/Erro404';
import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import RedefinirSenha from "../pages/RedefinirSenha"

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="*" element={<Erro404/>}/>
          <Route path="/EsqueciSenha" element={<EsqueciSenha/>}/>
          <Route path="/RedefinirSenha" element={<RedefinirSenha/>}/>
          
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
