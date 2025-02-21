import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import loogo from "../../assets/loogo.png";
import balloon from "../../assets/balloon.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { CustomBtn } from "../../component/CustomBtn";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { signUpVendor } from "./service/signUp";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { errorNotifier, successNotifier } from "../../component/notifier";

const SignUp = () => {
  const navigate = useNavigate();
  const initialValues = {
    fullName: "",
    phoneNumber: "",
    email: "",
    physicalAddress: "",
    password: "",
    confirmPassword: "",
  };

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const [show1, setShow1] = useState(false);
  const handleClick1 = () => {
    setShow1(!show1);
  };
  const { handleChange, formValues } = useForm(initialValues);
  const handleRegister = async (e) => {
    if (formValues?.password !== formValues?.confirmPassword) {
      errorNotifier("Ensure your passwords are the same");
    } else {
      e.preventDefault();
      setLoading(true);
      const payload = { ...formValues };
      await signUpVendor(payload, setLoading);
    }
  };

  return (
    <Flex h={"100vh"} justify={"space-between"} overflow={"hidden"}>
      <Box flex={1}>
        <Image src={balloon} h={"full"} />
      </Box>

      <Box flex={1}>
        <Flex
          justifyContent="center"
          alignItems={"center"}
          //   h={"100vh"}
          margin={"0px auto"}
          flexDirection={"column"}
        >
          <Box>
            <Image src={loogo} height={"70px"} />
          </Box>
          <Box mt="10px">
            <Text fontSize={"40px"} fontWeight={"bold"}>
              Sign Up
            </Text>
            <Box my="20px">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaUser color="gray" />
                </InputLeftElement>
                <Input
                  name="fullName"
                  type="text"
                  placeholder="your full name"
                  value={formValues?.fullName}
                  onChange={handleChange}
                />
              </InputGroup>
            </Box>
            <Box my="20px">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <MdOutlineMailOutline color="gray" />
                </InputLeftElement>
                <Input
                  name="email"
                  type="email"
                  placeholder="your email"
                  value={formValues?.email}
                  onChange={handleChange}
                />
              </InputGroup>
            </Box>
            <Box my="20px">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaAddressCard color="gray" />
                </InputLeftElement>
                <Input
                  name="physicalAddress"
                  type="text"
                  placeholder="your address"
                  value={formValues?.physicalAddress}
                  onChange={handleChange}
                />
              </InputGroup>
            </Box>
            <Box my="20px">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaPhone color="gray" />
                </InputLeftElement>
                <Input
                  name="phoneNumber"
                  type="text"
                  placeholder="your phone number"
                  value={formValues?.phoneNumber}
                  onChange={handleChange}
                />
              </InputGroup>
            </Box>
            <Box my="20px">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaLock color="gray" />
                </InputLeftElement>
                <Input
                  name="password"
                  placeholder="enter password"
                  w={"500px"}
                  type={show ? "text" : "password"}
                  value={formValues?.password}
                  onChange={handleChange}
                />
                <InputRightElement>
                  <Button bg={"none"} size={"40px"} onClick={handleClick}>
                    {show ? (
                      <IoIosEyeOff color={"#666666"} />
                    ) : (
                      <IoIosEye color={"#666666"} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
            <Box my="20px">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaLock color="gray" />
                </InputLeftElement>
                <Input
                  name="confirmPassword"
                  placeholder="confirm password"
                  w={"500px"}
                  type={show1 ? "text" : "password"}
                  value={formValues?.confirmPassword}
                  onChange={handleChange}
                />
                <InputRightElement>
                  <Button bg={"none"} size={"40px"} onClick={handleClick1}>
                    {show1 ? (
                      <IoIosEyeOff color={"#666666"} />
                    ) : (
                      <IoIosEye color={"#666666"} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>

            <Flex mt={"20px"}>
              <CustomBtn
                handleClick={handleRegister}
                loading={loading}
                text={"sign up"}
                width={"full"}
                bg={"#65129A"}
              />
            </Flex>
            <Flex justifyContent={"space-between"} mt="10px">
              <Link to={"/login"}>
                <Text color={"#7B5DD6"} fontWeight={600} cursor={"pointer"}>
                  Already have an account? Login
                </Text>
              </Link>
            </Flex>

            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"30px"}
              my={"10px"}
            >
              <Box h={"2px"} border={"1px solid #E4E6EC"} w={"full"}></Box>
              <Text color={"#969AB8"}>or</Text>
              <Box h={"2px"} border={"1px solid #E4E6EC"} w={"full"}></Box>
            </Flex>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"30px"}
            >
              <Box width={"full"}>
                <CustomBtn
                  width={"full"}
                  fontWeight={"bold"}
                  color={"#000"}
                  text={"Google"}
                  childComp={<FcGoogle size={30} />}
                  bg={"none"}
                  border={"1px solid #E0E2E9"}
                />
              </Box>

              <Box width={"full"}>
                <CustomBtn
                  width={"full"}
                  fontWeight={700}
                  color={"#000"}
                  text={"Facebook"}
                  childComp={<FaFacebook size={30} color="blue" />}
                  bg={"none"}
                  border={"1px solid #E0E2E9"}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SignUp;
