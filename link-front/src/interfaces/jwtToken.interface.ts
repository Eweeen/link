export interface DecodedJwtToken {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  description: string | null;
  email: string;
  image: string | null;
  birth_date: Date;
  city: string;
  zip: string;
  role: "admin" | "moderator" | "user";
  exp: number;
  iat: number;
}
