
import { errorNotifier, successNotifier } from "../../../component/notifier";
import axiosInstance, {AUTH_ROUTES} from "../../../service/api";




export const registerUser = async (payload, setLoading, email, navigate) => {
    try {
      const {
        data: { data },
      } = await axiosInstance.post(AUTH_ROUTES.SIGN_UP, payload);
      setLoading(false);
      console.log(data)
      successNotifier("User Created Successfully")
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
  