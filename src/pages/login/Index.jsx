import React, { useState } from "react";
import loogo from "../../assets/loogo.png";
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
import loginBg from "../../assets/loginBg.png";
import FormInput from "../../component/FormInput";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { CustomBtn } from "../../component/CustomBtn";
import { GiMailShirt } from "react-icons/gi";
import useForm from "../../hooks/useForm";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { login } from "./service/login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate()
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
    <Flex h={"100vh"} justify={"space-between"} overflow={"hidden"}>
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
        <Box mt="30px">
          <Text fontSize={"40px"} fontWeight={"bold"}>
            Log In
          </Text>
          <Box my="30px">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdOutlineMailOutline color="gray" />
              </InputLeftElement>
              <Input
               name="email"
               type="email"
               value={formValues?.email}
               onChange={handleChange}
              />
            </InputGroup>
          </Box>
          <Box my="20px">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <IoKeyOutline color="gray" />
              </InputLeftElement>
              <Input
                name="password"
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
          <Flex mt={"20px"}>
            <CustomBtn handleClick={handleLogin} loading={loading} text={"Login"} width={"full"} bg={"#65129A"} />
          </Flex>
          <Flex justifyContent={"flex-end"} mt="10px">
            <Text color={"#7B5DD6"} fontWeight={600} cursor={"pointer"} >Forgot Password ?</Text>
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
                childComp={<FaFacebook size={30} color="blue"/>}
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
              onClick={()=>{
                navigate("/register")
              }} 
            >
              Don't have an Account? Sign Up
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Box>
        <Image src={loginBg} h={"auto"} />
      </Box>
    </Flex>
  );
};

export default Login;
