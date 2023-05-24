import { User } from "./User";

export interface Genre {
  id: number;
  name: string;
  users: User[];
}
