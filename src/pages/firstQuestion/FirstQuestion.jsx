import {
  Box,
  Flex,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import questionImg from "../../assets/questionImg.png";
import { ColorModeSwitcher } from "../../ColorModeSwicher";
import { CustomBtn } from "../../component/CustomBtn";
import { _COLORS } from "../../constants/colors";
import { useNavigate } from "react-router-dom";
import newImg from "../../assets/newImg.png";
import experienceImg from "../../assets/experienceImg.png";
import ppleImg from "../../assets/ppleImg.png";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createExperince } from "./service";
import { useGetState } from "../../GlobalStateContext/useGetState";
import { getLocalStorageItem } from "../../utils/localStorage";
import { APP_CONSTANTS } from "../../constants/app";

const FirstQuestion = () => {
  const userAccount = getLocalStorageItem(APP_CONSTANTS.accountType);
  console.log(userAccount, "om;o");
  const id = userAccount?._id;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [previousExperience, setExperience] = useState("");

  const { mutate: sendExperience, isPending: isUpdateMutating } = useMutation({
    mutationFn: (payload) => createExperince(payload),
    mutationKey: ["question"],
    onSuccess: (data) => {
      navigate("/second-question");
      console.log("data", data);
      queryClient.invalidateQueries({ queryKey: ["question"] });
    },
    onError: (error) => {
      console.error("Update Profile Mutation error", error);
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const experienceString = String(previousExperience);
    const payload = {
      id: id,
      experienceString,
    };

    sendExperience(payload);
    console.log(previousExperience, "ry/");
  };

  // const handleSubmit=()=>{
  //   console.log(experience,"SUBMITTED")
  // }

  return (
    <Box
      h={"100vh"}
      // overflow={"hidden"}
      bg={"#000"}
      color={"#fff"}
      //   p={"10px 100px"}
    >
      <Flex justify={"space-between"} flexDir={["column","column","column","row"]} gap={"50px"}>
        <Box p={["10px 30px","10px 30px","10px 30px","10px 50px"]} flex={1}>
          <Image src={logo} h={"50px"} />
          <Box my={["30px","30px","30px","70px"]}>
            <Text pb={"30px"}>1/3</Text>
            <Text fontSize={"30px"}>
              Just a few quick questions to get started! First, have you worked
              as a freelancer before?
            </Text>
          </Box>
          <Flex align={"center"} justifyContent={"space-between"} gap={["20px","20px","20px","0px"]}>
            <Box
              border={"1px solid white"}
              h={"170px"}
              // w={"200px"}
              borderRadius={"10px"}
            >
              <Flex
                justifyContent={"space-between"}
                p={"15px"}
                align={"flex-start"}
                gap={"20px"}
              >
                <Box>
                  <Image src={newImg} />
                  <Text fontWeight={500}>I'm new to this</Text>
                </Box>
                <RadioGroup onChange={setExperience} value={previousExperience}>
                  <Radio value={"i am new to this"} variant="groove"></Radio>
                </RadioGroup>
              </Flex>
            </Box>

            <Box
              border={"1px solid white"}
              h={"170px"}
              // w={"200px"}
              borderRadius={"10px"}
            >
              <Flex
                justifyContent={"space-between"}
                p={"15px"}
                align={"flex-start"}
                gap={"20px"}
              >
                <Box>
                  <Image src={experienceImg} h={"100px"} />
                  <Text fontWeight={500} pt="10px">
                    I have experience
                  </Text>
                </Box>
                <RadioGroup onChange={setExperience} value={previousExperience}>
                  <Radio value={"i have experience"} variant="groove"></Radio>
                </RadioGroup>
              </Flex>
            </Box>

            <Box
              border={"1px solid white"}
              h={"170px"}
              // w={"200px"}
              borderRadius={"10px"}
            >
              <Flex
                justifyContent={"space-between"}
                p={"15px"}
                align={"flex-start"}
                gap={"20px"}
              >
                <Box>
                  <Image src={ppleImg} />
                  <Text pt="30px" fontWeight={500}>
                    This is what I do
                  </Text>
                </Box>
                <RadioGroup onChange={setExperience} value={previousExperience}>
                  <Radio value={"this is what i do"} variant="groove"></Radio>
                </RadioGroup>
              </Flex>
            </Box>
          </Flex>
          {/* <ColorModeSwitcher aria-label="toggle theme" position="absolute" bottom={4} left={4} /> */}
          <Flex mt={"70px"} align={"center"} justifyContent={"space-between"}>
            <Box width={"150px"}>
              <Progress value={45} size="xs" colorScheme={"red"} />
            </Box>
            <Flex align={"center"} gap={"20px"}>
              <Text
                cursor={"pointer"}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Skip For Now
              </Text>
              <CustomBtn
                text={"Next"}
                bg={_COLORS?.brand}
                loading={isUpdateMutating}
                disabled={!previousExperience}
                width={"100px"}
                handleClick={handleSubmit}
              />
            </Flex>
          </Flex>
        </Box>

        <Box flex={1}>
          <Image src={questionImg} h={["70vh","70vh","70vh","100vh"]} w={"full"}/>
          {/* <FaRegCircleUser size={30} /> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default FirstQuestion;
