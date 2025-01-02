import Logo from '@/assets/images/logo.svg';
import { Link, NavLink } from 'react-router';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import CreateRecordIcon from '../icons/CreateRecord';
import HomeIcon from '../icons/Home';
import MenuIcon from '../icons/Menu';

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
        <div className="sm:hidden flex-center">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="bg-white" aria-label="Customise options">
                <MenuIcon className="text-cyan-500" />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[220px] rounded-md bg-gray-200 p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
                align="end"
                sideOffset={15}
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                <DropdownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-2 pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-cyan-500 data-[highlighted]:text-white data-[disabled]:text-gray-500 cursor-pointer">
                  <NavLink to="/" className="flex gap-2 items-center">
                    <HomeIcon /> Dashboard
                  </NavLink>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-2 pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-cyan-500 data-[highlighted]:text-white data-[disabled]:text-gray-500 cursor-pointer">
                  <NavLink
                    to="/records/create"
                    className="flex gap-2 items-center"
                  >
                    <CreateRecordIcon /> New Record
                  </NavLink>
                </DropdownMenu.Item>

                <DropdownMenu.Separator />
                <DropdownMenu.Arrow className="fill-gray-200" />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                    More Tools
                    <div className="RightSlot">
                      <ChevronRightIcon />
                    </div>
                  </DropdownMenu.SubTrigger>
                  <DropdownMenu.Portal>
                     <DropdownMenu.SubContent
                      className="DropdownMenuSubContent"
                      sideOffset={2}
                      alignOffset={-5}
                    >
                      <DropdownMenu.Item className="DropdownMenuItem">
                        Save Page As… <div className="RightSlot">⌘+S</div>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item className="DropdownMenuItem">
                        Create Shortcut…
                      </DropdownMenu.Item>
                      <DropdownMenu.Item className="DropdownMenuItem">
                        Name Window…
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenu.Separator" />
                      <DropdownMenu.Item className="DropdownMenuItem">
                        Developer Tools
                      </DropdownMenu.Item>
                    </DropdownMenu.SubContent> 
                  </DropdownMenu.Portal>
                </DropdownMenu.Sub> */
}
