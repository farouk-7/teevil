import { Box, Flex, Switch, Text } from '@chakra-ui/react'
import React from 'react'
import { CustomBtn } from '../../../component/CustomBtn'

const DeleteAccount = () => {
  return (
     <Box my="50px">
        
        <Box bg={"#2C2C2C"} borderRadius={"10px"} p={"30px 20px"}>
           <Text fontWeight={500}>Delete Your Account</Text> 
           <Text py="10px" opacity={"50%"}>
            Before deleting your account, please note that if you delete your account, Dash cannot recover it.
           </Text>
           <Flex align={"center"} gap={"10px"} justifyContent={"flex-end"}>
            <CustomBtn text={"Delete"} bg={"none"} border={"1px solid #FF5A5F"}/>
           </Flex>
        </Box>

    </Box>
  )
}

export default DeleteAccount