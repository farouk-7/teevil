
import { errorNotifier, successNotifier } from "../../../component/notifier";
import { APP_CONSTANTS } from "../../../constants/app";
import axiosInstance, {AUTH_ROUTES} from "../../../service/api";
import { setLocalStorageItem, } from "../../../utils/localStorage";




export const registerFreelancer = async (payload, setLoading, email, navigate) => {
    try {
      const {
        data: { data },
      } = await axiosInstance.post(AUTH_ROUTES.SIGN_UP, payload);
      setLoading(false);
      console.log(data,"ygyg")
      setLocalStorageItem(APP_CONSTANTS.accountType, data)
      successNotifier("Freelancer Created Successfully")
      navigate(`/verify-code/${email}`, {state:data});
      // window.location.replace("/verify-code")

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

  export const registerClient = async (payload, setLoading, email, navigate) => {
    try {
      const {
        data: { data },
      } = await axiosInstance.post(AUTH_ROUTES.SIGN_UP, payload);
      setLoading(false);
      console.log(data)
      setLocalStorageItem(APP_CONSTANTS.accountType, data)
      successNotifier("Client Created Successfully")
      navigate(`/verify-code/${email}`, {state:data});
      // window.location.replace("/verify-code")

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
  