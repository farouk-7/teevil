import {
  Box,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import useForm from "../../../hooks/useForm";
import { CustomBtn } from "../../../component/CustomBtn";

const CounterProposal = () => {
  const initialValues = {
    counterBudget: "",
    expressYourself:""
  };
  const { handleChange, formValues } = useForm(initialValues);
  return (
    <Box
      maxW={"700px"}
      border={"1px solid #A0AEC0"}
      borderRadius={"10px"}
      mt={"20px"}
      p={"20px"}
    >
      <Text fontWeight={"bold"} fontSize={"20px"}>
        Counter Proposal
      </Text>

      <Box my="10px">
        <FormLabel>Counter Budget</FormLabel>
        <InputGroup>
          <Input
            name="counterBudget"
            type="text"
            bg={"#e6e6e6"}
            value={formValues?.counterBudget}
            onChange={handleChange}
          />
        </InputGroup>
      </Box>
      <Box my="10px">
        <FormLabel>Express Yourself</FormLabel>
          <Textarea
            name="expressYourself"
            type="text"
            bg={"#e6e6e6"}
            value={formValues?.expressYourself}
            onChange={handleChange}
          />
      </Box>
      <Flex mt="30px">
        <CustomBtn text={"send proposal"}/>
      </Flex>
    </Box>
  );
};

export default CounterProposal;
