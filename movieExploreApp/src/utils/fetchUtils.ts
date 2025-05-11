import api from "../config/api";
import type { AxiosResponse, AxiosError } from "axios";
import type { Response } from "../types/response";

export async function fetchData<ResponseType, ParamsType>(
  url: string,
  params?: ParamsType,
): Promise<Response<ResponseType>> {
  try {
    const response: AxiosResponse<Response<ResponseType>> = await api.get(url, {
      params
    });
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
}
