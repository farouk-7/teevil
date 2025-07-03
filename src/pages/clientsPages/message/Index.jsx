import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import CardHeader from "../../../component/CardHeader";
import SearchField from "../../../component/SearchField";
import { GoDotFill } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import FormInput from "../../../component/FormInput";
import { LuSend } from "react-icons/lu";

const data = [
  {
    id: 1,
    name: "Vanessa Kent",
    message: "For a full design, I estimake 2 weeks",
    time: "5:30pm",
    active: true,
  },
  {
    id: 2,
    name: "Klark Kent",
    message: "For a full design, I estimake 2 weeks",
    time: "5:30pm",
    active: false,
  },
  {
    id: 3,
    name: "Bruce Wayne",
    message: "For a full design, I estimake 2 weeks",
    time: "5:30pm",
    active: true,
  },
];

const ClientMessages = () => {
  return (
    <Box h={"100vh"}>
      <CardHeader></CardHeader>

      <Flex mt="50px" gap={"30px"}>
        <Box
          bg={"#2C2C2C"}
          // h={"300px"}
          flex={1}
          borderRadius={"10px"}
          p={"10px"}
        >
          <SearchField bg={"#3D3D3D"} placeholder={"Client Name"} />
          <Flex justify={"center"}>
            <Tabs variant="unstyled" mt="10px">
              <TabList
                bg={"#1414146E"}
                p={"5px"}
                borderRadius={"10px"}
                w={"fit-content"}
                color={"#B5B5B5"}
                gap={"20px"}
              >
                <Tab
                  _selected={{ color: "#000", bg: "#F5F5F5" }}
                  borderRadius={"10px"}
                  px="30px"
                  fontWeight={"bold"}
                  onClick={() => {
                    setTabToShow("freelancer");
                  }}
                >
                  All Messages
                </Tab>
                <Tab
                  _selected={{ color: "#000", bg: "#F5F5F5" }}
                  borderRadius={"10px"}
                  px="30px"
                  fontWeight={"bold"}
                  onClick={() => {
                    setTabToShow("client");
                  }}
                >
                  Unread Messages
                </Tab>
              </TabList>
            </Tabs>
          </Flex>

          {data?.map((datum) => (
            <Box mt="30px">
              <Flex key={datum?.id} color={"#fff"}>
                <HStack spacing={4}>
                  <Avatar name={datum?.name} />
                  <Box>
                    <Text>{datum?.name}</Text>
                    <Flex align={"center"} gap={"5px"}>
                      {datum?.active ? <GoDotFill color="#22D3EE" /> : ""}
                      <Text color={"#A3A3A3"}>{datum?.message}</Text>
                    </Flex>
                  </Box>
                </HStack>
                <Text color={"#A3A3A3"}>{datum?.time}</Text>
              </Flex>
              <Box my="20px">
                <Divider />
              </Box>
            </Box>
          ))}
        </Box>

        {/* <Box bg={"#2C2C2C"} h={"300px"} flex={2.0} borderRadius={"10px"}>
          <Flex color={"#fff"} p={"10px 20px"} justifyContent={"space-between"} align={"center"}>
            <HStack spacing={3}>
              <Avatar name="Vanessa Kent"/>
              <Box>
                <Text>Vanessa Kent</Text>
                <Text color={"#F5F5F5"}>johndoe@gmail.com</Text>
              </Box>
            </HStack>
            <Box>
              <HiDotsHorizontal size={25}/>
            </Box>
          </Flex>
          <Box mb="10px">
            <Divider />
          </Box>
          <Flex px={"20px"} align={"center"} gap={"30px"}>
            <Box bg={"#787878"} h={"1px"} w={"full"}></Box>
            <Text color={"#fff"}>Today</Text>
            <Box bg={"#787878"} h={"1px"} w={"full"}></Box>
          </Flex>

          <Flex >
             ghnvb
          </Flex>
        </Box> */}
        <Box
          bg="#2C2C2C"
          h="300px"
          flex={2}
          borderRadius="10px"
          display="flex"
          flexDirection="column"
        >
          <Flex
            color="#fff"
            p="10px 20px"
            justifyContent="space-between"
            align="center"
          >
            <HStack spacing={3}>
              <Avatar name="Vanessa Kent" />
              <Box>
                <Text>Vanessa Kent</Text>
                <Text color="#F5F5F5">johndoe@gmail.com</Text>
              </Box>
            </HStack>
            <Box>
              <HiDotsHorizontal size={25} />
            </Box>
          </Flex>
          <Box mb="10px">
            <Divider />
          </Box>
          <Flex px="20px" align="center" gap="30px">
            <Box bg="#787878" h="1px" w="full" />
            <Text color="#fff">Today</Text>
            <Box bg="#787878" h="1px" w="full" />
          </Flex>
          <Box flex="1" /> {/* Spacer to push last Flex down */}
          <Flex
            px={"20px"}
            pb="10px"
            bg={"#222222"}
            justify={"center"}
            align={"center"}
            gap={"30px"}
          >
            <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
              <FaPlus size={25} color="white" />
              <input
                id="file-upload"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    console.log("Selected file:", file);
                    // You can handle the file upload logic here
                  }
                }}
              />
            </label>
            <FormInput />
            <LuSend size={25} color="white" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ClientMessages;
