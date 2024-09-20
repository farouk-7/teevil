import { Box, Flex, FormLabel, Select, Text } from "@chakra-ui/react";
import React from "react";
import FormInput from "../../../component/FormInput";
import { CustomBtn } from "../../../component/CustomBtn";

const PersonalInfo = () => {
  return (
    <Box
      borderRadius={"10px"}
      p={"20px"}
      bg={"#fff"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
    >
      <Text fontWeight={"bold"}>Personal Information</Text>
      <Flex justify-content="space-between" mb="20px" align={"center"} gap={"20px"} mt="20px">
        <FormInput label={"Full Name"} bg={"#DCDCDC"} />
        <FormInput label={"Email Address"} bg={"#DCDCDC"} />
      </Flex>
      <Flex justify-content="space-between" mb="20px" align={"center"} gap={"20px"}>
        <FormInput label={"Phone Number"} bg={"#DCDCDC"} />
        <FormInput label={"Address"} bg={"#DCDCDC"} />
      </Flex>
      <Box>
        <FormLabel>Select Specification</FormLabel>
        <Select placeholder="Select option">
          <option value="vendor1">vendor 1</option>
          <option value="vendor2">vendor 2</option>
          <option value="vendor3">vendor 3</option>
        </Select>
      </Box>
      <Flex mt="20px">
        <CustomBtn text={"Update Profile"}/>
      </Flex>
    </Box>
  );
};

export default PersonalInfo;
