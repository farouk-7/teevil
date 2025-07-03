import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaBagShopping } from 'react-icons/fa6'


const Card = ({flex, cardText, icon, subText, subText1}) => {
  return (
    <Box bg={"#2C2C2C"} color={"#fff"} p={"20px"} borderRadius={"10px"} flex={flex}>
        <Flex align={"center"} gap={"20px"} >
            <Box bg={"#E9FCFF"} borderRadius={"50px"} p={"10px"}>{icon}</Box>
            <Text fontSize={"20px"}>{cardText}</Text>
        </Flex>
        <Flex mt="20px" fontWeight={800} fontSize={"25px"} justify={"space-between"} align={"baseline"}>
            <Text>{subText}</Text>
            <Text color={"#FBBF24"} fontSize={"16px"} fontWeight={500}>{subText1}</Text>
        </Flex>

    </Box>
  )
}

export default Card