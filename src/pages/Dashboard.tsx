import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useFetchUser } from '@/lib/hooks/queries/use-fetch-user';
import { Link } from 'react-router';

// ----------------------------------------------------------------

const Dashboard: React.FC = () => {
  const { data, isPending } = useFetchUser();

  // console.log('data', data);
  // console.log('isPending', isPending);

  if (isPending) {
    return <LoadingSpinner asOverlay />;
  }

  let name;

  if (data?.firstName && data.lastName) {
    name = `${data.firstName} ${data.lastName}`;
  } else {
    name = data?.userName;
  }

  return (
    <section className="p-3">
      <div className="flex-between flex-wrap gap-2">
        <h2 className="h2-bold">Hey there {name}.</h2>
        <div className="flex flex-col gap-0.5">
          <p className="p2-regular">Create new:</p>
          <div className="flex gap-2 flex-wrap">
            <Link className="bg-violet-500 px-3 py-1 rounded-md transition text-white" to="/">
              Examination
            </Link>
            <Link className="bg-violet-500 px-3 py-1 rounded-md transition text-white" to="/">
              Vaccination
            </Link>
            <Link className="bg-violet-500 px-3 py-1 rounded-md  transition text-white" to="/">
              Medicine
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
