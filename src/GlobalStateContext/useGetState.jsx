import { useContext } from "react";
import { GlobalStateContext } from "./GlobalState";

export const useGetState = () => {
  const { state, setState, dispatch } = useContext(GlobalStateContext);

  return { state, setState, dispatch };
};
