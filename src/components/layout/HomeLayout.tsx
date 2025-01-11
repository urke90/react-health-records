import Header from './Header';

import { Outlet } from 'react-router';
import Sidebar from './Sidebar';

// ----------------------------------------------------------------

type Props = {};

const HomeLayout = (props: Props) => {
  return (
    <section className="w-[min(1536px,100%)] m-auto">
      <Header />
      <div className="flex">
        <div className="max-sm:hidden">
          <Sidebar />
        </div>
        <main className="flex-1 px-2 py-4 sm:p-4">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default HomeLayout;
