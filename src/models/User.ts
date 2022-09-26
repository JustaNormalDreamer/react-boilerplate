export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthSlice {
  isLoggedIn: boolean;
  user: User | null;
}
