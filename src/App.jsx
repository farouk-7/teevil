import { Suspense, lazy, useEffect, useState } from "react";
import { APP_CONSTANTS } from "./constants/app";
// import { jwtDecode } from "jwt-decode";
import { jwtDecode } from "jwt-decode"
import { GlobalStateContext } from "./GlobalStateContext/GlobalState";
import "./App.css";
import { Box } from "@chakra-ui/react";

const Unauthenticated = lazy(() => import("./component/Unauthenticated"));
const AuthenticatedRoutes = lazy(() =>
  import("./component/AuthenticatedRoutes")
);

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [state, setState] = useState(
    localStorage.getItem("state")
      ? JSON.parse(localStorage.getItem("state"))
      : {}
  );
   const dispatch = (incoming) => {
     setState((prev) => ({ ...prev, ...incoming }));
   };

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const deleteTokenAndKickUserOut = () => {
      sessionStorage.removeItem(APP_CONSTANTS.token);
    };

    const token = sessionStorage?.getItem(APP_CONSTANTS.token);

    if (token) {
      const decoded =jwtDecode(token);
      console.log("Decoded token:", decoded); // Debugging

      const expiryDate = new Date(decoded?.exp * 1000);

      setState({ ...state, user: decoded });
      return new Date() > expiryDate
        ? deleteTokenAndKickUserOut()
        : setAuthorized(true);
    }
    return deleteTokenAndKickUserOut();
  }, []);

  return (
    <Suspense fallback={<p></p>}>
      {authorized ? (
        <GlobalStateContext.Provider value={{ state, setState, dispatch }} >
          <AuthenticatedRoutes />{" "}
        </GlobalStateContext.Provider>
      ) : (
        <Unauthenticated />
      )}
    </Suspense>
  );
}

export default App;
