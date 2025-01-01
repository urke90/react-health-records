import { NavLink } from 'react-router';
import CreateRecordIcon from '../icons/CreateRecord';
import DashboardIcon from '../icons/Dashboard';
import HomeIcon from '../icons/Home';

// ----------------------------------------------------------------

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="bg-cyan-500 w-[max(240px)] h-[calc(100vh-80px)] sticky left-0 top-[80px] p-5 text-white flex flex-col gap-5">
      <div className="flex gap-1">
        <DashboardIcon width={30} />
        <h2 className="h2-bold">Health Records</h2>
      </div>
      <ul className="flex flex-col gap-2">
        <li className="hover:translate-x-2 transition">
          <NavLink to="/" className="flex gap-2 items-center">
            <HomeIcon /> Dashboard
          </NavLink>
        </li>
        <li className="hover:translate-x-2 transition">
          <NavLink to="/records/create" className="flex gap-2 items-center">
            <CreateRecordIcon /> New Record
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
