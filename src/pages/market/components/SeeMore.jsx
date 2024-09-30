import React, { useState } from "react";
import CardHeader from "../../../component/CardHeader";
import {
  Box,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import circle from "../../../assets/circle.png";
import box from "../../../assets/box.png";
import Milestones from "./Milestones";

const SeeMore = () => {
    const [tabToselect, setTabToSelected] = useState("milestones")
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
            Order ID #GS648944P
          </Text>
          <Text fontWeight={"bold"} fontSize={"25px"}>
            ₦500,000
          </Text>
        </Flex>
        <Text fontSize={"25px"} fontWeight={"bold"} py={"20px"}>
          Image and Video Coverage for Wedding Ceremony
        </Text>
        <Text>
          Our company registration services offer a seamless pathway to
          establishing your business entity with precision and efficiency. With
          a commitment to excellence, we guide you through the intricacies of
          the registration process, ensuring compliance with all legal
          requirements and facilitating a smooth transition to official
          recognition. Our company registration services offer a seamless
          pathway to establishing your business entity with precision and
          efficiency. With a commitment to excellence, we guide you through the
          intricacies of the registration process, ensuring compliance with all
          legal requirements and facilitating a smooth transition to official
          recognition
        </Text>
        <Text pt="10px" color={"#A0AEC0"} cursor={"pointer"}>
          More
        </Text>
        <Flex
          border={"1px solid #A0AEC0"}
          boxShadow= "rgb(0 0 0 / 30%) 1px 1px 3px"
          p={"20px"}
          borderRadius={"10px"}
          my={"20px"}
          justifyContent={"space-between"}
          align={"center"}
        >
          <Flex flexDirection={"column"} gap={"10px"}>
            <Text color={"#A0AEC0"}>Event Date</Text>
            <Text fontWeight={"bold"}>24th, September 2024.</Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"10px"}>
            <Text color={"#A0AEC0"}>Event Location</Text>
            <Text fontWeight={"bold"}>Ikeja, City Hall, Ikeja, Lagos.</Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"10px"}>
            <Text color={"#A0AEC0"}>Client</Text>
            <Text fontWeight={"bold"}>A.O. Adebaye</Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"10px"}>
            <Text color={"#A0AEC0"}>Deadline</Text>
            <Text fontWeight={"bold"}>12th, September 2024.</Text>
          </Flex>
        </Flex>
        <Tabs variant="unstyled">
          <TabList
            border={"1px solid #A0AEC0"}
            p={"10px"}
            borderRadius={"10px"}
            boxShadow= "rgb(0 0 0 / 30%) 1px 1px 3px"
            my={"20px"}
          >
            <Tab
            borderRadius={"10px"}
            
              _selected={{ color: "#606778", bg: "#E6EBF2", boxShadow: "rgb(0 0 0 / 30%) 1px 1px 3px", }}
              onClick={()=>{
                setTabToSelected("milestones")
              }}
              fontWeight={"bold"}
            >
              <Image src={circle} />
              <Text>Project Milestones</Text>
            </Tab>
            <Tab
              _selected={{ color: "#606778", bg: "#E6EBF2",boxShadow: "rgb(0 0 0 / 30%) 1px 1px 3px", }}
              fontWeight={"bold"}
              onClick={()=>{
                setTabToSelected("clientchat")
              }}
            >
              <Image src={box} />
              <Text pl={"5px"}>Chat with Client</Text>
            </Tab>
          </TabList>
          
        </Tabs>
        <Box>
            {tabToselect==="milestones"?<Milestones /> :"gru"}
          </Box>
      </Box>
    </Box>
  );
};

export default SeeMore;
