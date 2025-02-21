import React, { useState } from "react";
import loogo from "../../assets/loogo.png";
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
import loginBg from "../../assets/loginBg.png";
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
import { FaFacebook } from "react-icons/fa";
import logo from "../../assets/logo.png"
import { _COLORS } from "../../constants/colors";

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
      h={"100vh"}
      justify={"space-between"}
      overflow={"hidden"}
      bg={"#000"}
      color={"#fff"}
    >
      <Box flex={1}>
        <Box px={"50px"} mt="20px">
          <Image src={logo} h={"50px"} />
        </Box>
        <Box px={"50px"} py={"50px"}>
          <Text fontSize={"30px"} fontWeight={"bold"} pb={"20px"}>
            Welcome Back To TeeVill !
          </Text>
          <Text fontSize={"20px"} fontWeight={400} maxW={"700px"}>
            Kindly fill out your details and proceed to your dashboard
          </Text>
          <Box mt="50px">
            <Flex align={"center"} gap={"50px"} >
              <Box flex={1}>
              <FormInput
                label={"Email Address"}
                value={formValues?.email}
                handleChange={handleChange}
                name={"email"}
              />
              </Box>
              <Box  flex={1}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    name="password"
                    focusBorderColor="#65129A"
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
            <Flex justify={"flex-end"} gap={"50px"} mt="20px">
              <Text fontWeight={500} color={_COLORS?.brand} cursor={"pointer"}
              onClick={() => {
                navigate("/reset-password");
              }}
              >Forgotten Password ?</Text>
            </Flex>
            <Flex my={"30px"}>
              <CustomBtn
                text={"Proceed To Dashboard"}
                width={"full"}
                handleClick={handleLogin}
                loading={loading}
              />
            </Flex>
            <Flex my="20px" align={"center"} gap={"30px"}>
              <Box h={"2px"} bg={"white"} w={"full"}></Box>
              <Box>
                <Text fontWeight={500}>Or</Text>
              </Box>
              <Box h={"2px"} bg={"white"} w={"full"}></Box>
            </Flex>
            <Flex align={"center"} gap={"50px"}>
              <CustomBtn text={"Continue with Google"} width={"full"} bg={"none"} border={"1px solid #fff"}/>
              <CustomBtn text={"Continue with Apple"} width={"full"} bg={"none"} border={"1px solid #fff"}/>
            </Flex>
            <Flex justifyContent={"center"} mt="30px" gap={"10px"}>
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
      </Box>

      <Box flex={1}>
        <Image src={loginBg} h={"auto"} />
      </Box>
    </Flex>
  );
};

export default Login;
