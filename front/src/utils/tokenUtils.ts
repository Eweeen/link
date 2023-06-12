import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { store } from "@/store";
import { DecodedJwtToken } from "@/interfaces/jwtToken.interface";
import { refreshToken } from "../services/auth";

export function getToken(): string {
  return Cookies.get("accessToken") || "";
}

export function getDecodedToken(token: string): DecodedJwtToken {
  if (token === "") throw new Error("Empty token");
  return jwtDecode(token);
}

export function createToken(token: string): void {
  createTokenCookie(token as string);
  createUserByToken(token as string);
}

export function createUserByToken(token: string): void {
  const decodedToken = getDecodedToken(token);
  store.dispatch("LOGIN", decodedToken);
}

export function createTokenCookie(token: string): void {
  const dateExpire = new Date();
  dateExpire.setMinutes(dateExpire.getMinutes() + 60);
  Cookies.set("accessToken", token, {
    expires: dateExpire,
    SameSite: "Strict", // Cookie is exclusive to the current website
  });
}

export async function updateToken(): Promise<void> {
  const { data } = await refreshToken();
  if (data) {
    deleteToken();
    createToken(data.token);
  }
}
export function deleteToken(): void {
  Cookies.remove("accessToken", { path: "" });
}
