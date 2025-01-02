type Props = {};

import Button from '@/components/ui/Button';

const Dashboard = (props: Props) => {
  return (
    <div className="p-5">
      <p className="mb-2">Dashboard Page</p>
      <Button onClick={() => alert('radi')}>Button</Button>
    </div>
  );
};

export default Dashboard;
