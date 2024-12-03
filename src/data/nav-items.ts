export interface NavItem {
  id: number;
  path: string;
  title: string;
  icon: string;
  active: boolean;
}

const navItems: NavItem[] = [
  {
    id: 1,
    path: '/authentication/dashboard',
    title: 'Dashboard',
    icon: 'mingcute:home-1-fill',
    active: true,
  },
  {
    id: 2,
    path: '/authentication/user',
    title: 'Users',
    icon: 'clarity:user-line',
    active: true,
  },
  {
    id: 3,
    path: '/authentication/reports',
    title: 'Reports',
    icon: 'material-symbols-light:leaderboard-outline',
    active: true,
  },
  {
    id: 4,
    path: '/authentication/games',
    title: 'Games',
    icon: 'ant-design:shopping-cart-outlined',
    active: true,
  },
  {
    id: 5,
    path: '/authentication/settings',
    title: 'Settings',
    icon: 'lets-icons:bag-alt-light',
    active: true,
  },
  // {
  //   id: 6,
  //   path: '#!',
  //   title: 'Sales Report',
  //   icon: 'lucide:line-chart',
  //   active: false,
  // },
  // {
  //   id: 7,
  //   path: '#!',
  //   title: 'Message',
  //   icon: 'bi:chat',
  //   active: false,
  // },
  // {
  //   id: 8,
  //   path: '#!',
  //   title: 'Settings',
  //   icon: 'mingcute:settings-3-line',
  //   active: false,
  // },
  // {
  //   id: 9,
  //   path: '#!',
  //   title: 'Favourite',
  //   icon: 'clarity:favorite-line',
  //   active: false,
  // },
  // {
  //   id: 10,
  //   path: '#!',
  //   title: 'History',
  //   icon: 'ic:round-history',
  //   active: false,
  // },
  {
    id: 11,
    path: '/',
    title: 'Login',
    icon: 'tabler:login',
    active: true,
  },
  {
    id: 12,
    path: '/',
    title: 'Logout',
    icon: 'tdesign:user-add',
    active: true,
  },
];

export default navItems;
