import React from 'react'
import { Avatar, Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import chat from "../../../assets/chat.png";
import files from "../../../assets/files.png";
import plus from "../../../assets/plus.png";
import CreateTask from "./CreateTask";
import CustomModal from "../../../component/CustomModal";


const Completed = () => {
  return (
    <Box>
      <Text
        bg={"#2852299C"}
        p={"8px 20px"}
        w={"fit-content"}
        borderRadius={"8px"}
        fontWeight={500}
        fontSize={"20px"}
      >
       Completed
      </Text>


      <Box border={"1px dashed #fff"} mt="20px" p="10px" borderRadius={"10px"}>
        <Box bg={"#3D3D3D"} p="10px" borderRadius={"10px"}>
          <Text fontWeight={500} fontSize={"20px"}>
            Research Design Trend
          </Text>
          <Flex align={"center"} justifyContent={"space-between"} mt="10px">
            <Text color={"#9F9F9F"}>Assigned To:</Text>
            <HStack>
              <Text>Allison Brown</Text>
              <Avatar size={"sm"} name="Allison Brown" />
            </HStack>
          </Flex>
          <Flex align={"center"} justifyContent={"space-between"} mt="10px">
            <Text color={"#9F9F9F"}>Due Date:</Text>

            <Text>Mar 20, 2025</Text>
          </Flex>
          <Flex align={"center"} justifyContent={"space-between"} mt="10px">
            <Text color={"#9F9F9F"}>Status:</Text>

            <Text bg={"#2852299C"} px={"15px"} borderRadius={"10px"}>
              Completed
            </Text>
          </Flex>
          <Box w={"full"} h={"1px"} bg={"#000"} my={"10px"}></Box>
          <Flex align={"center"} gap={"30px"}>
            <HStack spacing={"10px"}>
              <Image src={chat} />
              <Text>20</Text>
            </HStack>
            <HStack spacing={"10px"}>
              <Image src={files} />
              <Text>3</Text>
            </HStack>
          </Flex>
        </Box>
      </Box>
      <Box border={"1px dashed #fff"} mt="20px" p="10px" borderRadius={"10px"}>
        <Box bg={"#3D3D3D"} p="10px" borderRadius={"10px"}>
          <Text fontWeight={500} fontSize={"20px"}>
            Research Design Trend
          </Text>
          <Flex align={"center"} justifyContent={"space-between"} mt="10px">
            <Text color={"#9F9F9F"}>Assigned To:</Text>
            <HStack>
              <Text>Allison Brown</Text>
              <Avatar size={"sm"} name="Allison Brown" />
            </HStack>
          </Flex>
          <Flex align={"center"} justifyContent={"space-between"} mt="10px">
            <Text color={"#9F9F9F"}>Due Date:</Text>

            <Text>Mar 20, 2025</Text>
          </Flex>
          <Flex align={"center"} justifyContent={"space-between"} mt="10px">
            <Text color={"#9F9F9F"}>Status:</Text>

            <Text bg={"#2852299C"} px={"15px"} borderRadius={"10px"}>
              Completed
            </Text>
          </Flex>
          <Box w={"full"} h={"1px"} bg={"#000"} my={"10px"}></Box>
          <Flex align={"center"} gap={"30px"}>
            <HStack spacing={"10px"}>
              <Image src={chat} />
              <Text>20</Text>
            </HStack>
            <HStack spacing={"10px"}>
              <Image src={files} />
              <Text>3</Text>
            </HStack>
          </Flex>
        </Box>
      </Box>
      <Box border={"1px dashed #fff"} mt="20px" p="10px" borderRadius={"10px"}>
        <Box bg={"#3D3D3D"} p="10px" borderRadius={"10px"}>
          <Text fontWeight={500} fontSize={"20px"}>
            Research Design Trend
          </Text>
          <Flex align={"center"} justifyContent={"space-between"} mt="10px">
            <Text color={"#9F9F9F"}>Assigned To:</Text>
            <HStack>
              <Text>Allison Brown</Text>
              <Avatar size={"sm"} name="Allison Brown" />
            </HStack>
          </Flex>
          <Flex align={"center"} justifyContent={"space-between"} mt="10px">
            <Text color={"#9F9F9F"}>Due Date:</Text>

            <Text>Mar 20, 2025</Text>
          </Flex>
          <Flex align={"center"} justifyContent={"space-between"} mt="10px">
            <Text color={"#9F9F9F"}>Status:</Text>

            <Text bg={"#2852299C"} px={"15px"} borderRadius={"10px"}>
              Completed
            </Text>
          </Flex>
          <Box w={"full"} h={"1px"} bg={"#000"} my={"10px"}></Box>
          <Flex align={"center"} gap={"30px"}>
            <HStack spacing={"10px"}>
              <Image src={chat} />
              <Text>20</Text>
            </HStack>
            <HStack spacing={"10px"}>
              <Image src={files} />
              <Text>3</Text>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default Completed