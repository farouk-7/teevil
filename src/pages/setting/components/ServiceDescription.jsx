import { Box, Flex, FormLabel, Text, Textarea } from '@chakra-ui/react'
import FormInput from "../../../component/FormInput"
import { CustomBtn } from "../../../component/CustomBtn"
import React from 'react'

const ServiceDescription = () => {
  return (
    <Box borderRadius={"10px"} p={"20px"} bg={"#fff"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} h={"fit-content"}>
        <Text fontWeight={"bold"}>Service Description</Text>
        <Box mt="20px">
            <FormInput label={"Category"}  bg={"#DCDCDC"}/>
            <Box my={"20px"}>
                <FormLabel>Describe your service</FormLabel>
                <Textarea  bg={"#DCDCDC"} h={"80px"}/>
            </Box>
            <Flex>
                <CustomBtn  text={"upgrade"}/>

            </Flex>
            
        </Box>

    </Box>
  )
}

export default ServiceDescription