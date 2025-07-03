import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
// import loginBg from "../../assets/loginBg.png";
import FormInput from "../../component/FormInput";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { CustomBtn } from "../../component/CustomBtn";
import { GiMailShirt } from "react-icons/gi";
import useForm from "../../hooks/useForm";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { login } from "./service/login";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { _COLORS } from "../../constants/colors";
import loginBg from "../../assets/loginBg.png";

const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { handleChange, formValues } = useForm(initialValues);

  const handleLogin = async () => {
    setLoading(true);
    const payload = { ...formValues };
    await login(payload, setLoading);
  };

  return (
    <Flex
      h={"fit-content"}
      justify={["center","center","center","space-between"]}
      // overflow={"hidden"}
      bg={"#000"}
      color={"#fff"}
      // gap={"50px"}
      flexDir={["column", "column", "column", "row"]}
    >
      <Box flex={1} px={["20px","20px","20px","100px"]} >
        <Box mt={["50px","50px","50px","100px"]}>
          <Image src={logo} h={"50px"} />
        </Box>
        <Box py={"30px"}>
          <Text fontSize={"30px"} fontWeight={"bold"} pb={"20px"} textAlign={["center","center","center","start"]}>
            Welcome Back To TeeVill !
          </Text>
          <Text
            fontSize={"20px"}
            fontWeight={400}
            // maxW={"700px"}
            color={"#E9FCFF7D"}
            textAlign={["center","center","center","start"]}
          >
            Kindly fill out your details and proceed to your dashboard
          </Text>

            <Flex flexDir={["column","column","column","row"]}  gap={"30px"} mt={"50px"}>
              <Box w={"full"}>
                <FormInput
                
                  labelColor={"#E9FCFF7D"}
                  label={"Email Address"}
                  border={"1px solid #E9FCFF7D"}
                  value={formValues?.email}
                  focusBorderColor={_COLORS?.brand}
                  handleChange={handleChange}
                  name={"email"}
                />
              </Box>
              <Box  w={"full"}>
                <FormLabel color={"#E9FCFF7D"}>Password</FormLabel>
                <InputGroup>
                  <Input
                   
                    name="password"
                    border={"1px solid #E9FCFF7D"}
                    focusBorderColor={_COLORS?.brand}
                    placeholder="enter password"
                    type={show ? "text" : "password"}
                    value={formValues?.password}
                    onChange={handleChange}
                  />
                  <InputRightElement>
                    <Button bg={"none"} size={"40px"} onClick={handleClick}>
                      {show ? (
                        <IoIosEyeOff color={"#666666"} size={20} />
                      ) : (
                        <IoIosEye color={"#666666"} size={20} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Flex>

            <Flex justify={"flex-end"} gap={"50px"} mt="10px">
              <Text
                fontWeight={500}
                color={_COLORS?.brand}
                cursor={"pointer"}
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgotten Password ?
              </Text>
            </Flex>
            <Flex my={"20px"}>
              <CustomBtn
                text={"Proceed To Dashboard"}
                width={"full"}
                handleClick={handleLogin}
                loading={loading}
                disabled={!formValues?.email || !formValues?.password}
              />
            </Flex>
            <Flex my="20px" align={"center"} gap={"20px"}>
              <Box h={"1px"} bg={"#E9FCFF7D"} w={"full"}></Box>
              <Box>
                <Text fontWeight={500} color={"#E9FCFF7D"}>
                  Or
                </Text>
              </Box>
              <Box h={"1px"} bg={"#E9FCFF7D"} w={"full"}></Box>
            </Flex>
            <Flex align={"center"} flexDir={["column","column","column","row"]} gap={["20px","20px","20px","50px"]}>
              <CustomBtn
                childComp={<FcGoogle />}
                text={"Continue with Google"}
                width={"full"}
                bg={"none"}
                p={"0px 8px"}
                border={"1px solid #E9FCFF7D"}
              />
              <CustomBtn
                childComp={<FaApple />}
                p={"0px 8px"}
                text={"Continue with Apple"}
                width={"full"}
                bg={"none"}
                border={"1px solid  #E9FCFF7D"}
              />
            </Flex>
            <Flex justifyContent={"center"} mt="20px" gap={"10px"}>
              <Text color={"#fff"} fontWeight={600}>
                Don't have an Account yet ?{" "}
              </Text>
              <Text
                color={_COLORS?.brand}
                cursor={"pointer"}
                fontWeight={600}
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register Now
              </Text>
            </Flex>
        
        </Box>
      </Box>



















      <Box flex={1} display={["block"]}>
        <Image
          src={loginBg}
          h={["70vh","70vh","70vh","100vh"]}
          w={"full"}
          
        />
      </Box>
    </Flex>
  );
};

export default Login;
