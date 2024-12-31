import AuthLayout from '@/components/layout/AuthLayout';
import DashboardLayout from '@/components/layout/DashboardLayout';
import CreateRecord from '@/pages/CreateRecord';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

// ----------------------------------------------------------------

type Props = {};

const Router = (props: Props) => {
  const isAuth = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    } else {
      navigate('/login');
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
    </Routes>
  );
};

export default Router;
