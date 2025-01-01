import NotFoundIcon from '@/components/icons/NotFound';
import { Link } from 'react-router';

// ----------------------------------------------------------------

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="min-w-[320px]  p-3 text-center flex flex-col  items-center">
        <h3 className="text-xl sm:text-3xl">404 Page Not Found</h3>
        <NotFoundIcon className="-mt-6" />
        <div className="flex gap-2 items-center">
          Go back
          <Link className="bg-cyan-500 px-3 py-2 text-white rounded-md" to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
