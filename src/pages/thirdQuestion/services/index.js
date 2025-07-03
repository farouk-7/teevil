import { errorNotifier, successNotifier } from "../../../component/notifier";
import axiosInstance, { AUTH_ROUTES, axiosInstanceMultipart } from "../../../service/api";





export const uploadPicture = async (id, payload) => {

   
    try {
      const { data } = await axiosInstanceMultipart.put(AUTH_ROUTES.UPLOAD_PIC(id), payload);
      successNotifier("Picture Submitted");
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
  