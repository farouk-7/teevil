import { Box, Flex, Stack } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AUTHENTICATED_ROUTES } from "../constants/pageRoutes";
import Market from "../pages/market/Index";
import Wallet from "../pages/wallet";
import Setting from "../pages/setting/Index";
import MyEvent from "../pages/event/Index";
import Orders from "../pages/orders/Index";
import EventDetails from "../pages/event/components/EventDetails";
import Navigation from "./Navigation";
import SeeMore from "../pages/market/components/SeeMore";
import NewRequestDetails from "../pages/market/components/NewRequestDetails";
import { useGetState } from "../GlobalStateContext/useGetState";
import { useQuery } from "@tanstack/react-query";
import {getVendorDetails} from "../GlobalStateContext/getLoggedInVendor"
import { useEffect } from "react";
import FullPageLoader from "./FullPageLoader"
import Profile from "../pages/setting/components/Profile";

const AuthenticatedRoutes = () => {
  const { setState = {}, state = {} } = useGetState();

  const { isLoading, refetch } = useQuery({
    queryKey: ["admin"],
    queryFn: () => getVendorDetails(setState),
  });

  useEffect(() => {
    refetch();
    console.log("RELOAD APP");
  }, [refetch, state.updated]);

  return isLoading ? (
    <FullPageLoader />
  ):(
    <Box>
       <BrowserRouter>
      <Flex
        flexDir={"row"}
        bg={"#f6f6f6"}
        width="100%"
        flex={1}>
        <Sidebar />
        <Stack
          flex={1}
          w="100%"
          // w={["100%", "100%", "80%"]}
        >
          {/* <Navigation /> */}
          <Flex
            flexDir={"column"}
            mt="10px"
            p={["20px 10px", "20px"]}
            width="100%">
            <Routes>
              <Route
                path={AUTHENTICATED_ROUTES.market}
                element={<Market/>}
              />
              <Route
                path={AUTHENTICATED_ROUTES.wallet}
                element={<Wallet/>}
              />
               <Route
                path={AUTHENTICATED_ROUTES.setting}
                element={<Setting/>}
              />
               <Route
                path={AUTHENTICATED_ROUTES.event}
                element={<MyEvent/>}
              />
              <Route
                path={AUTHENTICATED_ROUTES.orders}
                element={<Orders/>}
              />
                <Route
                path={AUTHENTICATED_ROUTES.event_details}
                element={<EventDetails/>}
              />
                <Route
                path={AUTHENTICATED_ROUTES.assigned_order_details}
                element={<SeeMore />}
              />
              <Route path={AUTHENTICATED_ROUTES.new_request_details} element={<NewRequestDetails />}/>
              <Route path={AUTHENTICATED_ROUTES.profile} element={<Profile />}/>
              
              <Route path="/*" element={<Market />} />
            </Routes>
          </Flex>
        </Stack>
      </Flex>
    </BrowserRouter>
    </Box>
  );
};

export default AuthenticatedRoutes;
