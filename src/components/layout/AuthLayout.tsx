import { Outlet } from 'react-router';

// ----------------------------------------------------------------

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex-center bg-cyan-50">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
