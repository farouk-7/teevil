import { errorNotifier, successNotifier } from "../../../../component/notifier";
import axiosInstance, {AUTH_ROUTES} from "../../../../service/api";


export const changePassword= async (payload)=>{
    try {
        await axiosInstance.put(AUTH_ROUTES.CHANGE_PASSWORD, payload);
    
        successNotifier("Password updated successfully");
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
}

export const updateProfileImage = async (payload) => {
  try {
    await axiosInstance.put(AUTH_ROUTES.UPDATE_IMAGE(payload?._id), payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    successNotifier("Image updated successfully");
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
