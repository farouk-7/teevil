import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CardHeader from "../../../component/CardHeader";
import { FaUser } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { CustomBtn } from "../../../component/CustomBtn";
import { _COLORS } from "../../../constants/colors";

const EventDetails = () => {
    const [startChat, setStartChat] = useState(false)
    const handleChat =()=>{
        setStartChat(!startChat)
    }
  return (
    <Box>
      <CardHeader></CardHeader>
      <Text fontSize={"25px"} fontWeight={"bold"} pt={"20px"} pb={"10px"}>
        Image and Video Coverage for Wedding Ceremony
      </Text>
      <Flex
        align={"center"}
        gap={"30px"}
        fontSize={"13px"}
        color={"#121212"}
        mb={"30px"}
      >
        <Text>Event Date: 20 December, 2024</Text>
        <Text>Location: Ikeja City Hall, Ikeja, Lagos</Text>
      </Flex>
      <Box>
        <Text fontWeight={"bold"} pb={"10px"}>
          Description
        </Text>
        <Box h={"1px"} maxW={"200px"} border={"1px solid #000"}></Box>
        <Text color={"#121212"} maxW={"1000px"} pt={"20px"}>
          Our company registration services offer a seamless pathway to
          establishing your business entity with precision and efficiency. With
          a commitment to excellence, we guide you through the intricacies of
          the registration process, ensuring compliance with all legal
          requirements and facilitating a smooth transition to official
          recognition.
        </Text>
      </Box>
      <Box mt={"30px"}>
        <Text fontWeight={"bold"} pb={"10px"}>
          Event Details
        </Text>
        <Box h={"1px"} maxW={"200px"} border={"1px solid #000"} mb={"20px"}></Box>
        <Box>
        <Flex align={"center"} gap={"20px"} mb={"10px"}>
            <FaUser color="#2F88FF"/>
            <Text>Adebayo Y.U</Text>
        </Flex>
        <Flex align={"center"} gap={"20px"} mb={"10px"}>
            <FaRegCalendarAlt />
            <Text>25, Sept 2024</Text>
        </Flex>
        <Flex align={"center"} gap={"20px"}>
            <IoLocationSharp />
            <Text>U.4140 Parker Rd. Allentown, New Lagos</Text>
        </Flex>
        <Flex align={"center"} gap={"10px"} mt={"20px "}>
            <CustomBtn handleClick={handleChat} text={"Chat Admin"} bg={_COLORS?.brand}/>
            <CustomBtn  text="Submit for Review" bg={"#7EBD25"}/>
        </Flex>
        </Box>

        {
           startChat && (
            <Box>
            chat started
        </Box>
           ) 
        }
        

       
      </Box>
    </Box>
  );
};

export default EventDetails;
