
import { errorNotifier, successNotifier } from "../../../component/notifier";
import axiosInstance, {AUTH_ROUTES} from "../../../service/api";




export const signUpVendor = async (payload, setLoading) => {
    try {
      const {
        data: { data },
      } = await axiosInstance.post(AUTH_ROUTES.SIGN_UP, payload);
      setLoading(false);
      console.log(data)
      successNotifier("Vendor Created Successfully")
      window.location.replace("/")
    } catch (e) {
      setLoading(false);
      if (e.response) {
        errorNotifier(
          e.response?.data?.message || e.response?.data?.data?.message
        );
      } else {
        errorNotifier("Network Error, please check your internet connections");
      }
    }
  };
  