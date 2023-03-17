import { User } from './entities/user.entity';

export interface PaginatedUsers {
  nbPages: number;
  result: User[];
}
