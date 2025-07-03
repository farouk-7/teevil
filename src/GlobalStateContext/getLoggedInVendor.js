import { errorNotifier, successNotifier } from "../component/notifier";
import axiosInstance, {AUTH_ROUTES} from "../service/api";


export const getUserDetails = async (setUserData) => {
    try {
      const {
        data: { data },
      } = await axiosInstance.get(AUTH_ROUTES.GET_LOGGED_IN_USER);
      setUserData(data);
      console.log("USER DATA", data);
      return data;
    } catch (e) {
      if (e?.response) {
        errorNotifier(
          console.log(
            e.response?.data?.message || e.response?.data?.data?.message
          )
        );
      } else {
        errorNotifier("Network Error, please check your internet connections");
      }
    }
  };
  