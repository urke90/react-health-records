import AuthLayout from '@/components/layout/AuthLayout';
import DashboardLayout from '@/components/layout/DashboardLayout';
import CreateRecord from '@/pages/CreateRecord';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Register from '@/pages/Register';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

// ----------------------------------------------------------------

const Router: React.FC = () => {
  const isAuth = true;
  const navigate = useNavigate();

  // ! setup dummy isAuth const so i can later implement real auth with firebase
  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="records/create" element={<CreateRecord />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
