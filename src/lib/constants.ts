import CreateRecordIcon from '@/components/icons/CreateRecord';
import HomeIcon from '@/components/icons/Home';
import ProfileEditIcon from '@/components/icons/ProfileEdit';

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
  {
    href: '/profile-edit',
    label: 'Edit Profile',
    icon: ProfileEditIcon,
  },
];

export enum EQueryKeys {
  USER = 'user',
}
