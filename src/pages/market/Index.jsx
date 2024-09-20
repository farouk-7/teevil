import { Box, Flex, Grid, Image, Text} from '@chakra-ui/react'
import React from 'react'
import CardHeader from '../../component/CardHeader'
import { cardData } from './components/cardData'
import { CustomBtn } from '../../component/CustomBtn';
import { FaUser } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { requestData } from './components/requestData';

const Market = () => {
  return (
    <Box>
      <CardHeader>
      </CardHeader>
      <Text fontWeight={600} pt="20px" pb="40px" fontSize={"25px"}>Assigned Orders</Text>
      <Flex justifyContent={"space-between"} align={"center"} gap={"20px"}>
          {cardData?.map((item)=>{
            return (
              <Box key={item?.id} p={"20px"} bg={"#D9D9D9"} borderRadius={"20px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
                <Image src={item?.img} w={"full"}/>
                <Flex flexDirection={"column"} textAlign={"start"} maxW={"400px"} margin={"0 auto"}>
                  <Text fontWeight={"bold"} pt="20px" pb="10px">{item?.title}</Text>
                  <Flex alignItems={"center"} gap={"10px"} mb={"5px"} color={"#425466"}>
                    <FaUser />
                    <Text>{item?.date}</Text>
                  </Flex>
                  <Flex alignItems={"center"} gap={"10px"} mb={"5px"} color={"#425466"}>
                    <FaRegCalendarAlt />
                    <Text>{item?.name}</Text>
                  </Flex>
                  <Flex alignItems={"center"} gap={"10px"} mb={"5px"} color={"#425466"}>
                    <IoLocationSharp />
                    <Text>{item?.location}</Text>
                  </Flex>
                  <Text color={"#425466"} fontWeight={600}>{item?.text}</Text>
                </Flex>
                <Flex mt={"30px"}>
                  <CustomBtn text={"see more"}/>
                </Flex>
              </Box>
            )
          })}
      </Flex>
      <Flex justifyContent={"center"} mt="40px">
        <CustomBtn text={"View More"} width={"300px"}/>
      </Flex>
      <Box>
        <Text  fontWeight={600} pt="20px" pb="40px" fontSize={"25px"}>New Request</Text>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          {requestData?.map((item)=>{
            return (
              <Box key={item?.id} p={"20px"} bg={"#fff"} borderRadius={"20px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
                <Text color={"#F74780"}>{item?.date}</Text>
                <Flex flexDirection={"column"} textAlign={"start"}>
                  <Text fontWeight={"bold"} pt="20px" pb="10px" fontSize={"20px"} >{item?.title}</Text>
                  <Flex alignItems={"center"} gap={"10px"} mb={"5px"} color={"#425466"}>
                    <FaUser />
                    <Text>{item?.date}</Text>
                  </Flex>
                  <Flex alignItems={"center"} gap={"10px"} mb={"5px"} color={"#425466"}>
                    <FaRegCalendarAlt />
                    <Text>{item?.name}</Text>
                  </Flex>
                  <Flex alignItems={"center"} gap={"10px"} mb={"5px"} color={"#425466"}>
                    <IoLocationSharp />
                    <Text>{item?.location}</Text>
                  </Flex>
                  {/* <Text color={"#425466"} fontWeight={600}>{item?.text}</Text> */}
                </Flex>
                <Flex mt={"10px"}>
                  <CustomBtn text={"View Details"} width={"full"}/>
                </Flex>
              </Box>
            )
          })}
      </Grid>
      </Box>
    </Box>
  )
}

export default Market