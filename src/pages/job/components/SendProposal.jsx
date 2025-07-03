import { Box, Flex, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import FormInput from "../../../component/FormInput";
import { CustomBtn } from "../../../component/CustomBtn";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { createNewProposal } from "../../proposals/components/services";

const SendProposal = ({datum, refetch}) => {
    // console.log(datum,"KEnn")
     const queryClient = new QueryClient();
     const [formValues, setFormValues] = useState({
        title: " Just Texting",
        body: "",
        timeLine: "",
        bidAmount: "",
        job: datum?._id,
      });
     const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
      const { mutate: createProposalMutation, isPending } = useMutation({
        mutationFn: createNewProposal,
        mutationKey: ["proposal"],
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["project"] });
          refetch && refetch();
          onClose();
        },
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
          ...formValues,
        };
        createProposalMutation(payload);
      };



  return (
    <Box color={"#fff"}>
      <FormInput lines={5} label={"Cover letter"}  handleChange={handleChange} name="body" value={formValues?.body}/>
      <Flex my="20px" gap={"20px"}>
        <Box flex={1}>
          <FormLabel>Time-line</FormLabel>
          <Select onChange={handleChange} name="timeLine" value={formValues?.timeLine} color={"#000"}>
            <option value={"one"}>1 months</option>
            <option value={"two"}>2 months</option>
          </Select>
        </Box>

        <Box flex={1}>
          <FormLabel>Bid-Amount</FormLabel>
          <InputGroup>
            
            <Input type="number" placeholder="0.00" onChange={handleChange} name="bidAmount" value={formValues?.bidAmount} />
            <InputRightAddon color={"#000"} fontWeight={"bold"} fontSize={"20px"}>
             $
            </InputRightAddon>
          </InputGroup>
        </Box>

        
      </Flex>
      <Flex align={"center"} mt="50px" justifyContent={"flex-end"} gap={"20px"}>
            <CustomBtn text={"Submit Proposal"} color={"#000"} handleClick={handleSubmit} loading={isPending}/>
            <CustomBtn text={"Cancel"} border={"1px solid #ffff"} bg={"none"}/>
        </Flex>
    </Box>
  );
};

export default SendProposal;
