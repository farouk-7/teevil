import { Avatar, Box, Divider, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import CardHeader from "../../../component/CardHeader";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { CustomBtn } from "../../../component/CustomBtn";
import FormInput from "../../../component/FormInput";
import { Switch } from "@chakra-ui/react";
import { useGetState } from "../../../GlobalStateContext/useGetState";

const Setting = () => {
  const {state} = useGetState()
  console.log(state,"STATE")
  return (
    <Box h={"100%"} color={"#fff"}>
      <CardHeader></CardHeader>
      <Flex mt="50px" color={"#fff"} justify={"space-between"} align={"center"}>
        <HStack spacing={4}>
          <Avatar size={"xl"} name={state?.firstName + " " + state?.lastName} src={state?.profileImage}/>
          <Box>
            <Text>{state?.firstName + " " + state?.lastName}</Text>
            <Flex gap={"40px"}>
              <HStack>
                <IoMail />
                <Text>{state?.email}</Text>
              </HStack>

              <HStack>
                <FaPhone />
                <Text>{state?.phone}</Text>
              </HStack>
            </Flex>
          </Box>
        </HStack>

        <CustomBtn
          text={"Upload Profile Image"}
          bg={"none"}
          border={"1px solid #fff"}
        />
      </Flex>
      <Box my="30px">
        <Text fontWeight={"bold"}>Change Password</Text>
        <Box py="20px" px="30px" borderRadius={"10px"} bg={"#2C2C2C"} mt="10px">
          <Flex gap={"20px"} maxW={"700px"}>
            <FormInput label={"Change Password"} />
            <FormInput label={"New Password"} />
          </Flex>
          <Flex align={"center"} maxW={"700px"} my="20px">
            <FormInput label={"Confirm New Password"} />
          </Flex>
          <Flex justify={"flex-end"}>
            <CustomBtn text={"Update Password"} color={"#000"} />
          </Flex>
        </Box>
      </Box>

      <Box>
        <Text fontWeight={"bold"}>Notification Management</Text>
        <Box py="20px" px="30px" borderRadius={"10px"} bg={"#2C2C2C"} mt="10px">
          <Flex gap={"20px"} justify={"space-between"} align={"center"}>
            <Box>
              <Text fontWeight={"bold"}>Annoucement</Text>
              <Text color={"#F5F5F5"} fontSize={"15px"} pt="8px">
                Occasional annoucement of new features
              </Text>
            </Box>
            <Box>
              <Switch />
            </Box>
          </Flex>
          <Box my="20px">
            <Divider />
          </Box>
          <Flex gap={"20px"} justify={"space-between"} align={"center"}>
            <Box>
              <Text fontWeight={"bold"}>Escroe Funding</Text>
              <Text color={"#F5F5F5"} fontSize={"15px"} pt="8px">
                Occasional notification from Teevil escrow payment
              </Text>
            </Box>
            <Box>
              <Switch />
            </Box>
          </Flex>
          <Box my="20px">
            <Divider />
          </Box>
        </Box>
      </Box>
      <Box py="20px" px="30px" borderRadius={"10px"} bg={"#2C2C2C"} mt="30px" w={"400px"}>
        <Text fontWeight={"bold"}>Delete your account</Text>
        <Text fontSize={"15px"} py="8px">Before deleting your account, please note that if you delete your 
            account, ou cannot recover it.
        </Text>
        <Flex mt="10px" justify={"flex-end"}>
            <CustomBtn text={"Delete"} bg={"none"} border={"1px solid #FF5A5F"}/>
        </Flex>
      </Box>
    </Box>
  );
};

export default Setting;
