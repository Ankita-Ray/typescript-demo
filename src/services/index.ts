import axios from "axios";
import { FormValues } from "../types/types";
export const apiCall = async (): Promise<FormValues | void> => {
  try {
    const result = await axios.get("https://randomuser.me/api");
    const response = {
      name:
        result?.data?.results[0]?.name?.first +
        " " +
        result?.data?.results[0]?.name?.last,
      email: result?.data?.results[0]?.email,
    };
    return response;
  } catch (error) {
    return { error: "Network error" };
  }
};
