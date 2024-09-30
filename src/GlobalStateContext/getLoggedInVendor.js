import { errorNotifier, successNotifier } from "../component/notifier";
import axiosInstance, {AUTH_ROUTES} from "../service/api";


export const getVendorDetails = async (setVendorData) => {
    try {
      const {
        data: { data },
      } = await axiosInstance.get(AUTH_ROUTES.GET_VENDOR);
      setVendorData(data);
      // console.log("ADMIN DATA", data);
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
  