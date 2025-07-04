import { Box, Flex, HStack, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CardHeader from "../../../component/CardHeader";
import { FaBagShopping } from "react-icons/fa6";
import { formatToNaira } from "../../../utils/numberFormat";
import { CustomBtn } from "../../../component/CustomBtn";
import History from "./component/History";

const Payment = () => {
  const [tabToShow, setTabToShow] = useState("history")
  return (
    <Box h={"100vh"}>
      <CardHeader></CardHeader>
      <Flex mt="50px" justify={"space-between"}>
        <Flex gap={"20px"}>
          <Flex>
            <Box p={"20px"} borderRadius={"10px"} bg={"#2C2C2C"}>
              <HStack spacing={4}>
                <Box bg={"#E9FCFF"} p={"8px"} borderRadius={"full"}>
                  <FaBagShopping size={20} />
                </Box>
                <Text color={"#FFFFFF"}>Total Payment Request</Text>
              </HStack>
              <Text
                pt={"20px"}
                fontSize={"25px"}
                fontWeight={"bold"}
                color={"#FFFFFF"}
              >
                03
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Box p={"20px"} borderRadius={"10px"} bg={"#2C2C2C"}>
              <HStack spacing={4}>
                <Box bg={"#E9FCFF"} p={"8px"} borderRadius={"full"}>
                  <FaBagShopping size={20} />
                </Box>
                <Text color={"#FFFFFF"}>Total Escrow Funds</Text>
              </HStack>
              <Text
                pt={"20px"}
                fontSize={"25px"}
                fontWeight={"bold"}
                color={"#FFFFFF"}
              >
                {formatToNaira(5250000)}
              </Text>
            </Box>
          </Flex>
        </Flex>

        <CustomBtn text={"Make Escrow Payment"} color={"black"} />
      </Flex>

        <Box mt="50px">
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
                  setTabToShow("history");
                }}
              >
                Payment History
              </Tab>
              <Tab
                _selected={{ color: "#000", bg: "#F5F5F5" }}
                borderRadius={"10px"}
                px="10px"
                fontWeight={"bold"}
                onClick={() => {
                  setTabToShow("request");
                }}
              >
                Payment Request()
              </Tab>
            </TabList>
          </Tabs>
        </Box>
        <Box mt="30px">
          {tabToShow==="history"?<History />:""}

        </Box>
    </Box>
  );
};

export default Payment;
