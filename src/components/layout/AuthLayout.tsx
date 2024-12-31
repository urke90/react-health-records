import { Outlet } from 'react-router';

type Props = {};

const AuthLayout = (props: Props) => {
  return (
    <div>
      AuthLayout
      <Outlet />
    </div>
  );
};

export default AuthLayout;
