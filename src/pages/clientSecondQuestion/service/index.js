
import { errorNotifier, successNotifier } from "../../../component/notifier";
import axiosInstance, { AUTH_ROUTES } from "../../../service/api";



export const getClientQuestion = async (type) => {
    try {
      const { data } = await axiosInstance.get(AUTH_ROUTES.GET_CLIENT_QUESTIONS(type));
      console.log("CLIENTS QUESTION", data);
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