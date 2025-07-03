import { Box, Center, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { CustomBtn } from "../../component/CustomBtn";
import { useNavigate } from "react-router-dom";
import getStarted from "../../assets/getStarted.png";
import clientWelcome from "../../assets/clientWelcome.png";
import { APP_CONSTANTS } from "../../constants/app";
import { getLocalStorageItem } from "../../utils/localStorage";
import FirstQuestionClient from "../clientFirstQuestion/FirstQuestionClient";


const Welcome = () => {
  const navigate = useNavigate();
  const userAccount = getLocalStorageItem(APP_CONSTANTS.accountType);
  console.log(userAccount, "omo");

  return (
    <Box
      h={"100vh"}
      // overflow={"hidden"}
      bg={"black"}
      color={"#fff"}
      w={"100%"}
      p={"10px 100px"}
    >
      {/* <Flex justify={"space-between"} flexDir={"row"} alignItems={"center"}>
        <Box>
          <Image src={logo} h={"50px"} />
        </Box>

        <Box>
          <FaRegCircleUser size={30} />
        </Box>
      </Flex> */}

      {userAccount?.accountType === "freelancer" ? (
        <Flex justifyContent={"space-between"} align={"center"} width={"100%"}>
          <Box maxW={"700px"}>
            <Text fontSize={"30px"} py="70px">
              Welcome {userAccount?.firstName + " " + userAccount?.lastName},
              Ready for bigger opportunities?
            </Text>

            <Box maxW={"500px"}>
              <Flex align={"center"} gap={"30px"}>
                <FaUser />
                <Text>
                  Answer a few quick questions to personalize your experience
                  and start building you profile effortlessly.
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
                  Explore open opportunities or showcase your services for
                  clients to discover and hire
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
                  Receive secure payment with confidence, knowing we're here to
                  support you
                </Text>
              </Flex>
              <Box my="20px">
                <Divider />
              </Box>
            </Box>
            <Box mt="50px">
              <CustomBtn
                text={"Let's Get You Started"}
                width={"full"}
                handleClick={() => {
                  navigate("/first-question");
                }}
              />
            </Box>
          </Box>

          <Box mt={"100px"}>
            <Box p={"30px"} border={"1px solid #BBF6FF"} borderRadius={"10px"}>
              <Image src={getStarted} h={"350px"} />
              <Box mt="30px">
                <Text fontWeight={"bold"} fontSize={"20px"}>
                  Why Join Teevill?
                </Text>
                <Box mt={"20px"}>
                  <Text>
                    ✅ Connect with industry experts and professionals
                  </Text>
                  <Text>
                    ✅ Attend exclusive virtual events and networking sessions
                  </Text>
                  <Text>✅ Access valuable career development resources</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      ) : userAccount?.accountType==="client" ?
      (
        <Flex justifyContent={"space-between"} align={"center"} width={"100%"}>
          <Box maxW={"600px"}>
            <Text fontSize={"30px"} pt="70px" pb={"20px"} fontWeight={700}>
              Welcome {userAccount?.firstName + " " + userAccount?.lastName},
              Ready to get your project started?
            </Text>
            <Text pb={"50px"} fontSize={"20px"} fontWeight={100}>We would like to know you better as it helps the system personalise your account</Text>

            <Box>
              <FirstQuestionClient />
            </Box>

           
            
          </Box>

          <Box mt={"100px"}>
            <Box p={"30px"} border={"1px solid #BBF6FF"} borderRadius={"10px"}>
              <Image src={clientWelcome} h={"350px"} />
              <Box mt="30px">
                <Text fontWeight={"bold"} fontSize={"20px"}>
                  Why Join Teevill?
                </Text>
                <Box mt={"20px"}>
                  <Text>
                    ✅ Connect with industry experts and professionals
                  </Text>
                  <Text>
                    ✅ Attend exclusive virtual events and networking sessions
                  </Text>
                  <Text>✅ Access valuable career development resources</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      ) : "YOU NEED TO REGISTER AS A CLIENT OR A FREELANCER"
      
      }
    </Box>
  );
};

export default Welcome;
