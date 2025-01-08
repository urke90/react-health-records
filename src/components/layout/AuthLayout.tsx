import { Outlet } from 'react-router';

// ----------------------------------------------------------------

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex-center bg-cyan-50">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
