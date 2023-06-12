import { Inspiration } from "./Inspiration";
import { Portfolio } from "./Portfolio";
import { Profession } from "./Profession";
import { Skill } from "./Skill";

export interface User {
  id: number;
  lastname: string;
  firstname: string;
  username: string;
  short_description: string;
  description: string;
  email: string;
  password: string;
  image: string;
  birth_date: Date;
  city: string;
  color: string;
  // Relations
  role: string;
  profession: Profession;
  genres: string[];
  skills: Skill[];
  inspirations: Inspiration[];
  portfolios: Portfolio[];
}
