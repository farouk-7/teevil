import {
    Avatar,
  Box,
  Button,
  Flex,
  FormLabel,
  IconButton,
  Image,
  Input,
  Progress,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import loginBg from "../../assets/loginBg.png";
import { CustomBtn } from "../../component/CustomBtn";
import { _COLORS } from "../../constants/colors";
import FormInput from "../../component/FormInput";
import { FaCamera } from "react-icons/fa6";

const ThirdQuestion = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };
  return (
    <Box h={"100vh"} overflow={"hidden"} bg={"#000"} color={"#fff"}>
      <Flex justify={"space-between"} flexDir={"row"} gap={"50px"}>
        <Box p={"10px 50px"} flex={1}>
          <Image src={logo} h={"50px"} />
          <Box my="20px">
            <Text pb={"10px"}>3/3</Text>
            <Text fontSize={"30px"}>
              Craft a compelling bio to introduce yourself to the world.
            </Text>
          </Box>
          <Box>
            <VStack spacing={4} align="center" mb={"20px"}>
              {/* Profile Image with Camera Icon */}
              <Box position="relative" w="120px" h="120px">
                <Avatar size="full" src={image} name="Profile Picture" />
                <IconButton
                  aria-label="Change Profile Picture"
                  icon={<FaCamera />}
                  position="absolute"
                  bottom="0"
                  right="0"
                  borderRadius="full"
                  bg="gray.100"
                  size="md"
                  colorScheme="gray"
                  _hover={{ bg: "gray.200" }}
                  onClick={() => document.getElementById("fileInput").click()}
                />
              </Box>

              {/* Hidden File Input */}
              <Input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleImageChange}
                display="none"
              />

              {/* Change Profile Button */}
              {/* <Button
                onClick={() => document.getElementById("fileInput").click()}
                colorScheme="blue"
              >
                Change Profile Picture
              </Button> */}
            </VStack>
          </Box>
          <Box>
            <FormInput
              label={"Your Job Title"}
              focusBorderColor={_COLORS?.brand}
            />
            <Box mt="20px">
              <FormInput
                lines={5}
                label={"Bio"}
                focusBorderColor={_COLORS?.brand}
              />
            </Box>
          </Box>
          <Flex mt={"20px"} align={"center"} justifyContent={"space-between"}>
            <Box width={"150px"}>
              <Progress value={100} size="xs" colorScheme={"red"} />
            </Box>
            <Flex align={"center"} gap={"20px"}>
              <Text cursor={"pointer"}>Skip For Now</Text>
              <CustomBtn text={"Next"} bg={_COLORS?.brand} width={"100px"} />
            </Flex>
          </Flex>
        </Box>

        <Box flex={1}>
          <Image src={loginBg} h={"auto"} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ThirdQuestion;
