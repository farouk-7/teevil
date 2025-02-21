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
import React, { useState } from "react";
import useForm from "../../../hooks/useForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CustomBtn } from "../../../component/CustomBtn";
import { counterRequest } from "../services/market";

const CounterProposal = ({ state }) => {
 
  const requestId = state?._id;
  const [formValues, setFormValues]= useState(
    {
    serviceRequest: requestId,
    type: "counter",
    details: {
      budget: "",
      description: "",
    }
  }
  ) 
  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }
  // const { handleChange, formValues } = useForm(initialValues);
  const queryClient = useQueryClient();
  const { mutate: sendResponse, isPending: isUpdateMutating } = useMutation({
    mutationFn: counterRequest,
    // mutationKey: ["request"],
    onSuccess: (data) => {
      console.log("data", data);
      queryClient.invalidateQueries({ queryKey: ["request"] });
    },
    onError: (error) => {
      console.error("Update Profile Mutation error", error);
    },
  });

  const handleCounter = async () => {
    const payload = {
      ...formValues,
    };
    sendResponse(payload);

  };
  return (
    <Box
      maxW={"700px"}
      border={"1px solid #A0AEC0"}
      borderRadius={"10px"}
      mt={"20px"}
      p={"20px"}
    >
      <Text fontWeight={"bold"} fontSize={["18px","18px","18px","20px"]}>
        Counter Proposal
      </Text>

      <Box my="10px">
        <FormLabel>Counter Budget</FormLabel>
        <InputGroup>
          <Input
            // name="budget"
            type="text"
            bg={"#e6e6e6"}
            value={formValues?.details?.budget}
            onChange={handleChange}
          />
        </InputGroup>
      </Box>
      <Box my="10px">
        <FormLabel>Express Yourself</FormLabel>
        <Textarea
          // name="details.description"
          type="text"
          bg={"#e6e6e6"}
          value={formValues?.details?.description}
          onChange={handleChange}
        />
      </Box>
      <Flex mt="30px">
        <CustomBtn
          text={"send proposal"}
          loading={isUpdateMutating}
          handleClick={handleCounter}
          disabled={
            !formValues?.details?.budget || !formValues?.details?.description
          }
        />
      </Flex>
    </Box>
  );
};

export default CounterProposal;
