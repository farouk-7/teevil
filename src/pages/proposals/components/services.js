import { errorNotifier, successNotifier } from "../../../component/notifier";
import axiosInstance, { AUTH_ROUTES } from "../../../service/api";

 export const getProposals = async () => {
    try {
      const { data } = await axiosInstance.get(AUTH_ROUTES.GET_PROPOSAL);
      console.log("PROPOSAL", data);
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

  export const createNewProposal = async (payload, setLoading, onClose) => {
    try {
      const { data } = await axiosInstance.post(
        AUTH_ROUTES.POST_PROPOSALS,
        payload
      );
  
      successNotifier("Proposal created successfully");
      setLoading(false);
      onClose()
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
    } finally {
      setLoading(false);
    }
  };