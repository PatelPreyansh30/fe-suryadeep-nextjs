import axios from "axios";
import {
  APIConstant,
  ApplicationConstant,
} from "@/applicationConstant/constant";
import { toastWarning } from "@/utils/toastify";

const authClient = axios.create({
  baseURL: APIConstant.BASE_AUTH_API_URL,
});

authClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

authClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        // case 400:
        //   toastError(error.response.data.msg);
        //   break;
        // case 401:
        //   toastError(error.response.data.detail);
        // break;
        case 404:
          // handle not found error
          break;
        case 500:
          // handle internal server error
          break;
        default:
          // handle other errors
          break;
      }
    } else {
      toastWarning("Server error, Try again after some time!!");
    }

    return Promise.reject(error);
  }
);

export const initializeAuthData = async () => {
  const accessToken = localStorage.getItem(ApplicationConstant.ACCESS_TOKEN);
  if (!accessToken) {
    localStorage.clear();
    sessionStorage.clear();
    return false;
  }
  return true;
};

export default authClient;
