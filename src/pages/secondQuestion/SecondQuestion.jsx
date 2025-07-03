import {
  Box,
  Flex,
  FormLabel,
  Image,
  Progress,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { CustomBtn } from "../../component/CustomBtn";
import { _COLORS } from "../../constants/colors";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getQuestion } from "./service/second";
import FullPageLoader from "../../component/FullPageLoader";
import questionImg from "../../assets/questionImg.png";
import { useNavigate } from "react-router-dom";
import { getLocalStorageItem } from "../../utils/localStorage";
import { APP_CONSTANTS } from "../../constants/app";
import { createExperince } from "../firstQuestion/service";

const SecondQuestion = () => {
  const navigate = useNavigate();
  const userAccount = getLocalStorageItem(APP_CONSTANTS.accountType);
  const id = userAccount?._id;
  const queryClient = useQueryClient();

  const [formValue, setFormValues] = useState({
    primarySkills: "",
    interest: "",
    paymentType: "",
  });

  const {
    isLoading,
    isError,
    data,
    error,
    refetch: fetchTasks,
  } = useQuery({
    queryKey: ["question"],
    queryFn: () => getQuestion("primarySkill"),
  });
  console.log(data, "question");
  const skillResult = data?.data;
  const skilled = skillResult?.slice(0, 6);

  const { data: interestData } = useQuery({
    queryKey: ["question"],
    queryFn: () => getQuestion("interest"),
  });
  console.log("INTEREST", interestData);

  const { data: paymentData } = useQuery({
    queryKey: ["question"],
    queryFn: () => getQuestion("payment"),
  });
  console.log("PAYMENT", paymentData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const { mutate: sendExperience, isPending: isUpdateMutating } = useMutation({
    mutationFn: (payload) => createExperince(payload),
    mutationKey: ["question"],
    onSuccess: (data) => {
      navigate("/third-question");
      console.log("data", data);
      queryClient.invalidateQueries({ queryKey: ["question"] });
    },
    onError: (error) => {
      console.error("Update Profile Mutation error", error);
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id: id,
      ...formValue,
    };

    sendExperience(payload);
    console.log(payload, "ry/");
  };

  // const { isLoading, isError, data, error, refetch: fetchTasks, } = useQuery({
  //   queryKey: ["question"],
  //   queryFn:()=>getQuestion("primarySkill"),
  // });

  // const handleSubmit=(e)=>{
  //   e.preventDefault()
  //   console.log(selectedSkillId,"TYES")

  // }

  return isLoading ? (
    <FullPageLoader />
  ) : (
    <Box h={"100vh"}  bg={"#000"} color={"#fff"}>
      <Flex justify={"space-between"} flexDir={["column","column","column","row"]} gap={["20px","20px","20px","50px"]}>
        <Box p={["10px 30px","10px 30px","10px 30px","10px 50px"]} flex={1}>
          <Image src={logo} h={"50px"} />
          <Box my="50px">
            <Text pb={"30px"}>2/3</Text>
            <Text fontSize={"30px"}>
              What best describes your primary skill and service?
            </Text>
          </Box>
          <Box>
            <Box>
              <FormLabel>Choose a skill</FormLabel>
              {/* <Select placeholder="Select option" color={"gray.500"}>
              <option value="product" color="black">Product Designer</option>
              <option value="backend">Backend Engineer</option>
              <option value="frontend">Frontend Engineer</option>
            </Select>   */}
              <Select
                focusBorderColor={_COLORS?.brand}
                color={_COLORS?.brand}
                name="primarySkills"
                value={formValue?.primarySkills}
                // onChange={handleChange}
                onChange={handleChange}
                placeholder="Enter Skill"
              >
                {skilled?.map((skil) => (
                  <option value={skil?._id}>{skil.skill}</option>
                ))}
              </Select>
            </Box>

            <Box my="30px">
              <FormLabel>What type of work are you interested in?</FormLabel>
              <Select
                focusBorderColor={_COLORS?.brand}
                color={_COLORS?.brand}
                name="interest"
                value={formValue?.interest}
                // onChange={handleChange}
                onChange={handleChange}
                placeholder="Enter Interest"
              >
                {interestData?.data?.map((int) => (
                  <option value={int?._id}>{int?.interest}</option>
                ))}
              </Select>
            </Box>
            <Box>
              <FormLabel>How would you like to get paid?</FormLabel>
              <Select
                focusBorderColor={_COLORS?.brand}
                color={_COLORS?.brand}
                name="paymentType"
                value={formValue?.paymentType}
                // onChange={handleChange}
                onChange={handleChange}
                placeholder="Enter Payment Type"
              >
                {paymentData?.data?.map((pay) => (
                  <option value={pay?._id}>{pay?.paymentType}</option>
                ))}
              </Select>
            </Box>
          </Box>
          <Flex mt={"70px"} align={"center"} justifyContent={"space-between"}>
            <Box width={"150px"}>
              <Progress value={70} size="xs" colorScheme={"red"} />
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
                width={"100px"}
                loading={isUpdateMutating}
                disabled={
                  !formValue?.primarySkills ||
                  !formValue?.interest ||
                  !formValue?.paymentType
                }
                handleClick={handleSubmit}
              />
            </Flex>
          </Flex>
        </Box>

        <Box flex={1}>
          <Image src={questionImg} h={["70vh","70vh","70vh","100vh"]} w={"full"} />
        </Box>
      </Flex>
    </Box>
  );
};

export default SecondQuestion;
