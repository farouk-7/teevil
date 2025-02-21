import { Avatar, Box, Flex, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { RiEditFill } from 'react-icons/ri'
import { _COLORS } from '../../../constants/colors'
import { useGetState } from '../../../GlobalStateContext/useGetState'
import { updateProfileImage } from './services/service'
import { TiVendorAndroid } from 'react-icons/ti'

const ServiceProviderCard = () => {
  const {state} = useGetState()
  console.log(state,"ope")
  const vendorId = state?._id

  const handleChange = async (e) => {
    console.log(e.target.files?.[0], "fanda");
    const formData = new FormData();
    
    formData.append("image", e.target.files?.[0]);
    await updateProfileImage(vendorId, formData);
  };
  return (
    <Box borderRadius={"10px"} p={"20px"} bg={"#fff"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>


       <Flex pos={"relative"} w={"fit-content"} mb="20px">
        <Avatar size='2xl' name={state?.fullName} src={state?.image} />
        <Flex
          bg={_COLORS?.brand}
          p="7px"
          position="absolute"
          borderRadius="10px"
          right="-5px"
          bottom="-5px"
        >
          <FormLabel htmlFor="profile-pic" >
            <RiEditFill
             fontSize={"1.2em"}
             color="#fff"
              cursor="pointer"
            />
          </FormLabel>
          <Input
            display={"none"}
            type="file"
            id="profile-pic"
            onChange={handleChange}
          />
        </Flex>
      </Flex>




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