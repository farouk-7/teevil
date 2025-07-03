import { Suspense, lazy, useEffect, useState } from "react";
import { APP_CONSTANTS } from "./constants/app";
import {jwtDecode} from "jwt-decode";
import { GlobalStateContext } from "./GlobalStateContext/GlobalState";
import "./App.css";
import { getLocalStorageItem, setLocalStorageItem } from "./utils/localStorage";
import FullPageLoader from "./component/FullPageLoader";

const Unauthenticated = lazy(() => import("./component/Unauthenticated"));
const AuthenticatedRoutes = lazy(() =>
  import("./component/AuthenticatedRoutes")
);
const ClientAuthenticated = lazy(() =>
  import("./component/ClientAuthenticatedRoutes")
);

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [userAccount, setUserAccount] = useState(
    getLocalStorageItem(APP_CONSTANTS?.accountType)
  );


  const [state, setState] = useState(
    localStorage.getItem("state")
      ? JSON.parse(localStorage.getItem("state"))
      : {}
  );

  const dispatch = (incoming) => {
    setState((prev) => ({ ...prev, ...incoming }));
  };

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  // Token and authentication management
  useEffect(() => {
    const deleteTokenAndKickUserOut = () => {
      sessionStorage.removeItem(APP_CONSTANTS.token);
      setAuthorized(false);
    };

    const token = sessionStorage?.getItem(APP_CONSTANTS.token);

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded token:", decoded); // Debugging

        const expiryDate = new Date(decoded?.exp * 1000);

        if (new Date() > expiryDate) {
          // Token has expired
          deleteTokenAndKickUserOut();
        } else {
          // Token is valid
          setState((prevState) => ({ ...prevState, user: decoded, accountType: decoded?.accountType,  }));
          setAuthorized(true);
          
          // Ensure accountType is set in local storage
          if (decoded?.accountType) {
            setLocalStorageItem(APP_CONSTANTS.accountType, decoded.accountType);
            setUserAccount(decoded.accountType);
          }
        }
      } catch (error) {
        console.error("Invalid token", error);
        deleteTokenAndKickUserOut();
      }
    } else {
      deleteTokenAndKickUserOut();
    }
  }, []);

  // Render components based on user role (freelancer or client)
  const renderAuthenticatedRoutes = () => {
    if (userAccount === "freelancer") {
      return <AuthenticatedRoutes />;
    } else if (userAccount === "client") {
      return <ClientAuthenticated />;
    } else {
      return <Unauthenticated />;
    }
  };

  return (
    <Suspense fallback={<FullPageLoader />}>
      {authorized ? (
        <GlobalStateContext.Provider value={{ state, setState, dispatch }}>
          {renderAuthenticatedRoutes()}
        </GlobalStateContext.Provider>
      ) : (
        <Unauthenticated />
      )}
    </Suspense>
  );
}

export default App;
