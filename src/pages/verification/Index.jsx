import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import FormInput from "../../component/FormInput";
import { CustomBtn } from "../../component/CustomBtn";
import loogo from "../../assets/loogo.png";
import VCimage from "../../assets/VCimage.png";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useForm from "../../hooks/useForm";
import { resendOTP, sendOtp } from "./services/Index";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png"
import { _COLORS } from "../../constants/colors";

const VerifyCode = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const email = location?.state;
  // console.log(datas,"ppeoe")
  const { email } = useParams();
  console.log(email,"oopr")
  const queryClient = useQueryClient();
  const [verificationCode, setVerificationCode] = useState(["", "", "", "","",""]);
  const inputRefs = useRef([]);

  // const initialValues = {
  //   otp: verificationCode,
  //   email: email,
  // };
  // const {  formValues } = useForm(initialValues);
  const handleChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index] = value;
      setVerificationCode(newVerificationCode);
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !verificationCode[index]) {
      inputRefs.current[index - 1].focus();
    } else if (e.key === "Delete" && index < 5 && !verificationCode[index]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const isVerificationCodeComplete = verificationCode.every(
    (code) => code !== ""
  );

  const { mutate: sendEmail, isPending: isUpdateMutating } = useMutation({
    mutationFn: sendOtp,
    mutationKey: ["otp"],
    onSuccess: (data) => {
      navigate("/congratulation");
      console.log("data");
      queryClient.invalidateQueries({ queryKey: ["otp"] });
    },
    onError: (error) => {
      console.error("Update Profile Mutation error", error);
    },
  });
  const handleSubmit = async () => {
    const otpCode = verificationCode.join(""); // Join the array to create a single string
    const payload = {
      otp: otpCode, // Send the code as a string
      email: email, // Include the email if required
    };
    sendEmail(payload);
    console.log(payload, "ry/");
  };
  const handleResend = async () => {
    setLoading(true);
    const payload = { email};
    await resendOTP(payload);
  };
  return (
    <Flex
      h={"100vh"}
      justify={"space-between"}
      flexDir={["column","column","column","row"]}
      overflow={"hidden"}
      bg={"#000"}
      color={"#fff"}
    >
      {/* <Box color={"#313131"} flex={1}>
      <Box><Image src={loogo} height={"70px"}/></Box>
      <Flex my={"30px"} align={"center"} gap="8px" cursor={"pointer"} onClick={()=>{
        navigate("/login")
      }}>
        <IoChevronBackSharp size={25} />
        <Text fontWeight={500} fontSize={"20px"}>
          Back to Login
        </Text>
      </Flex>
      <Text fontSize={"45px"} fontWeight={500}>
        Verify Code
      </Text>
      <Text fontSize={"20px"} maxW={"500px"} py={"20px"}>
        An authentication code has been sent to {email}
      </Text>
      <FormInput label={"Enter Code"} type={"text"} name={"otp"} value={formValues?.otp} handleChange={handleChange}/>
      <Flex py="10px">
        <Text fontWeight={500}>Didn't receive any code? <span style={{color:"#FF8682", cursor:"pointer"}}>Resend</span></Text>
      </Flex>
      <Box mt={"30px"}>
        <CustomBtn text={"Verify"} loading={isUpdateMutating} width={"full"} handleClick={handleSubmit} disabled={!formValues?.otp} />  
      </Box>
      
    </Box> */}
      <Box flex={1}>
         <Box  px={"50px"} mt="20px">
                 <Image src={logo} h={"50px"}/>
          </Box>
        <Box px={"50px"} py={"50px"}>
          <Text fontSize={"30px"} fontWeight={"bold"} pb={"20px"}>
            Email Verification
          </Text>
          <Text fontSize={"20px"} fontWeight={400} maxW={"700px"}>
           We have sent a verification code to your email. Please enter the code below to confirm your email address and proceed
          </Text>


          <Flex align="center" justify="center" my={20}>
            {verificationCode.map((value, index) => (
              <Input
                key={index}
                focusBorderColor={_COLORS?.brand}
                ref={(el) => (inputRefs.current[index] = el)}
                type="password"
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                width="80px"
                height="80px"
                textAlign="center"
                marginX="20px"
                fontWeight="bold"
                color={_COLORS?.brand}
                fontSize="24px"
                border="3px solid #ccc"
              />
            ))}
          </Flex>
          <Flex>
            <CustomBtn text={"Verify Email"} width={"full"}  loading={isUpdateMutating}  handleClick={handleSubmit}/>
          </Flex>

          <Flex mt="50px" justify={"center"} fontWeight={500} gap={"10px"} fontSize={"20px"}>
            Didn&apos;t receive any code?{" "}
            <Text
              cursor={"pointer"}
              textDecor={"underline"}
              onClick={handleResend}
              color={_COLORS?.brand}
            >
              Resend Code
            </Text>{" "}
          </Flex>


        </Box>
      </Box>

      <Box flex={1}>
        <Image src={VCimage} w={"full"} h={"100vh"} />
      </Box>
    </Flex>
  );
};

export default VerifyCode;
