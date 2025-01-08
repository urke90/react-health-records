import { Outlet } from 'react-router';

type Props = {};

const AuthLayout = (props: Props) => {
  return (
    <div className="min-h-screen flex-center bg-cyan-50">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
