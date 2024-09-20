import { Avatar, Box, Text } from '@chakra-ui/react'
import React from 'react'

const ServiceProviderCard = () => {
  return (
    <Box borderRadius={"10px"} p={"20px"} bg={"#fff"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
       <Box><Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}</Box>
       <Text fontWeight={"500"} pb={"20px"} pt="10px">Service Provider</Text>
       <Box>
        <Text fontSize={"13px"} fontWeight={"500"}>Phone Number</Text>
        <Text fontWeight={"500"}>07064535673</Text>
       </Box>
       <Box mt={"20px"} >
        <Text fontSize={"13px"} fontWeight={"500"}>End Address</Text>
        <Text fontWeight={"500"}>info@gerant.com</Text>
       </Box>

    </Box>
  )
}

export default ServiceProviderCard