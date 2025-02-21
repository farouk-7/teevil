import { Box, Flex, Stack } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AUTHENTICATED_ROUTES } from "../constants/pageRoutes";
import Market from "../pages/market/Index";
import Setting from "../pages/setting/Index";
import { useGetState } from "../GlobalStateContext/useGetState";
import { useQuery } from "@tanstack/react-query";
import {getVendorDetails} from "../GlobalStateContext/getLoggedInVendor"
import { useEffect, useState } from "react";
import FullPageLoader from "./FullPageLoader"
import Profile from "../pages/setting/components/Profile";


const AuthenticatedRoutes = () => {
  const { setState = {}, state = {} } = useGetState();

  const { isLoading, refetch } = useQuery({
    queryKey: ["vendor"],
    queryFn: () => getVendorDetails(setState),
  });
  console.log(state,"para")
 

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
        flexDir={["column","column","column","row"]}
        bg={"#f6f6f6"}
        width="100%"
        flex={1}>
        <Sidebar />


        <Stack
          flex={1}
           w={["100%", "100%", "100%","100%"]}
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
                path={AUTHENTICATED_ROUTES.setting}
                element={<Setting/>}
              />
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
