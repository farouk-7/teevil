import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import SwiperComponent from "./SwiperComponent";

const Profile = () => {
  return (
    <Box bg={"#e6e6e6"} h={"fit-content"}>
      <Box h={"300px"} bg={"#6B705C"} position={"relative"}>
        <Flex justifyContent={"center"}>
          <Avatar
            size="xl"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
            position={"absolute"}
            top={"250px"}
          />
        </Flex>
      </Box>
      <Flex flexDirection={"column"} alignItems={"center"} mt={"50px"}>
        <Text fontSize={"30px"} fontWeight={"bold"}>
          {" "}
          Adesan Akinmebo{" "}
        </Text>
        <Text color={"#6c6c6c"} fontWeight={500} py={"5px"}>
          Lagos, Nigeria
        </Text>
        <Flex color={"#6c6c6c"} alignItems={"center"} gap={"5px"}>
          <Text>service@gmail.eventree.com</Text>
          <Text>09055599039</Text>
        </Flex>
      </Flex>
      <Box
        bg={"#fff"}
        mx={"10px"}
        h={"fit-content"}
        mt="50px"
        borderTopRadius={"20px"}
        p={["20px","20px","20px","40px"]}
        pb={"50px"}
      >
        <Text>Service Details</Text>
        <Text py={"30px"} fontSize={["20px","20px","20px","30px"]} fontWeight={"bold"}>
          Image and Video Coverage for Wedding Ceremony
        </Text>
        <Flex align={"center"} gap={"8px"}>
          <Text color={"#6c6c6c"} fontWeight={500}>
            Service Category:
          </Text>
          <Text color={"#000"} fontWeight={500}>
            Event Decoration
          </Text>
        </Flex>
        <Text my="20px" fontWeight={500} mb={"50px"} >
          Our company registration services offer a seamless pathway to
          establishing your business entity with precision and efficiency. With
          a commitment to excellence, we guide you through the intricacies of
          the registration process, ensuring compliance with all legal
          requirements and facilitating a smooth transition to official
          recognition. Our company registration services offer a seamless
          pathway to establishing your business entity with precision and
          efficiency. With a commitment to excellence, we guide you through the
          intricacies of the registration process, ensuring compliance with all
          legal requirements and facilitating a smooth transition to official
          recognition.
        </Text> 
        <SwiperComponent />
      </Box>
     
    </Box>
  );
};

export default Profile;
