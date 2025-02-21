import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import loogo from "../../assets/loogo.png";
import { IoChevronBackSharp } from "react-icons/io5";
import FormInput from "../../component/FormInput";
import { CustomBtn } from "../../component/CustomBtn";
import FPimage from "../../assets/FPimage.png";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { forgotPassword } from "./sevices/Index";
import useForm from "../../hooks/useForm";

const ForgotPassord = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  const initialValues = {
    email: "",
  };
 const { handleChange, formValues } = useForm(initialValues);

  const { mutate: sendEmail, isPending: isUpdateMutating } = useMutation({
    mutationFn: forgotPassword,
    mutationKey: ["password"],
    onSuccess: (data) => {
      navigate("/verify-code", { state: formValues?.email})
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
    sendEmail(payload);
    console.log(payload, "ry/");
  };
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
      gap="100px"
    >
      <Box color={"#313131"} flex={1} ml={"150px"}>
        <Box>
          <Image src={loogo} height={"70px"} />
        </Box>
        <Flex
          my={"30px"}
          align={"center"}
          gap="8px"
          cursor={"pointer"}
          onClick={() => {
            navigate("/login");
          }}
        >
          <IoChevronBackSharp size={25} />
          <Text fontWeight={500} fontSize={"20px"}>
            Back to Login
          </Text>
        </Flex>
        <Text fontSize={"45px"} fontWeight={500}>
          Forgot Your Password ?
        </Text>
        <Text fontSize={"20px"} maxW={"500px"} py={"20px"}>
          Don&apos;t worry, happens to all of us. Enter your email below to
          recover your password
        </Text>
        <FormInput label={"Email"} type={"email"} name={"email"} value={formValues?.email} handleChange={handleChange} />
        <Box mt={"30px"}>
          <CustomBtn
            text={"Submit"}
            width={"full"}
            handleClick={handleSubmit}
            loading={isUpdateMutating}
          />
        </Box>
      </Box>

      <Box flex={1}>
        <Image src={FPimage} w={"full"} h={"100vh"} />
      </Box>
    </Flex>
  );
};

export default ForgotPassord;
