import { errorNotifier, successNotifier } from "../../../component/notifier";
import { APP_CONSTANTS } from "../../../constants/app";
import axiosInstance, { AUTH_ROUTES } from "../../../service/api";
import {
  setLocalStorageItem,
  setLocalStorageString,
} from "../../../utils/localStorage";

export const login = async (payload, setLoading) => {
  try {
    const {
      data: { data },
    } = await axiosInstance.post(AUTH_ROUTES.LOGIN, payload);

    console.log(data?.token, "kkk");
    setLocalStorageString(APP_CONSTANTS.token, data?.token);
    setLocalStorageItem(APP_CONSTANTS.user, data);
    // Save the accountType explicitly for use later (if exists)
    if (data?.accountType) {
      setLocalStorageItem(APP_CONSTANTS.accountType, data.accountType);
    }

    successNotifier("Login Successful");
    window.location.reload();
    setLoading(false);
  } catch (e) {
    setLoading(false);
    if (e.response) {
      errorNotifier(
        e.response?.data?.message || e.response?.data?.data?.message
      );
    } else {
      errorNotifier("Network Error, please check your internet connections");
      setLoading(false);
    }
  }
};
