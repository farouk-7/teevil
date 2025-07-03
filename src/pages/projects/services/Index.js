import { errorNotifier, successNotifier } from "../../../component/notifier";
import axiosInstance, { AUTH_ROUTES } from "../../../service/api";




export const createNewProject = async (payload, setLoading, onClose) => {
    try {
      const { data } = await axiosInstance.post(
        AUTH_ROUTES.CREATE_PROJECT,
        payload
      );
  
      successNotifier("Project created successfully");
      setLoading(false);
      onClose()
      window.location.reload()
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

  export const getProjects = async () => {
    try {
      const { data } = await axiosInstance.get(AUTH_ROUTES.GET_PROJECTS);
      console.log("PROJECTZ", data);
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

  export const getSpecificProject = async (Id) => {
  try {
    const { data } = await axiosInstance.get(
      AUTH_ROUTES.GET_SPECIFIC_PROJECT(Id)
    );
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

  export const deleteProjects = async (id) => {
  try {
    await axiosInstance.delete(AUTH_ROUTES.DELETE_PROJECTS(id));

    successNotifier("Project Deleted Successfully");
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


export const shareProject = async (payload,  onClose) => {
    try {
      const { data } = await axiosInstance.post(
        AUTH_ROUTES.SHARE_PROJECT,
        payload
      );
  
      successNotifier("Project shared successfully");
      // setLoading(false);
      onClose()
      // window.location.reload()
      return data;
    } catch (e) {
      if (e?.response) {
        errorNotifier(
          console.log(
            e.response?.data?.message || e.response?.data?.data?.message
          )
        );
      } 
    } finally {
      setLoading(false);
    }
  };

  export const createNewSection = async (payload, setLoading, onClose) => {
    try {
      const { data } = await axiosInstance.post(
        AUTH_ROUTES.CREATE_SECTION,
        payload
      );
  
      successNotifier("Section created successfully");
      setLoading(false);
      onClose()
      window.location.reload()
      return data;
    } catch (e) {
      if (e?.response) {
        errorNotifier(
          console.log(
            e.response?.data?.message || e.response?.data?.data?.message
          )
        );
      } 
    } finally {
      setLoading(false);
    }
  };
  