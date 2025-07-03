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
import singleClient from "../../assets/singleClient.png";
import experienceImg from "../../assets/experienceImg.png";
import agency from "../../assets/agency.png";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createClientType } from "./service";
import { getLocalStorageItem } from "../../utils/localStorage";
import { APP_CONSTANTS } from "../../constants/app";

const FirstQuestionClient = () => {
   const userAccount = getLocalStorageItem(APP_CONSTANTS.accountType);
    console.log(userAccount, "om;o");
    const id = userAccount?._id;
  const navigate = useNavigate();
  // const [value, setValue] = useState("");

  const queryClient = useQueryClient();
  const [clientType, setClientType] = useState("");



  const { mutate: sendExperience, isPending: isUpdateMutating } = useMutation({
    mutationFn: (payload) => createClientType(payload),
    mutationKey: ["question"],
    onSuccess: (data) => {
      
      console.log("data", data);
      queryClient.invalidateQueries({ queryKey: ["question"] });
      navigate("/client-second");
    },
    onError: (error) => {
      console.error("Update Profile Mutation error", error);
    },
  });
  const { mutate: submitExperience, isPending: pending  } = useMutation({
    mutationFn: (payload) => createClientType(payload),
    mutationKey: ["question"],
    onSuccess: (data) => {
      
      console.log("data", data);
      queryClient.invalidateQueries({ queryKey: ["question"] });
      navigate("/agency-first-question");
    },
    onError: (error) => {
      console.error("Update Profile Mutation error", error);
    },
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    // const clientString = String(clientType);
    const payload = {
      id: id,
      clientType,
    };
    clientType==="single"? sendExperience(payload) : submitExperience(payload)
    
  };







  return (
    <Box>
      <Text fontWeight={"bold"} pb={"20px"}>
        How would you like your account to be addressed as?
      </Text>
      <Flex align={"center"} justifyContent={"space-between"}>
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
            <Flex flexDir={"column"} align={"center"} justifyContent={"center"}>
              <Image src={singleClient} h={"100px"} />
              <Text fontWeight={500} textAlign={"center"} pt="10px">
                Single Client Account
              </Text>
            </Flex>
            <RadioGroup onChange={setClientType} value={clientType}>
              <Radio value={"single"} variant="groove"></Radio>
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
            <Flex flexDir={"column"} align={"center"} justifyContent={"center"}>
              <Image src={agency} h={"100px"} />
              <Text fontWeight={500} pt="10px" textAlign={"center"}>
                Agency Account
              </Text>
            </Flex>
            <RadioGroup onChange={setClientType} value={clientType} borderColor={"red"}>
              <Radio value={"agency"} variant="groove"></Radio>
            </RadioGroup>
          </Flex>
        </Box>
      </Flex>
      <Box mt="50px">
        <CustomBtn
          text={"Let's Get You Started"}
          width={"full"}
          disabled={!clientType}
          loading={clientType==="single"? isUpdateMutating : pending}
          handleClick={handleSubmit}
          // handleClick={() => {
          //   // navigate("/first-question");
          //  value==="1"? navigate("/client-second"): navigate("/agency-first-question")
          // }}
        />
      </Box>
    </Box>
  );
};

export default FirstQuestionClient;
