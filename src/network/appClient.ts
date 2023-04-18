import axios from "axios";
import {
  APIConstant,
  ApplicationConstant,
} from "@/applicationConstant/constant";
import { toastError } from "@/utils/toastify";

const appClient = axios.create({
  baseURL: APIConstant.BASE_APP_API_URL,
});

appClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(ApplicationConstant.ACCESS_TOKEN);
    config.headers["Authorization"] = `JWT ${accessToken}`;
    return config;
  },
  (error) => Promise.reject(error)
);

appClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          toastError(error.response.data.msg);
          break;
        case 401:
          // handle unauthorized error
          break;
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
      toastError(
        "Some network error occured, please try again after some time."
      );
    }

    return Promise.reject(error);
  }
);

export default appClient;
