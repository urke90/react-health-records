import { Outlet } from 'react-router';

type Props = {};

const DashboardLayout = (props: Props) => {
  return (
    <div>
      DashboardLayout
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
