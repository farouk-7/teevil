import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import FormInput from '../../../component/FormInput'
import { CustomBtn } from '../../../component/CustomBtn'

const ManagePassword = () => {
  return (
    <Box
    borderRadius={"10px"}
    p={"20px"}
    bg={"#fff"}
    boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
  >
    <Text fontWeight={"bold"}>Manage Passwor</Text>
    <Box justify-content="space-between" mb="20px" align={"center"} gap={"20px"} mt="20px">
      <FormInput label={"Old Password"} bg={"#DCDCDC"} mb={"20px"}/>
      <FormInput label={"New Password"} bg={"#DCDCDC"} mb={"20px"}/>
      <FormInput label={"Confirm Password"} bg={"#DCDCDC"} mb={"20px"}/>
    </Box>
    <Flex mt="20px">
      <CustomBtn text={"Save New Password"}/>
    </Flex>
  </Box>
  )
}

export default ManagePassword