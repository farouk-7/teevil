import { Box, Flex, Image, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import CardHeader from "../../../component/CardHeader";
import checked from "../../../assets/checked.png";
import cancle from "../../../assets/cancle.png";
import counter from "../../../assets/counter.png";
import { useState } from "react";
import CounterProposal from "./CounterProposal";
import AcceptRequest from "./AcceptRequest";
import CustomModal from "../../../component/CustomModal"
import { useLocation } from "react-router-dom";
import { formatToNaira } from "../../../utils/numberFormat";
import dayjs from "dayjs";

const NewRequestDetails = () => {
  const location =  useLocation()
  const state = location?.state

  const [tabToShow, setTabToShow] = useState("counter");
  return (
    <Box>
      <CardHeader></CardHeader>

      <Box
        border={"1px solid #A0AEC0"}
        borderRadius={"10px"}
        mt={"20px"}
        p={"20px"}
      >
        <Flex justifyContent={"space-between"} align={"center"}>
          <Text color={"#717171"} fontWeight={"bold"}>
           {state?.orderId || "Nil"}
          </Text>
          <Text fontWeight={"bold"} fontSize={["20px","20px","20px","25px"]}>
            {formatToNaira(state?.budget)}
          </Text>
        </Flex>
        <Text fontSize={["20px","20px","20px","25px"]} fontWeight={"bold"} py={"20px"}>
          {state?.serviceTitle || "Nil"}
        </Text>
        <Text>
         {state?.condition || "Nil"}
        </Text>
        <Text pt="10px" color={"#A0AEC0"} cursor={"pointer"}>
          More
        </Text>
        <Flex
          border={"1px solid #A0AEC0"}
          boxShadow="rgb(0 0 0 / 30%) 1px 1px 3px"
          p={"20px"}
          bg={"#e6e6e6"}
          borderRadius={"10px"}
          my={"20px"}
          justifyContent={"space-between"}
          align={"center"}
        >
          <Flex flexDirection={"column"} gap={"10px"} fontSize={["14px","14px","14px","18px"]}>
            <Text color={"#A0AEC0"}>Event Date</Text>
            <Text fontWeight={"bold"}>{dayjs(state?.eventDate).format("DD MMM YYYY") || "Nil"}</Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"10px"} fontSize={["14px","14px","14px","18px"]}>
            <Text color={"#A0AEC0"}>Event Location</Text>
            <Text fontWeight={"bold"}>{state?.location || "Nil"}</Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"10px"} fontSize={["14px","14px","14px","18px"]}>
            <Text color={"#A0AEC0"}>Client</Text>
            <Text fontWeight={"bold"}>{state?.requesterId?.fullName || "Nil"}</Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"10px"} fontSize={["14px","14px","14px","18px"]}>
            <Text color={"#A0AEC0"}>Deadline</Text>
            <Text fontWeight={"bold"}>{dayjs(state?.deadline).format("DD MMM YYYY") || "Nil"}</Text>
          </Flex>
        </Flex>
        <Tabs variant="unstyled" defaultIndex={2}>
          <TabList
            border={"1px solid #A0AEC0"}
            p={"10px"}
            bg={"#e6e6e6"}
            maxW={"fit-content"}
            borderRadius={"10px"}
            boxShadow="rgb(0 0 0 / 30%) 1px 1px 3px"
            my={"20px"}
          >
            <Tab
              borderRadius={"10px"}
              _selected={{
                color: "#606778",
                bg: "#E6EBF2",
                boxShadow: "rgb(0 0 0 / 30%) 1px 1px 3px",
              }}
              onClick={() => {
                setTabToShow("accept");
              }}
              fontWeight={"bold"}
            >
              <Image src={checked} />
              <Text>Accept</Text>
            </Tab>
            <Tab
              borderRadius={"10px"}
              _selected={{
                color: "#606778",
                bg: "#E6EBF2",
                boxShadow: "rgb(0 0 0 / 30%) 1px 1px 3px",
              }}
              fontWeight={"bold"}
              onClick={() => {
                setTabToShow("counter");
              }}
            >
              <Image src={counter} />
              <Text pl={"5px"}>Counter Proposal</Text>
            </Tab>
          </TabList>
        </Tabs>
        <Box>
          {tabToShow === "counter" ? (
            <CounterProposal state={state}/>
          ) : (
              <AcceptRequest state = {state} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NewRequestDetails;
