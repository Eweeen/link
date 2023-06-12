/* eslint-disable @typescript-eslint/no-explicit-any */
import { Portfolio } from "@/interfaces/Portfolio";
import { APIError } from "@/interfaces/error.interface";
import axios from "@/utils/authorizedAxiosInstance";
import { PortfolioDto } from "@/validations/Portfolio.dto";

const URL_BASE = process.env.VUE_APP_API_URL
  ? process.env.VUE_APP_API_URL.concat("portfolios")
  : "";

export async function createPortfolio(
  portfolio: PortfolioDto,
  file?: File
): Promise<{
  data?: Portfolio;
  error?: APIError;
}> {
  try {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }

    formData.append("title", portfolio.title);
    formData.append("description", portfolio.description);
    formData.append("type", portfolio.type);
    formData.append("path", portfolio.path);
    formData.append("user_id", portfolio.user_id.toString());

    const axiosInstance = await axios();
    const { data } = await axiosInstance.post(URL_BASE, formData, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return { data };
  } catch (error: any) {
    return {
      error: error?.response?.data,
    };
  }
}

export function getPortfolioImage(id: number): string {
  return `${URL_BASE}/${id}/image`;
}
