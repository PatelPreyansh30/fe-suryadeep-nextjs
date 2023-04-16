import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastSuccess = (msg: string) => {
  toast.success(msg);
};

export const toastInfo = (msg: string) => {
  toast.info(msg);
};

export const toastWarning = (msg: string) => {
  toast.warning(msg);
};

export const toastError = (msg: string) => {
  toast.error(msg);
};
