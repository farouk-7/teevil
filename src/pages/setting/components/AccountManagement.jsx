import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import FormInput from '../../../component/FormInput'
import { CustomBtn } from '../../../component/CustomBtn'
import { useGetState } from '../../../GlobalStateContext/useGetState'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editUser } from './services/service'

const AccountManagement = ({refetch}) => {
      const queryClient = useQueryClient();
    const {state} = useGetState()
    const id = "1234556"
    console.log(state,"MYSTATE")
    const [formValues, setFormValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        accountType: state?.accountType
    })
    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormValues((prev) => ({...prev,[name]: value,}));
    }
      const { mutate: updateUserMutation, isPending } = useMutation({
        mutationFn: (id)=>editUser(id),
        mutationKey: ["profile"],
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["profile"] });
          refetch && refetch();
          onClose();
        },
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
          ...formValues,
          
        };
        updateUserMutation(payload);
      };

  return (
    <Box my="50px">
        <Text>Account Mangement</Text>
        <Box bg={"#2C2C2C"} borderRadius={"10px"} p={"10px 20px"}>
            <Flex align={"center"} gap={"50px"}>
                <FormInput label={"Firstname"} name={"firstName"} value={formValues?.firstName} handleChange={handleChange}/>
                <FormInput label={"Lastname"} name={"lastName"} value={formValues?.lastName} handleChange={handleChange}/>
            </Flex>

             <Flex align={"flex-end"} justify={"space-between"} mt="20px" gap={"50px"}>
                <FormInput label={"Email Address"} name={"email"} value={formValues?.email} handleChange={handleChange}/>
                <FormInput label={"Phone"}  name={"phone"} value={formValues?.phone} handleChange={handleChange}/>
                <CustomBtn text={"Save Changes"} color={"#000"} width={"full"} handleClick={handleSubmit} loading={isPending}/>
            </Flex>
        </Box>

    </Box>
  )
}

export default AccountManagement