import Logo from '@/assets/images/logo.svg';
import { Link } from 'react-router';

// ----------------------------------------------------------------

const Header: React.FC = () => {
  const name = 'Uros Bijelic';
  const splitName = name.split(' ');
  const initials = splitName[0].charAt(0) + splitName[1].charAt(0);

  return (
    <header className="flex-between px-2 sm:px-5 h-[80px] shadow-md sticky left-0 top-0">
      <Link to="/">
        <img src={Logo} className="w-[80px]" alt="logo" />
      </Link>
      <div className="flex gap-2 items-center">
        <div className="bg-cyan-500 text-white size-[36px] flex-center rounded-full">
          {initials}
        </div>
        <p className="p3-medium">{name}</p>
      </div>
    </header>
  );
};

export default Header;
