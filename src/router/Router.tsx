import AuthLayout from '@/components/layout/AuthLayout';
import HomeLayout from '@/components/layout/HomeLayout';
import { auth } from '@/db';
import CreateRecord from '@/pages/CreateRecord';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Register from '@/pages/Register';
import { onAuthStateChanged } from 'firebase/auth';
import { Route, Routes, useNavigate } from 'react-router';

// ----------------------------------------------------------------

const Router: React.FC = () => {
  // const isAuth = true;
  const navigate = useNavigate();

  // ! figure out a way to redirect users to /login but allow /register route as well for unauthenticated users
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate('/login');
    }
  });

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route element={<HomeLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="records/create" element={<CreateRecord />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
