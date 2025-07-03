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
// import { getQuestion } from "./service/second";
import FullPageLoader from "../../component/FullPageLoader";
import clientImg from "../../assets/clientImg.png";
import { useNavigate } from "react-router-dom";
import { getClientQuestion } from "./service";
import { createExperince } from "../firstQuestion/service";
import { getLocalStorageItem } from "../../utils/localStorage";
import { APP_CONSTANTS } from "../../constants/app";

const ClientSecondQuestion = () => {
  const navigate = useNavigate();
  const userAccount = getLocalStorageItem(APP_CONSTANTS.accountType);
  const id = userAccount?._id;
  const queryClient = useQueryClient();
  const [formValue, setFormValues] = useState({
    typeOfProject: "",
    workPreference: "",
    budget: "",
  });
  const {
    isLoading,
    isError,
    data,
    error,
    refetch: fetchTasks,
  } = useQuery({
    queryKey: ["client-question"],
    queryFn: () => getClientQuestion("typeOfProject"),
  });
  const projectType = data?.data;
  console.log(projectType, "client-question");

  const { data: arrangementData } = useQuery({
    queryKey: ["preference"],
    queryFn: () => getClientQuestion("workPreference"),
  });
  console.log("PREFERENCE", arrangementData);

  const { data: budgetData } = useQuery({
    queryKey: ["budget"],
    queryFn: () => getClientQuestion("budget"),
  });
  console.log("BUDGET", budgetData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const { mutate: sendClientQuestion, isPending: isUpdateMutating } =
    useMutation({
      mutationFn: (payload) => createExperince(payload),
      mutationKey: ["question"],
      onSuccess: (data) => {
        console.log("data", data);
        queryClient.invalidateQueries({ queryKey: ["question"] });
        navigate("/client-third");
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

    sendClientQuestion(payload);
    console.log(payload, "ry/");
  };

  return isLoading ? (
    <FullPageLoader />
  ) : (
    <Box h={"100vh"}  bg={"#000"} color={"#fff"}>
      <Flex justify={"space-between"} flexDir={["column","column","column","row"]} gap={["15px","20px","20px","50px"]}>
        <Box p={["10px 30px","10px 30px","10px 30px","10px 50px"]} flex={1}>
          <Image src={logo} h={"50px"} />
          <Box my="50px">
            <Text pb={"30px"}>1/2</Text>
            <Text fontSize={"30px"} fontWeight={"bold"}>
              Let's know you a little bit more
            </Text>
          </Box>
          <Box>
            <Box>
              <FormLabel>
                What type of project are you looking to hire for
              </FormLabel>
              <Select
                focusBorderColor={_COLORS?.brand}
                color={_COLORS?.brand}
                name="typeOfProject"
                value={formValue.typeOfProject}
                // onChange={handleChange}
                onChange={handleChange}
                placeholder="Select Project Type"
              >
                {projectType?.map((project) => (
                  <option value={project?._id}>{project?.typeOfProject}</option>
                ))}
              </Select>
            </Box>

            <Box my="30px">
              <FormLabel>
                What's your preferred working arrangement with freelancers?
              </FormLabel>
              <Select
                focusBorderColor={_COLORS?.brand}
                color={_COLORS?.brand}
                name="workPreference"
                value={formValue.workPreference}
                // onChange={handleChange}
                onChange={handleChange}
                placeholder="Select a suitable arrangement"
              >
                {arrangementData?.data?.map((arr) => (
                  <option value={arr?._id}>{arr?.workPreference}</option>
                ))}
              </Select>
            </Box>
            <Box>
              <FormLabel>
                What's your estimated budget for your project?
              </FormLabel>
              <Select
                focusBorderColor={_COLORS?.brand}
                color={_COLORS?.brand}
                name="budget"
                value={formValue.budget}
                // onChange={handleChange}
                onChange={handleChange}
                placeholder="Select a Budget"
              >
                {budgetData?.data?.map((budget) => (
                  <option value={budget?._id}>{budget?.budget}</option>
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
                loading={isUpdateMutating}
                disabled={
                  !formValue?.budget ||
                  !formValue?.typeOfProject ||
                  !formValue?.workPreference
                }
                bg={_COLORS?.brand}
                width={"100px"}
                handleClick={handleSubmit}
                // handleClick={() => {
                //   navigate("/client-third");
                // }}
              />
            </Flex>
          </Flex>
        </Box>

        <Box flex={1}>
          <Image src={clientImg} h={["70vh","70vh","70vh","100vh"]} w={"full"} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ClientSecondQuestion;
