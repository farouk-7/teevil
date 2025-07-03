import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import FormInput from "../../component/FormInput";
import { CustomBtn } from "../../component/CustomBtn";
import useForm from "../../hooks/useForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetPassword } from "./services/Index";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { _COLORS } from "../../constants/colors";
import loginBg from "../../assets/loginBg.png";
import { GoArrowLeft } from "react-icons/go";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location?.state;
  console.log(data, "opeoluwa");
  const queryClient = useQueryClient();
  const initialValues = {
    email: "",
  };
  const { handleChange, formValues } = useForm(initialValues);

  const { mutate: sendReset, isPending: isUpdateMutating } = useMutation({
    mutationFn: resetPassword,
    mutationKey: ["password"],
    onSuccess: (data) => {
      navigate("/login");
      console.log("data", data);
      queryClient.invalidateQueries({ queryKey: ["password"] });
    },
    onError: (error) => {
      console.error("Update Profile Mutation error", error);
    },
  });
  const handleSubmit = async () => {
    const payload = {
      ...formValues,
    };
    sendReset(payload);
    console.log(payload, "ry/");
  };

  return (
    <Flex
      h={"100vh"}
      flexDir={["column", "column", "column", "row"]}
      justify={"space-between"}
      // overflow={"hidden"}
      bg={"#000"}
      color={"#fff"}
    >
      <Box flex={1} px={["20px", "20px", "20px", "100px"]}>
        <Box mt="20px">
          <Image src={logo} h={"50px"} />
        </Box>
        <Flex align={"center"} gap={"20px"} cursor={"pointer"}  onClick={() => {
              navigate("/login");
            }}> 
          <GoArrowLeft size={25}/>
          <Text
            py={"30px"}
            cursor={"pointer"}
            fontWeight={"bold"}
            fontSize={"24px"}
           
          >
            Back To Login
          </Text>
        </Flex>
        <Box py={["20px", "20px", "20px", "50px"]}>
          <Text fontSize={"30px"} fontWeight={"bold"} pb={"20px"}>
            Forgotten Password
          </Text>
          <Text fontSize={"20px"} fontWeight={400} maxW={"700px"}>
            Kindly provide the email relating with this account, a dummy
            password would be sent to that email. Use the password in log in
          </Text>
          <Box mt="50px">
            <Flex align={"center"} gap={"50px"}>
              <Box flex={1}>
                <FormInput
                  label={"Email Address"}
                  value={formValues?.email}
                  handleChange={handleChange}
                  name={"email"}
                />
              </Box>
            </Flex>

            <Flex mt={"70px"}>
              <CustomBtn
                text={"Proceed"}
                width={"full"}
                handleClick={handleSubmit}
                loading={isUpdateMutating}
                disabled={!formValues?.email}
              />
            </Flex>
          </Box>
        </Box>
      </Box>

      <Box flex={1}>
        <Image src={loginBg} w={"full"} h={["70vh", "70vh", "70vh", "100vh"]} />
      </Box>
    </Flex>
  );
};

export default ResetPassword;
