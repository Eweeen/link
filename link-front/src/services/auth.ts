/* eslint-disable @typescript-eslint/no-explicit-any */
import { APIError } from "@/interfaces/error.interface";
import axios from "@/utils/authorizedAxiosInstance";
import { stringify } from "qs";

const URL_BASE = process.env.VUE_APP_API_URL
  ? process.env.VUE_APP_API_URL.concat("auth")
  : "";

export async function authentification(
  username: string,
  password: string
): Promise<{ data?: { token: string }; error?: APIError }> {
  try {
    const axiosInstance = await axios();
    const { data } = await axiosInstance.post(
      URL_BASE,
      stringify({ username, password }),
      {
        withCredentials: true,
      }
    );
    return { data };
  } catch (error: any) {
    return {
      error: error?.response?.data,
    };
  }
}

export async function refreshToken(): Promise<{
  data?: { token: string };
  error?: APIError;
}> {
  try {
    const axiosInstance = await axios();
    const { data } = await axiosInstance.post(
      `${URL_BASE}/refresh`,
      {},
      { withCredentials: true }
    );
    return { data };
  } catch (error: any) {
    return {
      error: error?.response?.data,
    };
  }
}

export async function logout(): Promise<string> {
  const axiosInstance = await axios();
  const response = await axiosInstance.get(URL_BASE.concat("/logout"), {
    withCredentials: true,
  });
  return response.data.message;
}
