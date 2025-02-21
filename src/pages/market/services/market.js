import { errorNotifier, successNotifier } from "../../../component/notifier";
import axiosInstance, {AUTH_ROUTES} from "../../../service/api";


export const getMarketOrders = async (status) => {
    try {
      const { data } = await axiosInstance.get(AUTH_ROUTES.GET_MARKET_ORDERS(status));
      console.log("REQUEST DATA", data);
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



  export const acceptRequest= async (payload)=>{
    try {
        await axiosInstance.post(AUTH_ROUTES.ACCEPT_REQUEST, payload);
        successNotifier("Request Accepted");
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

export const counterRequest= async (payload)=>{
  try {
      await axiosInstance.post(AUTH_ROUTES.ACCEPT_REQUEST, payload);
      successNotifier(" Counter Request Submitted");
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

export const getAssignedOrders = async (vendorId) => {
  try {
    const { data } = await axiosInstance.get(AUTH_ROUTES.GET_ASSIGNED_ORDERS(vendorId));
    console.log("REQUEST DATA", data);
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