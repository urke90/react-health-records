import { Outlet } from 'react-router';

type Props = {};

const AuthLayout = (props: Props) => {
  return (
    <div className="min-h-screen flex-center bg-gray-50">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
