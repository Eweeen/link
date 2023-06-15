/* eslint-disable @typescript-eslint/no-explicit-any */
import { User, PaginatedUsers } from "@/interfaces/User";
import { APIError } from "@/interfaces/error.interface";
import axios from "@/utils/authorizedAxiosInstance";
import { SignUpDto } from "@/validations/SignUp.dto";
import { stringify } from "qs";

const URL_BASE = process.env.VUE_APP_API_URL
  ? process.env.VUE_APP_API_URL.concat("users")
  : "";

export async function signUp(user: SignUpDto): Promise<{
  data?: User;
  error?: APIError;
}> {
  try {
    const formData = stringify(user);

    const axiosInstance = await axios();
    const { data } = await axiosInstance.post(
      URL_BASE.concat("/sign-up"),
      formData
    );
    return { data };
  } catch (error: any) {
    return {
      error: error?.response?.data,
    };
  }
}

export async function getUserById(id: number): Promise<{
  data?: User;
  error?: APIError;
}> {
  try {
    const axiosInstance = await axios();
    const { data } = await axiosInstance.get(URL_BASE.concat(`/${id}`));
    return { data };
  } catch (error: any) {
    return {
      error: error?.response?.data,
    };
  }
}

export async function getUserByUsername(username: string): Promise<{
  data?: User;
  error?: APIError;
}> {
  try {
    const axiosInstance = await axios();
    const { data } = await axiosInstance.get(
      URL_BASE.concat(`/find/${username}`)
    );
    return { data };
  } catch (error: any) {
    return {
      error: error?.response?.data,
    };
  }
}

export async function getUsers(
  profession?: string,
  city?: string,
  page?: number
): Promise<{
  data?: PaginatedUsers;
  error?: APIError;
}> {
  try {
    const axiosInstance = await axios();
    const { data } = await axiosInstance.get(
      URL_BASE.concat(
        `/search?profession=${profession}&city=${city}&page=${page}`
      )
    );
    return { data };
  } catch (error: any) {
    return {
      error: error?.response?.data,
    };
  }
}
