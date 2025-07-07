import React, { useEffect } from "react";
import { useGetState } from "../GlobalStateContext/useGetState";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import FullPageLoader from "./FullPageLoader";
import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../GlobalStateContext/getLoggedInVendor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CLIENT_AUTHENTICATED_ROUTES } from "../constants/clientRoute";
import Dashboard from "../pages/clientsPages/dashboard/Index";
import JobManagement from "../pages/clientsPages/job/Index";
import ClientSidebar from "./ClientSidebar"
import Projects from "../pages/clientsPages/projects/Index";
import ProposalList from "../pages/clientsPages/proposalList/Index"
import ClientMessages from "../pages/clientsPages/message/Index";
import Payment from "../pages/clientsPages/payment/Index";
import Setting from "../pages/clientsPages/setting/Index";
import VieMore from "../pages/clientsPages/projects/components/VieMore";

const ClientAuthenticatedRoutes = () => {
  const { setState = {}, state = {} } = useGetState();

  const { isLoading, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserDetails(setState),
  });
  console.log(state, "peru");

  useEffect(() => {
    refetch();
    console.log("RELOAD APP");
  }, [refetch, state.updated]);
  return isLoading ? (
    <FullPageLoader />
  ) : (
    <Box>
      <BrowserRouter>
        <Flex
          flexDir={["column", "column", "column", "row"]}
          bg={"#141414"}
          h={"100%"}
          width="100%"
          flex={1}
        >
          <ClientSidebar />

          <Stack
            flex={1}
            w={["100%", "100%", "100%", "100%"]}
            // w={["100%", "100%", "80%"]}
          >
            {/* <Navigation /> */}
            <Flex
              flexDir={"column"}
              mt="0px"
              p={["20px 10px", "20px"]}
              width="100%"
            >
              <Routes>
                <Route
                  path={CLIENT_AUTHENTICATED_ROUTES.dashboard}
                  element={<Dashboard />}
                />
                <Route
                  path={CLIENT_AUTHENTICATED_ROUTES.job}
                  element={<JobManagement />}
                />
                <Route
                  path={CLIENT_AUTHENTICATED_ROUTES.projects}
                  element={<Projects />}
                />
                <Route
                  path={CLIENT_AUTHENTICATED_ROUTES.proposal}
                  element={<ProposalList />}
                />
                  <Route
                  path={CLIENT_AUTHENTICATED_ROUTES.messages}
                  element={<ClientMessages />}
                />
                 <Route
                  path={CLIENT_AUTHENTICATED_ROUTES.payment}
                  element={<Payment />}
                />
                 <Route
                  path={CLIENT_AUTHENTICATED_ROUTES.setting}
                  element={<Setting />}
                />
                <Route
                  path={"/viewmore"}
                  element={<VieMore/>}
                />
                <Route path="/*" element={<Dashboard />} />
              </Routes>
            </Flex>
          </Stack>
        </Flex>
      </BrowserRouter>
    </Box>
  );
};

export default ClientAuthenticatedRoutes;
