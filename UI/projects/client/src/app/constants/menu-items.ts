export interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  roles?: string[];
  children?: MenuItem[];
  badge?: {
    value: string;
    class: string;
  };
}

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'bi-speedometer2',
    route: '/dashboard',
    roles: ['user', 'admin']
  },
  {
    label: 'Profile',
    icon: 'bi-person',
    route: '/profile',
    roles: ['user', 'admin']
  },
  {
    label: 'Settings',
    icon: 'bi-gear',
    route: '/settings',
    roles: ['user', 'admin']
  },
  {
    label: 'Admin',
    icon: 'bi-shield-lock',
    roles: ['admin'],
    children: [
      {
        label: 'Users',
        icon: 'bi-people',
        route: '/admin/users'
      },
      {
        label: 'Roles',
        icon: 'bi-key',
        route: '/admin/roles'
      }
    ]
  }
];

