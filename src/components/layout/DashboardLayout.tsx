import Header from './Header';

import { Outlet } from 'react-router';

// ----------------------------------------------------------------

type Props = {};

const DashboardLayout = (props: Props) => {
  return (
    <section>
      <Header />

      <Outlet />
    </section>
  );
};

export default DashboardLayout;
