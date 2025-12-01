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
  MENU_ITEMS: {
    LIST: '/MenuItems',
    DETAIL: (id: number) => `/MenuItems/${id}`,
    BY_CATEGORY: (categoryId: number) => `/MenuItems/category/${categoryId}`
  },
  CATEGORIES: {
    LIST: '/Categories',
    DETAIL: (id: number) => `/Categories/${id}`
  }
};

