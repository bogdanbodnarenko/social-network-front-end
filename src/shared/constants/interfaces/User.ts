export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  created?: Date;
  imageUrl?: string;
  about?: string;
  online: boolean;
  lastActive: Date;
}

export interface LoginValues {
  email: string;
  password: string;
}

export interface RegisterValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
