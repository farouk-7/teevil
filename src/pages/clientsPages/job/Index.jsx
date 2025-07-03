import { Box, Flex, Tab, TabList, Tabs } from "@chakra-ui/react";
import React, { useState } from "react";
import CardHeader from "../../../component/CardHeader";
import SearchField from "../../../component/SearchField";
import { CustomBtn } from "../../../component/CustomBtn";
import { FaPlus } from "react-icons/fa6";
import ActiveJob from "./ActiveJob";
import ClosedJob from "./ClosedJob";
import DraftedJob from "./DraftedJob";

const JobManagement = () => {
    const [tabToShow, setTabToShow] = useState("active")
  return (
    <Box h={"100vh"}>
      <CardHeader></CardHeader>
      <Flex mt="40px" mb="20px" justify={"space-between"} align={"center"}>
        <Box>
          <SearchField />
        </Box>

        <Flex align={"baseline"} gap={"20px"}>
          <Box>
            <Tabs variant="unstyled" mt="10px">
              <TabList
                bg={"#2C2C2C"}
                p={"5px"}
                borderRadius={"10px"}
                w={"fit-content"}
                color={"#B5B5B5"}
                gap={"0px"}
              >
                <Tab
                  _selected={{ color: "#000", bg: "#F5F5F5" }}
                  borderRadius={"10px"}
                  px="10px"
                  fontWeight={"bold"}
                  onClick={() => {
                    setTabToShow("active");
                  }}
                >
                 Active Job
                </Tab>
                <Tab
                  _selected={{ color: "#000", bg: "#F5F5F5" }}
                  borderRadius={"10px"}
                  px="10px"
                  fontWeight={"bold"}
                  onClick={() => {
                    setTabToShow("closed");
                  }}
                >
                  Closed Jobs
                </Tab>
                <Tab
                  _selected={{ color: "#000", bg: "#F5F5F5" }}
                  borderRadius={"10px"}
                  px="10px"
                  fontWeight={"bold"}
                  onClick={() => {
                    setTabToShow("draft");
                  }}
                >
                  Drafted Jobs
                </Tab>
              </TabList>
            </Tabs>
          </Box>
          <CustomBtn text={"Post New Job"} color={"#000"} childComp={<FaPlus />}/>
        </Flex>
        
      </Flex>
      
        <Box>
            {tabToShow==="active"?<ActiveJob />: tabToShow==="closed"?<ClosedJob />:<DraftedJob />}
        </Box>
    
    </Box>
  );
};

export default JobManagement;
