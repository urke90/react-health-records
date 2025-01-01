import Header from './Header';

import { Outlet } from 'react-router';
import Sidebar from './Sidebar';

// ----------------------------------------------------------------

type Props = {};

const HomeLayout = (props: Props) => {
  return (
    <section>
      <Header />
      <div className="flex">
        <div className="max-sm:hidden">
          <Sidebar />
        </div>
        <main className="h-[200vh]">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default HomeLayout;
