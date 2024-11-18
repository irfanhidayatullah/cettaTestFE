export interface User {
  id: number;
  email: string;
  name: string;
  role: Role;
}

export enum Role {
  USER = "USER",
  TENANT = "TENANT",
}
