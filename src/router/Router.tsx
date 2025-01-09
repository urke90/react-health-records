import AuthLayout from '@/components/layout/AuthLayout';
import HomeLayout from '@/components/layout/HomeLayout';
import { auth } from '@/db';
import CreateRecord from '@/pages/CreateRecord';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import ProfileEdit from '@/pages/ProfileEdit';
import Register from '@/pages/Register';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router';

// ----------------------------------------------------------------

const Router: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  console.log('isAuth', isAuth);

  return (
    <Routes>
      <Route element={!isAuth ? <AuthLayout /> : <Navigate to="/" replace />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route element={isAuth ? <HomeLayout /> : <Navigate to="/login" replace />}>
        <Route index element={<Dashboard />} />
        <Route path="records/create" element={<CreateRecord />} />
        <Route path="profile-edit" element={<ProfileEdit />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
