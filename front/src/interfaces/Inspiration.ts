import { User } from "./User";

export interface Inspiration {
  id: number;
  name: string;
  users: User[];
}
