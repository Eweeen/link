/* eslint-disable @typescript-eslint/no-explicit-any */
import { Skill } from "@/interfaces/Skill";
import { APIError } from "@/interfaces/error.interface";
import axios from "@/utils/authorizedAxiosInstance";

const URL_BASE = process.env.VUE_APP_API_URL
  ? process.env.VUE_APP_API_URL.concat("skills")
  : "";

export async function createSkill(
  name: string,
  user_id: number
): Promise<{
  data?: Skill;
  error?: APIError;
}> {
  try {
    const axiosInstance = await axios();
    const { data } = await axiosInstance.post(URL_BASE, { name, user_id });
    return { data };
  } catch (error: any) {
    return {
      error: error?.response?.data,
    };
  }
}

export async function updateSkill(
  id: number,
  name: string
): Promise<{
  data?: Skill;
  error?: APIError;
}> {
  try {
    const axiosInstance = await axios();
    const { data } = await axiosInstance.post(URL_BASE.concat(`/${id}`), {
      name,
    });
    return { data };
  } catch (error: any) {
    return {
      error: error?.response?.data,
    };
  }
}

export async function deleteSkill(id: number): Promise<{
  data?: Skill;
  error?: APIError;
}> {
  try {
    const axiosInstance = await axios();
    const { data } = await axiosInstance.delete(URL_BASE.concat(`/${id}`));
    return { data };
  } catch (error: any) {
    return {
      error: error?.response?.data,
    };
  }
}
