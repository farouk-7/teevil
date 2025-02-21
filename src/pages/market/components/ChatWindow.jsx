import React from "react";
import {
  Flex,
  Text,
  Box,
  Button,
  Container,
  Avatar,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import { _COLORS } from "../../../constants/colors";
// import FormInput from "../../../components/FormInput";
import FormInput from "../../../component/FormInput";
import { IoAttachSharp } from "react-icons/io5";
import { useState } from "react";
import useForm from "../../../hooks/useForm";
import { useRef, useEffect } from "react";
import { RiAttachment2 } from "react-icons/ri";

const ChatWindow = () => {
  const fileInputsRef = useRef(null); // Create a reference for the Banner input
  const containerRef = useRef(null);
  const { handleChange, formValues, setFormValues } = useForm({});
  const [selectedBanner, setSelectedBanner] = useState(null);
  const handleBannerClick = () => {
    fileInputsRef.current.click(); // Programmatically trigger the file input
  };
  const handleFilesChange = (e) => {
    const file = e.target.files[0]; // Get the first file
    if (file) {
      setSelectedBanner(file); // Store the selected file in state
    }
  };
  const [messages, setMessages] = useState([
    {
      sender: "vendor",
      message:
        "I am willing to have an extra 50 asun to the number of already booked asun",
    },
  ]);
  const SendMessage = () => {
    setMessages([...messages, { sender: "me", message: formValues.message }]);
    setFormValues({});
  };

  useEffect(() => {
    const element = containerRef.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]);
  return (
    <Flex>
      <Flex
        direction={"column"}
        pt={5}
        px={"10px"}
        border={"1px solid gray"}
        borderRadius={"10px"}
      >
        <Flex
          direction={"column"}
          height="400px"
          overflowX="hidden"
          overflowY={"auto"}
          ref={containerRef}
          gap={4}
        >
          {messages.map((message) => (
            <Flex
              direction={"row"}
              spacing={2}
              justifyContent={
                message?.sender == "me" ? "flex-end" : "flex-start"
              }
            >
              <Box maxW={"80%"}>
                <Flex align={"center"} gap={"5px"} mb={"5px"}>
                  <Avatar
                    size="xs"
                    name={message?.sender === "me" ? "Vendor Smith" : "Client"}
                  />
                  <Text fontSize={"13px"}>
                    {message?.sender === "me" ? "Vendor Smith" : "Client"}
                  </Text>
                </Flex>
                <Box
                  bg={
                    message?.sender == "me"
                      ? _COLORS.lightBrand
                      : _COLORS.ashGrey
                  }
                  boxShadow="lg"
                  px={3}
                  py={1}
                  borderRadius="10px"
                >
                  <Text>{message.message}</Text>
                </Box>
              </Box>
            </Flex>
          ))}
        </Flex>

        <Flex direction={"column"}>
          <FormInput
            pt={0}
            mt={0}
            type={"text"}
            label={""}
            name={"message"}
            lines={3}
            h="50px"
            value={formValues?.message ? formValues?.message : ""}
            handleChange={handleChange}
          />
          {/* Display selected images */}
          <Box>
            {selectedBanner && (
              <Box mt={"10px"}>
                <Image
                  src={URL.createObjectURL(selectedBanner)}
                  alt="Selected"
                  width={"50%"}
                  h={"200px"}
                  objectFit={"cover"}
                />
              </Box>
            )}
          </Box>
          <Flex
            direction={"row"}
            justifyContent={"flex-end"}
            align={"center"}
            gap={1}
            my={"8px"}
          >
            {/* <Text fontSize={17}>.jpg, .gif, .png, .txt, .pdf</Text> */}

            <Box>
              <Box>
                <IoAttachSharp
                  color={_COLORS.brand}
                  size={30}
                  fontSize={"1.2em"}
                  cursor="pointer"
                  onClick={handleBannerClick}
                />
              </Box>
              <Input
                type="file"
                accept="image/*"
                ref={fileInputsRef}
                multiple
                onChange={handleFilesChange}
                display={"none"}
              />
            </Box>

            <Button
              color={"white"}
              isDisabled={!formValues?.message}
              fontWeight={300}
              bg={_COLORS.brand}
              onClick={() => SendMessage()}
            >
              Send Message
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ChatWindow;
