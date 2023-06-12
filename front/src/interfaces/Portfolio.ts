import { User } from "./User";

export interface Portfolio {
  id: number;
  title: string;
  description: string;
  type: string;
  path: string;
  user: User;
}
