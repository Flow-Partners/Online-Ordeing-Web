export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    CHANGE_PASSWORD: '/auth/change-password',
    VERIFY_EMAIL: '/auth/verify-email'
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE: '/user/update',
    UPDATE_AVATAR: '/user/avatar',
    DELETE: '/user/delete'
  },
  CATEGORIES: {
    LIST: '/Categories',
    GET: (id: number) => `/Categories/${id}`,
    CREATE: '/Categories',
    UPDATE: (id: number) => `/Categories/${id}`,
    DELETE: (id: number) => `/Categories/${id}`,
    TOGGLE_VISIBILITY: (id: number) => `/Categories/${id}/toggle-visibility`,
    CHECK_NAME: '/Categories/check-name',
    UPDATE_ORDER: '/Categories/update-order'
  },
  MENU_ITEMS: {
    LIST: '/MenuItems',
    GET: (id: number) => `/MenuItems/${id}`,
    CREATE: '/MenuItems',
    UPDATE: (id: number) => `/MenuItems/${id}`,
    DELETE: (id: number) => `/MenuItems/${id}`,
    TOGGLE_AVAILABILITY: (id: number) => `/MenuItems/${id}/toggle-availability`,
    BY_CATEGORY: (categoryId: number) => `/MenuItems/category/${categoryId}`,
    CHECK_NAME: '/MenuItems/check-name',
    UPDATE_ORDER: '/MenuItems/update-order'
  },
  ORDERS: {
    LIST: '/Orders/all',
    GET: (id: number) => `/Orders/${id}`,
    GET_BY_TICKET: (ticketId: number) => `/Orders/tickets/${ticketId}`,
    UPDATE_STATUS: (ticketId: number) => `/Orders/tickets/${ticketId}/status`,
    GET_ALL_TICKETS_BY_STATUS: (ticketStatus: boolean) => `/Orders/tickets/all?ticketStatus=${ticketStatus}`
  }
};

