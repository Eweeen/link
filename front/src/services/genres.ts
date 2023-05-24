/* eslint-disable @typescript-eslint/no-explicit-any */
import { Genre } from "@/interfaces/Genre";
import { APIError } from "@/interfaces/error.interface";
import axios from "@/utils/authorizedAxiosInstance";

const URL_BASE = process.env.VUE_APP_API_URL
  ? process.env.VUE_APP_API_URL.concat("genres")
  : "";

export async function getGenres(): Promise<{
  data?: Genre[];
  error?: APIError;
}> {
  try {
    const axiosInstance = await axios();
    const { data } = await axiosInstance.get(URL_BASE);
    return { data };
  } catch (error: any) {
    return {
      error: error?.response?.data,
    };
  }
}
