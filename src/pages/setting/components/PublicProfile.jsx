import { Box, Flex, Switch, Text } from '@chakra-ui/react'
import React from 'react'

const PublicProfile = () => {
  return (
      <Box my="50px">
        
        <Box bg={"#2C2C2C"} borderRadius={"10px"} p={"30px 20px"}>
           <Text fontWeight={500}>Public Profile</Text> 
           <Text py="10px" opacity={"50%"}>
            When this is on, people on the this platform can find and view your profile globally.
           </Text>
           <Flex align={"center"} gap={"10px"}>
            <Switch />
            <Text>You're currently invisible</Text>
           </Flex>
        </Box>

    </Box>
  )
}

export default PublicProfile