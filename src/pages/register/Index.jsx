import {
  Box,
  Button,
  Divider,
  Flex,
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
import { registerVendor } from "./service/register";

const Register = () => {
  const navigate = useNavigate();
  const initialValues = {
    fullName:"",
    phoneNumber:"",
    email: "",
    physicalAddress:"",
    password: "",
    confirmPassword:""
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
    await registerVendor(payload, setLoading);
  };
  return (
    <Flex h={"100vh"} justify={"space-between"} overflow={"hidden"}>
      <Box>
        <Image src={loginBg} h={"auto"} />
      </Box>
      <Flex
        justifyContent="center"
        alignItems={"center"}
        h={"100vh"}
        margin={"0 auto"}
        flexDirection={"column"}
      >
        <Box>
          <Image src={loogo} height={"100px"} />
        </Box>
        <Box mt="10px">
          <Text fontSize={"40px"} fontWeight={"bold"}>
            Sign Up
          </Text>
          <Box my="10px">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <RiAccountPinCircleLine color="gray" />
              </InputLeftElement>
              <Input
                focusBorderColor="#65129A"
                name="fullName"
                type="text"
                placeholder="fullname"
                value={formValues?.fullName}
                onChange={handleChange}
              />
            </InputGroup>
          </Box>
          <Box my="10px">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdOutlineMailOutline color="gray" />
              </InputLeftElement>
              <Input
                focusBorderColor="#65129A"
                name="email"
                type="email"
                placeholder="email"
                value={formValues?.email}
                onChange={handleChange}
              />
            </InputGroup>
          </Box>
          <Box my="10px">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <BsTelephone color="gray" />
              </InputLeftElement>
              <Input
                name="phoneNumber"
                focusBorderColor="#65129A"
                placeholder="phone"
                type="number"
                value={formValues?.phoneNumber}
                onChange={handleChange}
              />
            </InputGroup>
          </Box>

          <Box my="10px">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PiAddressBookThin color="gray" />
              </InputLeftElement>
              <Input
                name="physicalAddress"
                focusBorderColor="#65129A"
                type="physicalAddress"
                placeholder="physical address"
                value={formValues?.physicalAddress}
                onChange={handleChange}
              />
            </InputGroup>
          </Box>
          <Box my="10px">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <IoKeyOutline color="gray" />
              </InputLeftElement>
              <Input
                name="password"
                focusBorderColor="#65129A"
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
          <Box my="10px">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <IoKeyOutline color="gray" />
              </InputLeftElement>
              <Input
                focusBorderColor="#65129A"
                name="confirmPassword"
                w={"500px"}
                placeholder="confirm password"
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

          <Flex mt={"10px"}>
            <CustomBtn
              handleClick={handleRegister}
              loading={loading}
              text={"Sign Up"}
              width={"full"}
              bg={"#65129A"}
            />
          </Flex>
         
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"30px"}
            my={"20px"}
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
          <Flex justifyContent={"flex-end"} mt="15px">
            <Text
              color={"#7B5DD6"}
              cursor={"pointer"}
              fontWeight={600}
              onClick={() => {
                navigate("/login");
              }}
            >
              Already have an Account? Login
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Register;
