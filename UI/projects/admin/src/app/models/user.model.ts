export interface User {
  id: string | number;
  email: string;
  name: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  role: string;
  roles?: string[];
  isActive?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

