import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import CardHeader from "../../../component/CardHeader";
import Todos from "./Todos";
import InProgress from "./InProgress";
import Completed from "./Completed";

const ProjectSectionDetails = () => {
  return (
    <Box h={"100%"} color={"#fff"}>
      <CardHeader></CardHeader>
      <Flex align={"flex-start"} gap={"50px"} mt="50px">
      <Box >
        <Flex align={"center"} gap={"10px"}>
          <BsArrowBarLeft size={30} />
          <Text fontSize={"30px"} fontWeight={500}>
            Product Design Section (Website Rebuilding){" "}
          </Text>
        </Flex>

        <Flex mt={"50px"} gap={"70px"}>
          <Box flex={1}>
            <Todos />
          </Box>
          <Box flex={1}>
            <InProgress />
          </Box>
          <Box flex={1}>
            <Completed />
          </Box>
        </Flex>
      </Box>

      <Flex gap={"20px"} h={"100%"}>
      <Box h={"100vh"} bg={"#2C2C2C"} w={"1px"}></Box>
       <Box mt="30px">
        <Text fontSize={"20px"} fontWeight={500}>Task Details</Text>
        <Flex align={"center"} gap={"10px"} mt="20px">
          <Box>
            <Text fontSize={"18px"} fontWeight={500}>11</Text>
            <Text>Tasks created</Text>
          </Box>
          <Box>
            <Text fontSize={"18px"} fontWeight={500}>03</Text>
            <Text>In Progress</Text>
          </Box>
          <Box>
            <Text fontSize={"18px"} fontWeight={500}>05</Text>
            <Text>Completed</Text>
          </Box>
        </Flex>

       </Box>
       
       </Flex>
      
      </Flex>
    </Box>
  );
};

export default ProjectSectionDetails;
