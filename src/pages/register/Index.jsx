import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { CustomBtn } from "../../component/CustomBtn";
import loginBg from "../../assets/loginBg.png";
import loogo from "../../assets/loogo.png";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { PiAddressBookThin } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { registerUser} from "./service/register";
import FormInput from "../../component/FormInput";
import logo from "../../assets/logo.png"
import { _COLORS } from "../../constants/colors";

const Register = () => {
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName:"",
    phone: "",
    email: "",
    password: "",
    // confirmPassword: "",
  };

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [show1, setShow1] = useState(false);
  const handleClick1 = () => setShow1(!show1);

  const { handleChange, formValues } = useForm(initialValues);
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = { ...formValues };
    const email = formValues?.email;
    await registerUser(payload, setLoading, email, navigate);
  };
  return (
    <Flex h={"100vh"} justify={"space-between"} overflow={"hidden"} bg={"black"} color={"#fff"}>
      <Box flex={1}>
        <Box  px={"50px"} mt="20px">
         <Image src={logo} h={"50px"}/>
        </Box>
        <Box px={"50px"} py={"20px"} >
          <Text fontSize={"30px"} fontWeight={"bold"} pb={"10px"}>
            Welcome To TeeVill
          </Text>
          <Text fontSize={"20px"} fontWeight={400} maxW={"700px"}>
            Kindly fill out your details and proceed to the next step. Your
            journey starts here
          </Text>
          <Box mt="20px">
            <Flex align={"center"} gap={"50px"}>
              <FormInput label={"First Name"} value={formValues?.firstName} handleChange={handleChange} name="firstName" />
              <FormInput label={"Last Name"} value={formValues?.lastName} handleChange={handleChange} name="lastName"/>
            </Flex>
            <Flex align={"center"} gap={"50px"} mt="20px">
              <FormInput label={"Email Address"} value={formValues?.email} handleChange={handleChange} name="email"/>
              <FormInput label={"Phone Number"} value={formValues?.phone} handleChange={handleChange} name="phone" />
            </Flex>
            <Flex align={"center"} gap={"50px"} mt="20px">
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
              <Box flex={1}>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    focusBorderColor="#65129A"
                    name="confirmPassword"
                    placeholder="confirm password"
                    type={show1 ? "text" : "password"}
                    value={formValues?.confirmPassword}
                    onChange={handleChange}
                  />
                  <InputRightElement>
                    <Button bg={"none"} size={"40px"} onClick={handleClick1}>
                      {show1 ? (
                        <IoIosEyeOff color={"#666666"} size={20} />
                      ) : (
                        <IoIosEye color={"#666666"} size={20} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Flex>
          </Box>
          <Flex mt={"30px"}>
            <CustomBtn text={"Register Now"} width={"full"} handleClick={handleRegister} loading={loading} />
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
            <CustomBtn text={"Continue with Apple"} width={"full"}  bg={"none"} border={"1px solid #fff"}/>
          </Flex>
          <Flex justifyContent={"center"} mt="20px" gap={"10px"}>
            <Text color={"#fff"} fontWeight={600}>Already have an Account ? </Text>
            <Text
              color={_COLORS?.brand}
              cursor={"pointer"}
              fontWeight={600}
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign In
            </Text>
          </Flex>
        </Box>
      </Box>

      <Box>
        <Image src={loginBg} h={"auto"} />
      </Box>
    </Flex>
  );
};

export default Register;
