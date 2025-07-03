import { Box, Flex, Stack } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AUTHENTICATED_ROUTES } from "../constants/pageRoutes";
import Market from "../pages/market/Index";
import Setting from "../pages/setting/Index";
import { useGetState } from "../GlobalStateContext/useGetState";
import { useQuery } from "@tanstack/react-query";
import {getUserDetails} from "../GlobalStateContext/getLoggedInVendor"
import { useEffect, useState } from "react";
import FullPageLoader from "./FullPageLoader"
import Profile from "../pages/setting/components/Profile";
import Projects from "../pages/projects/Index";
import Jobs from "../pages/job/Index";
import Proposal from "../pages/proposals/Index";
import Message from "../pages/messages/Index"
import ProjectDetails from "../pages/projects/components/ProjectDetails";
import ProjectSectionDetails from "../pages/projects/components/ProjectSectionDetails";
import Earn from "../pages/earns/Index";


const AuthenticatedRoutes = () => {
  const { setState = {}, state = {} } = useGetState();

  const { isLoading, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserDetails(setState),
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
        bg={"#141414"}
        width="100%"
        flex={1}>
        <Sidebar />


        <Stack
          flex={1}
           w={["100%", "100%", "100%","100%"]}
           h={"full"}
         
          // w={["100%", "100%", "80%"]}
        >
          {/* <Navigation /> */}
          <Flex
            flexDir={"column"}
            // mt="10px"
            p={["20px 10px", "10px 20px"]}
            width="100%">
            <Routes>
              <Route
                path={AUTHENTICATED_ROUTES.market}
                element={<Market/>}
              />
               <Route
                path={AUTHENTICATED_ROUTES.projects}
                element={<Projects/>}
              />
               <Route
                path={AUTHENTICATED_ROUTES.setting}
                element={<Setting/>}
              />
              <Route
                path={AUTHENTICATED_ROUTES.jobs}
                element={<Jobs/>}
              />
              <Route path={AUTHENTICATED_ROUTES.profile} element={<Profile />}/>
              <Route path={AUTHENTICATED_ROUTES.proposals} element={<Proposal />}/>
              <Route path={AUTHENTICATED_ROUTES.messages} element={<Message />}/>
              <Route path={"/project-details/:id"} element={<ProjectDetails />}/>
               <Route path={"/project-section-details"} element={<ProjectSectionDetails />}/>
               <Route path={AUTHENTICATED_ROUTES.earns} element={<Earn />}/>
               

              
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
