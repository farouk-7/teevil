import React, { useState } from 'react'
import FormInput from '../../../component/FormInput'
import { Box, Flex, FormLabel, Select } from '@chakra-ui/react'
import { CustomBtn } from '../../../component/CustomBtn'
import { _COLORS } from '../../../constants/colors'
import { QueryClient, useMutation } from '@tanstack/react-query'
import { shareProject } from '../services/Index'

const ShareProject = ({datum}) => {

    
    const project = datum?.sections
    console.log(datum,"Zino")
      const queryClient = new QueryClient();
     const [formValues, setFormValues] = useState({
        email: "",
        projectId: datum?._id,
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
          ...formValues,
        };
        shareProjectMutation(payload);
      };






  return (
    <Box color={"#fff"}>
        <FormInput label={"Email"} name={"email"} value={formValues?.email} handleChange={handleChange}/>

        <Box my="30px" >
            <FormLabel>Access to what Section</FormLabel>
            <Select placeholder='All Sections' onChange={handleChange} name='sections'  value={formValues.sections[0] || ""}>
                {project.map((project) => (
                  <option value={project?._id} style={{ color: "#000" }}>{project?.title}</option>
                ))}
            </Select>
        </Box>
        <Flex justifyContent={"flex-end"} gap={"20px"} >
            <CustomBtn text={"Share Invite"} bg={_COLORS?.brand} handleClick={handleSubmit} loading={isPending}/>
            <CustomBtn text={"Cancel"} bg={"none"} border={"1px solid #fff"}/>
        </Flex>
    </Box>
  )
}

export default ShareProject