import { User } from './entities/user.entity';

export interface PaginatedUsers {
  nbPages: number;
  result: User[];
}

export interface SignUp {
  lastname: string;
  firstname: string;
  username: string;
  email: string;
  password: string;
  birth_date: Date;
  city: string;
  profession_id: number;
  genre_id: number;
  inspirations: string[];
}
