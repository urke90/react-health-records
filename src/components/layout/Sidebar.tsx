import { NAVIGATION_OPTIONS } from '@/lib/constants';
import { NavLink } from 'react-router';
import DashboardIcon from '../icons/Dashboard';

// ----------------------------------------------------------------

const Sidebar: React.FC = () => {
  return (
    <div className="bg-cyan-500 w-[max(240px)] h-[calc(100vh-80px)] sticky left-0 top-[80px] p-5 text-white flex flex-col gap-5">
      <div className="flex gap-1">
        <DashboardIcon width={30} />
        <h2 className="h2-bold">Health Records</h2>
      </div>
      <ul className="flex flex-col gap-2">
        {NAVIGATION_OPTIONS.map(({ href, icon, label }) => {
          const Icon = icon;
          return (
            <li key={href} className="hover:translate-x-2 transition">
              <NavLink to={href} className="flex gap-2 items-center">
                <Icon /> {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
