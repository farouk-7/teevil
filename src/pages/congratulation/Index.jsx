import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png"
import Confetti from "react-confetti";
import hand from "../../assets/hand.png"



const Congratulation = () => {
    const navigate = useNavigate()
    useEffect(() => {
        // Set a timeout to navigate after 5 seconds (5000ms)
        const timeout = setTimeout(() => {
          navigate('/welcome'); // Replace '/new-page' with your desired route
        }, 6000);
    
        // Clean up the timeout if the component is unmounted
        return () => clearTimeout(timeout);
      }, [navigate]);
  return (
    <Box
      h={"100vh"}
      justify={"space-between"}
      overflow={"hidden"}
      bg={"black"}
      color={"#fff"}
    >
       <Confetti
        // width={window.innerWidth}
        height={window.innerHeight}
        colors={["#D39D12", "#D39D12", "", "#D39D12"]}
        numberOfPieces={100}
        recycle={true}  
      />
      <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"} h={"100vh"}>
        <Image src = {hand} />
        <Text fontSize={"30px"} fontWeight={"bold"} pb={"10px"} textAlign={"center"}>Congratulation Your Account Is Ready</Text>
        <Text textAlign={"center"} maxW={"450px"} color={"#E9FCFF7D"} >Congratulation you've successfully created your account. Now, let's get you set up.</Text>
      </Flex>
    </Box>
  );
};

export default Congratulation;
