import { errorNotifier, successNotifier } from "../../../component/notifier";
import axiosInstance, { AUTH_ROUTES } from "../../../service/api";

 export const getPaymentHistory = async () => {
    try {
      const { data } = await axiosInstance.get(AUTH_ROUTES.GET_PAYMENT_HISTORY);
      console.log("PAYMENT HISTORY", data);
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


  export const getAllWithdrawal = async()=>{
    try{
       const {data} = await axiosInstance.get(AUTH_ROUTES.GET_WITHDRAWAL);
    return data;
    } catch(e){
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
