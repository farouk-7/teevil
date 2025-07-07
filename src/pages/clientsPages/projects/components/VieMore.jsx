import { Avatar, Box, Flex, HStack, Progress, Text } from "@chakra-ui/react";
import React from "react";
import CardHeader from "../../../../component/CardHeader";
import { useLocation } from "react-router-dom";
import { CustomBtn } from "../../../../component/CustomBtn";
import { BsPlus, BsThreeDotsVertical } from "react-icons/bs";
import { _COLORS } from "../../../../constants/colors";

const VieMore = () => {
  const { state } = useLocation();
  console.log(state, "uuu");
  const value = 20;
  return (
    <Box h={"100%"}>
      <CardHeader />
      <Flex mt="50px" align={"center"} justify={"space-between"}>
        <Text color="#fff" fontSize={"25px"} fontWeight={"bold"}>
          {state?.projectTitle}
        </Text>
        <Flex align="center" gap="20px">
          <CustomBtn
            text="Add Section"
            color={"#000"}
            rightIcon={<BsPlus size={20} />}
          />
          <CustomBtn
            text="Add Collaborators"
            color={"#fff"}
            border="1px solid #fff"
            bg={"none"}
            rightIcon={<BsPlus size={20} />}
          />
          {/* <CustomBtn bg={"#3D3D3D"}  rightIcon={<BsThreeDotsVertical color='#fff' size={20}/>}/> */}
          <Box bg="#3D3D3D" p="8px">
            <BsThreeDotsVertical color="#fff" size={20} />
          </Box>
        </Flex>
      </Flex>
      <Flex
        mt="40px"
        bg={"#2C2C2C"}
        px="10px"
        py="15px"
        borderRadius={"10px"}
        justify={"space-between"}
      >
        <Flex align={"flex-end"} gap={"20px"}>
          <Box>
            <Text fontWeight={"bold"} color={"#fff"} pb="10px">
              Project Progress Dashboard
            </Text>

            <Progress
              // colorScheme={"#D39D12"}
              sx={{
                "& > div": {
                  backgroundColor: "#D39D12",
                },
              }}
              size="md"
              value={value}
              bg="#3D3D3D"
              w={"500px"}
              borderRadius="10px"
            />
          </Box>
          <Box color={"#fff"}>
            <Text fontSize={"13px"} color="#ABABAB">
              <i>{value}% completed</i>
            </Text>
          </Box>
        </Flex>

        <Flex color={"#fff"} align={"center"} gap={"20px"}>
          <Box textAlign={"center"}>
            <Text>10</Text>
            <Text color={"#ABABAB"}>Total Task</Text>
          </Box>
          <Box h={"100%"} bg={"#3D3D3D"} w={"1px"}></Box>
          <Box textAlign={"center"}>
            <Text>03</Text>
            <Text color={"#ABABAB"}>In Progress</Text>
          </Box>
          <Box h={"100%"} bg={"#3D3D3D"} w={"1px"}></Box>
          <Box textAlign={"center"}>
            <Text>01</Text>
            <Text color={"#ABABAB"}>Completed</Text>
          </Box>
        </Flex>
      </Flex>
      <Box
        mt="30px"
        bg={"#2C2C2C"}
        w={"fit-content"}
        px="10px"
        py="15px"
        borderRadius={"10px"}
      >
        <Flex align={"center"} gap="50px">
          <Text color={"#fff"}>{state?.projectTitle}</Text>
          <BsPlus size={25} color="#fff" />
        </Flex>
        <Text py="10px" color={"#fff"} fontSize="14px">
          Collaborators
        </Text>
        <Flex
          bg="#3D3D3D"
          px="7px"
          py={"5px"}
          borderRadius={"10px"}
          justify={"space-between"}
          align={"center"}
        >
          <Avatar name={state?.freelancer?.name} size={"sm"} />
          <Flex align={"center"}>
            <Text color={"#fff"}>1</Text>
            <Text color={"#fff"}>+</Text>
          </Flex>
        </Flex>
        <Box mt="20px" color="#fff">
          <Text fontSize={"14px"}>Recently added task</Text>
          <Box
            border="1px solid #9F9F9F"
            borderRadius={"10px"}
            p="5px"
            mt="10px"
            borderStyle={"dashed"}
          >
            <Box bg={"#3D3D3D"} p="10px" borderRadius={"10px"}>
              <Text fontSize={"14px"} fontWeight={"bold"}>Create About Us Page</Text>
              <Flex align={"center"} justify={"space-between"} mt="10px">
                <Text fontSize={"12px"} color="#ABABAB">
                  Assigned To:
                </Text>
                <HStack spacing={1}>
                  <Text fontSize={"12px"}>{state?.freelancer?.name}</Text>
                  <Avatar name={state?.freelancer?.name} size={"xs"} />
                </HStack>
              </Flex>
              <Flex align={"center"} justify={"space-between"} my="10px">
                <Text fontSize={"12px"} color="#ABABAB">
                  Due Date:
                </Text>
                
                  <Text fontSize={"12px"}>20-07-2025</Text>
            
                
              </Flex>
              <Flex align={"center"} justify={"space-between"}>
                <Text fontSize={"12px"} color="#ABABAB">
                  Status:
                </Text>
                
                  <Text fontSize={"12px"} bg="#2DAAD391" px="5px" py="1px" borderRadius={"10px"}>In-Progress</Text>
              
              </Flex>
            </Box>
          </Box>

          <Box
            border="1px solid #9F9F9F"
            borderRadius={"10px"}
            p="5px"
            mt="10px"
            borderStyle={"dashed"}
          >
            <Box bg={"#3D3D3D"} p="10px" borderRadius={"10px"}>
              <Text fontSize={"14px"} fontWeight={"bold"}>Create Home Animation</Text>
              <Flex align={"center"} justify={"space-between"} mt="10px">
                <Text fontSize={"12px"} color="#ABABAB">
                  Assigned To:
                </Text>
                <HStack spacing={1}>
                  <Text fontSize={"12px"}>{"Emma Jackson"}</Text>
                  <Avatar name={"Emma Jackson"} size={"xs"} />
                </HStack>
              </Flex>
              <Flex align={"center"} justify={"space-between"} my="10px">
                <Text fontSize={"12px"} color="#ABABAB">
                  Due Date:
                </Text>
                
                  <Text fontSize={"12px"}>25-07-2025</Text>
            
                
              </Flex>
              <Flex align={"center"} justify={"space-between"}>
                <Text fontSize={"12px"} color="#ABABAB">
                  Status:
                </Text>
                
                  <Text fontSize={"12px"} bg="#FBBF2433" px="5px" py="1px" borderRadius={"10px"}>Pending</Text>
              
              </Flex>
            </Box>
          </Box>

          <Flex justify={"center"} mt="10px">
            <CustomBtn text="View Section Details" bg="none" color={_COLORS?.brand}/>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default VieMore;
