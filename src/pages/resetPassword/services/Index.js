import { errorNotifier, successNotifier } from "../../../component/notifier";
import axiosInstance, {AUTH_ROUTES} from "../../../service/api";


export const resetPassword = async (payload) => {
    try {
      const {
        data: { data },
      } = await axiosInstance.post(AUTH_ROUTES?.RESET_PASSWORD, payload);
      successNotifier("Reset Successful")
      return data
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