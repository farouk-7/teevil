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
import ChatApp from "./component/Message";
import { useState } from "react";

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
  {
    id: 4,
    name: "Micheal Jackson",
    message: "For a full design, I estimake 2 weeks",
    time: "5:30pm",
    active: true,
  },
  {
    id: 5,
    name: "John Wick",
    message: "For a full design, I estimake 2 weeks",
    time: "5:30pm",
    active: false,
  },
];

const ClientMessages = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ fromDate: "", toDate: "", name: "" });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setFilter((prev) => ({
      ...prev,
      name: e.target.value, // or whatever key you are filtering with
    }));
  };
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
          <SearchField
            bg={"#3D3D3D"}
            placeholder={"Client Name"}
            value={search}
            onChange={handleSearchChange}
            searchKey="name"
            filter={filter}
            setFilter={setFilter}
          />
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

          {data
            ?.filter((datum) =>
              datum.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((datum) => (
              <Box mt="30px" key={datum?.id}>
                <Flex color={"#fff"} justify={"space-between"}>
                  <HStack spacing={4}>
                    <Avatar name={datum?.name} />
                    <Box>
                      <Text>{datum?.name}</Text>
                      <Flex align={"center"} gap={"5px"}>
                        {datum?.active ? <GoDotFill color="#22D3EE" /> : ""}
                        <Text color={"#A3A3A3"} fontSize={"15px"}>
                          {datum?.message}
                        </Text>
                      </Flex>
                    </Box>
                  </HStack>

                  <Text color={"#A3A3A3"} textAlign={"end"} fontSize={"13px"}>
                    {datum?.time}
                  </Text>
                </Flex>
                <Box my="10px">
                  <Divider />
                </Box>
              </Box>
            ))}
        </Box>

        <Box bg="#2C2C2C" h="300px" flex={2} borderRadius={"10px"}>
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
          <Box flex="1" />

          <ChatApp />
        </Box>
      </Flex>
    </Box>
  );
};

export default ClientMessages;
