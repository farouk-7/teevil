import { Box, Flex, FormLabel, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import FormInput from "../../../component/FormInput";
import { CustomBtn } from "../../../component/CustomBtn";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { shareProject } from "../services/Index";

const AddCollaborators = ({data, onClose, refetch }) => {
 
   const project = data?.sections 
   console.log(project,"irue")
  const queryClient = new QueryClient();
  const [formValue, setFormValues] = useState({
    email: " ",
    projectId: data?._id,
    sections: [""],
    
  });
  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormValues((prev) => ({
    ...prev,
    [name]: name === "sections" ? [value] : value, // always array for 'sections'
  }));
};


  const { mutate: shareProjectMutation, isPending } = useMutation({
          mutationFn: shareProject,
          mutationKey: ["project"],
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["project"] });
            refetch && refetch();
            onClose();
          },
        });
      
        const handleSubmit = (e) => {
          e.preventDefault();
          const payload = {
            ...formValue,
          };
          shareProjectMutation(payload);
        };
  


  return (
    <Box>
      <FormInput
        label={"Email"}
       labelColor={"#fff"}
        name={"email"}
        value={formValue?.email}
        handleChange={handleChange}
      />
      <Box my="20px">
        <FormLabel color={"#fff"} fontWeight={500} fontSize={"20px"}>
          Access to what section ?
        </FormLabel>
        <Select placeholder="All Sections" color={"#fff"} onChange={handleChange} name='sections'   value={formValue.sections[0] || ""}>
          {
            project.map((project)=>(
               <option value={project?._id} style={{ color: "#000" }}>{project?.title}</option>
            ))
          }
        </Select>
      </Box>
      <Flex align={"center"} gap={"20px"} justify={"flex-end"} mt={"40px"}>
        <CustomBtn text={"Send Invite"} color={"#000"} handleClick={handleSubmit} loading={isPending} />
        <CustomBtn text={"Cancel"} bg={"none"} border={"1px solid #fff"} />
      </Flex>
    </Box>
  );
};

export default AddCollaborators;
