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
    label: 'Menu Management',
    icon: 'bi-menu-button-wide',
    roles: ['admin'],
    children: [
      {
        label: 'Menu Items',
        icon: 'bi-list-ul',
        route: '/menu-items'
      },
      {
        label: 'Create Menu Item',
        icon: 'bi-plus-circle',
        route: '/menu-items/create'
      }
    ]
  },
  {
    label: 'Orders',
    icon: 'bi-receipt',
    route: '/orders',
    roles: ['admin']
  },
  {
    label: 'Ticket Management',
    icon: 'bi-ticket-perforated',
    route: '/tickets',
    roles: ['admin']
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

