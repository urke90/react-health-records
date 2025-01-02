import CreateRecordIcon from '@/components/icons/CreateRecord';
import HomeIcon from '@/components/icons/Home';

// ----------------------------------------------------------------

export const NAVIGATION_OPTIONS = [
  {
    href: '/',
    label: 'Dashboard',
    icon: HomeIcon,
  },
  {
    href: '/records/create',
    label: 'New Record',
    icon: CreateRecordIcon,
  },
];
