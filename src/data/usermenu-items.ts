interface UserMenuItem {
  id: number;
  title: string;
  icon: string;
  color?: string;
}

const userMenuItems: UserMenuItem[] = [
  {
    id: 1,
    title: 'View Profile',
    icon: 'mingcute:user-2-fill',
    color: 'text.primary',
  },
  // {
  //   id: 2,
  //   title: 'Report',
  //   icon: 'material-symbols:settings-account-box-rounded',
  //   color: 'text.primary',
  // },
  {
    id: 3,
    title: 'Report',
    icon: 'ion:notifications',
    color: 'text.primary',
  },
  {
    id: 4,
    title: 'Games',
    icon: 'material-symbols:switch-account',
    color: 'text.primary',
  },
  {
    id: 5,
    title: 'Settings',
    icon: 'material-symbols:live-help',
    color: 'text.primary',
  },
  {
    id: 6,
    title: 'Logout',
    icon: 'material-symbols:logout',
    color: 'error.main',
  },
];

export default userMenuItems;
