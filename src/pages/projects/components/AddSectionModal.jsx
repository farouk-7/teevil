import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { CustomBtn } from "../../../component/CustomBtn";
import { BsPlus, BsTrash } from "react-icons/bs";
import { _COLORS } from "../../../constants/colors";
import FormInput from "../../../component/FormInput";
import { useMutation } from "@tanstack/react-query";
import { createNewSection } from "../services/Index";

const AddSectionModal = ({onClose, projectData, refetch}) => {
  const id = projectData?._id
  const [formValues, setFormValues] = useState({
    title: "",
  });
  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormValues((prev)=>({...prev, [name]:value}))
  }

   const { mutate: addSectionMutation, isPending } = useMutation({
            mutationFn: createNewSection,
            mutationKey: ["project"],
            onSuccess: () => {
              queryClient.invalidateQueries({ queryKey: ["project"] });
              refetch && refetch();
              onClose();
            },
          });

        const handleSubmit =(e)=>{
          e.preventDefault()
          const payload ={
            ...formValues,
            projectId : id,
          }
          addSectionMutation(payload)
        }
  // const [inputs, setInputs] = useState(formValues.section);

  // const handleAddInput = () => {
  //   const updatedInputs = [...inputs, ""];
  //   setInputs(updatedInputs);
  //   setFormValues((prev) => ({ ...prev, section: updatedInputs }));
  // };

  // const handleSectionChange = (index, value) => {
  //   const updatedInputs = [...inputs];
  //   updatedInputs[index] = value;
  //   setInputs(updatedInputs);
  //   setFormValues((prev) => ({ ...prev, section: updatedInputs }));
  // };
  // const handleDeleteInput = (index) => {
  //   const updatedInputs = [...inputs];
  //   updatedInputs.splice(index, 1);
  //   setInputs(updatedInputs);
  //   setFormValues((prev) => ({ ...prev, section: updatedInputs }));
  // };
  return (
    <Box bg={"#2C2C2C"} color={"#fff"} >
      {/* <Box mt={"30px"}>
        <Flex align={"center"} justify={"space-between"}>
          <Text fontSize={"20px"} fontWeight={500}>
            Project Section
          </Text>

          <CustomBtn
            text={"Add More"}
            childComp={<BsPlus size={30} />}
            handleClick={handleAddInput}
            color={"#FBBF24"}
            fontSize={"20px"}
            bg={"none"}
          />
        </Flex>
        {inputs.map((value, index) => (
          <Flex key={index} gap={2} mb={3} align={"center"}>
            <FormInput
              mb="10px"
              value={value}
              placeholder={`Product Section ${index + 1}`}
              handleChange={(e) => handleSectionChange(index, e.target.value)}
            />

            <Flex justify={"flex-end"}>
              <CustomBtn
                childComp={<BsTrash size={20} />}
                color={"#FBBF24"}
                bg={"none"}
                handleClick={() => handleDeleteInput(index)}
              />
            </Flex>
          </Flex>
        ))}
      </Box> */}
      <FormInput label={"Title"} value={formValues?.title} handleChange={handleChange} name={"title"}/>



      <Flex align={"center"} gap={"20px"} justify={"flex-end"} mt={"30px"} mb={"20px"}>
        <CustomBtn text={"Create Section"} color={"#000"} handleClick={handleSubmit} loading={isPending}/>
        <CustomBtn text={"Cancel"} bg={"none"} border={"1px solid #fff"} handleClick={onClose}/>
      </Flex>

    </Box>
  );
};

export default AddSectionModal;
