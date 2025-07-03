import { errorNotifier, successNotifier } from "../../../component/notifier";
import axiosInstance, { AUTH_ROUTES } from "../../../service/api";





export const createClientType = async (payload) => {

   
    try {
      const { data } = await axiosInstance.put(AUTH_ROUTES.POST_CLIENT_FIRST_QUESTION(payload?.id), payload);
      successNotifier("Submitted");
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
  