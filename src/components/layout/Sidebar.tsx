import DashboardIcon from '../icons/Dashboard';

// ----------------------------------------------------------------

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="bg-cyan-500 w-[max(240px)] h-[calc(100vh-80px)] sticky left-0 top-[80px] p-5 text-white">
      <div className="flex gap-1">
        <DashboardIcon width={30} />
        <h2 className="h2-bold">Health Records</h2>
      </div>
      <ul></ul>
    </div>
  );
};

export default Sidebar;
