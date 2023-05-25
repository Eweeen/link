import { User } from "./User";

export interface Profession {
  id: number;
  name: string;
  parent: Profession | undefined;
  users: User[];
}
