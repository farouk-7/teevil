import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Tab,
  TabList,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import CardHeader from "../../../component/CardHeader";
import SearchField from "../../../component/SearchField";
import { CustomBtn } from "../../../component/CustomBtn";
import { FaPlus } from "react-icons/fa6";
import ActiveJob from "./ActiveJob";
import ClosedJob from "./ClosedJob";
import DraftedJob from "./DraftedJob";
import FormInput from "../../../component/FormInput";
import PostJob from "./PostJob";

  const payments = [
  {
    date: "2025-02-20",
    project: "E-commerce Website",
    freelancer: { name: "Marcel Williams", email: "marcelw@gmail.com", avatar: "" },
    budget: "$2,000",
    proposal:"10",
    status: "active",
  },
  {
    date: "2025-02-20",
    project: "Mobile App UI Design",
    freelancer: { name: "Vincent Green", email: "vincentg@gmail.com", avatar: "" },
     budget: "$6,000",
    proposal:"32",
    status: "active",
  },
  {
    date: "2025-02-20",
    project: "Marketing Strategy",
    freelancer: { name: "Lauren Palmer", email: "laurenp@gmail.com", avatar: "" },
  budget: "$3,000",
    proposal:"9",
    status: "drafted",
  },
  {
    date: "2025-02-20",
    project: "Logo Animation",
    freelancer: { name: "Jean Smith", email: "jeansmith@gmail.com", avatar: "" },
     budget: "$2,000",
    proposal:"4",
    status: "closed",
  },
  {
    date: "2025-02-20",
    project: "Logo Design",
    freelancer: { name: "Jean Smith", email: "jeansmith@gmail.com", avatar: "" },
     budget: "$900",
    proposal:"5",
    status: "closed",
  },
];
const JobManagement = () => {
 const activeData = payments?.filter((pay)=>pay?.status==="active")
 const closeData = payments?.filter((pay)=>pay?.status==="closed")
 const draftedData = payments?.filter((pay)=>pay?.status==="drafted")
 
 console.log(activeData,"ppp")
   const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [tabToShow, setTabToShow] = useState("active");
  return (
    <Box h={"100vh"}>
      <CardHeader></CardHeader>
      <Flex mt="40px" mb="20px" justify={"space-between"} align={"center"}>
        <Box w="500px">
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
          <CustomBtn
            text={"Post New Job"}
            ref={btnRef}
            handleClick={onOpen}
            color={"#000"}
            childComp={<FaPlus />}
          />
        </Flex>
      </Flex>

      <Box>
        {tabToShow === "active" ? (
          <ActiveJob payments={payments}/>
        ) : tabToShow === "closed" ? (
          <ClosedJob payments={closeData}/>
        ) : (
          <DraftedJob payments={draftedData}/>
        )}
      </Box>

      <PostJob isOpen={isOpen} finalFocusRef={btnRef} onClose={onClose}/>

     
    </Box>
  );
};

export default JobManagement;
