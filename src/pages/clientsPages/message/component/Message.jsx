// ChatApp.tsx
import {
  Box,
  Flex,
  Avatar,
  Text,
  Input,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { FaPaperPlane, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import FormInput from "../../../../component/FormInput";
import { LuSend } from "react-icons/lu";

const messages = [
  {
    id: 1,
    from: "other",
    text: "Sure! I'd be happy to go over any questions...",
    time: "2:20pm",
  },
  {
    id: 2,
    from: "me",
    text: "Hi Jane, thanks for sending over the proposal...",
    time: "2:20pm",
  },
  {
    id: 3,
    from: "me",
    text: "How about we schedule a quick call...",
    time: "2:20pm",
  },
  {
    id: 4,
    from: "other",
    text: "Absolutely, I'm available most of this week.",
    time: "2:20pm",
  },
];

const ChatApp = () => {
  const [newMsg, setNewMsg] = useState("");

  return (
    <Flex direction="column" bg="#2C2C2C" flex={2} borderRadius="10px" >
      
      <Box flex="1" overflowY="auto" mb={4} p={4}>
        {messages.map((msg) => (
          <Flex
            key={msg.id}
            justify={msg.from === "me" ? "flex-end" : "flex-start"}
            mb={4}
          >
            {msg.from === "other" && <Avatar size="sm" name="Vanessa Kent" mr={2} />}
            <Box
              bg={msg.from === "me" ? "white" : "#3D3D3D"}
              color={msg.from === "me" ? "black" : "white"}
              px={4}
              py={2}
              borderRadius="md"
              maxW="60%"
            >
              <Text>{msg.text}</Text>
              <Text fontSize="xs" textAlign="right" mt={1}>
                {msg.time}
              </Text>
            </Box>
            {msg.from === "me" && <Avatar size="sm" name="Me" ml={2} />}
          </Flex>
        ))}
      </Box>


      <Flex
        px={"30px"}
        bg={"#222222"}
        justify={"center"}
        align={"center"}
        gap={"30px"}
        borderBottomRadius={"10px"}
        py={"10px"}
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
        <FormInput
          placeholder="Type a message..."
          bg="#3D3D3D"
          border="1px solid #3D3D3D"
          color="white"
          focusBorderColor={"transparent"}
        //   mr={2}
          value={newMsg}
          handleChange={(e) => setNewMsg(e.target.value)}
        />
        <Box p={"8px"} bg={"#3D3D3D"} borderRadius={"8px"}>
           <LuSend size={20} color="white" cursor={"pointer"} />  
        </Box>
       
      </Flex>
    </Flex>
  );
};

export default ChatApp;
