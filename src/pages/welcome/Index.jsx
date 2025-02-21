import { Box, Center, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.png";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { CustomBtn } from "../../component/CustomBtn";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate()
  return (
    <Box
      h={"100vh"}
      overflow={"hidden"}
      bg={"black"}
      color={"#fff"}
      p={"10px 100px"}
    >
      <Flex justify={"space-between"} flexDir={"row"} alignItems={"center"}>
        <Box>
          <Image src={logo} h={"50px"} />
        </Box>

        <Box>
          <FaRegCircleUser size={30} />
        </Box>
      </Flex>
      <Flex align={"center"} justifyContent={"space-between"}>
        <Box flex={1} maxW={"500px"} >
          <Text fontSize={"30px"} py="70px">
            Welcome Maxwell Davide, Ready for bigger opportunities?
          </Text>
          <Box maxW={"500px"}>
          <Flex align={"center"} gap={"30px"}>
            <FaUser />
            <Text>
              Answer a few quick questions to personalize your experience and
              start building you profile effortlessly.
            </Text>
          </Flex>
          <Box my="20px">
            <Divider />
          </Box>
          </Box>

          <Box maxW={"500px"}>
          <Flex align={"center"} gap={"30px"}>
            <BsBagFill />
            <Text>
              Explore open opportunities or showcase your services for clients to discover and hire
            </Text>
          </Flex>
          <Box my="20px">
            <Divider />
          </Box>
          </Box>



          <Box maxW={"500px"}>
          <Flex align={"center"} gap={"30px"}>
            <FaRegMoneyBill1 />
            <Text>
              Receive secure payment with confidence, knowing we're here to support you
            </Text>
          </Flex>
          <Box my="20px">
            <Divider />
          </Box>
          </Box>
          <Box mt="50px">
          <CustomBtn text={"Let's Get You Started"} width={"full"} handleClick={()=>{
            navigate("/first-question")
          }}/>
          </Box>
          
        </Box>


        <Box flex={1}></Box>
      </Flex>
    </Box>
  );
};

export default Welcome;
