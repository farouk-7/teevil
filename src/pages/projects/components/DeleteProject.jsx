import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { CustomBtn } from '../../../component/CustomBtn'
// import { QueryClient, useMutation } from '@tanstack/react-query';
import { deleteProjects } from '../services/Index';
import { QueryClient, useMutation } from '@tanstack/react-query';


const DeleteProject = ({datum,onClose, refetch,}) => {
    const queryClient = new QueryClient();
    console.log(datum,"ggygyu")
    
  const { mutate: deleteProjectMutation, isPending: isDeleteMutating } =
    useMutation({
      mutationFn: () => deleteProjects(datum?._id),
      mutationKey: ["delete-project"],
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["project"] });
        refetch && refetch();
        onClose();
      },
      onError: (error) => {
        console.error("Update Profile Mutation error", error);
      },
    });

  const handleDelete= () => {
    deleteProjectMutation();
  };
  return (
    <Box >
        <Text textAlign={"center"} fontWeight={600} fontSize={"20px"}>Are You sure you want to delete this project ?</Text>
        <Flex justify={"center"} my="30px" gap={"10px"}>
            <CustomBtn text={"Yes, Delete"} handleClick={handleDelete} loading={isDeleteMutating}/>
            <CustomBtn text={"No, Cancel"} bg={"red.500"}/>
        </Flex>
    </Box>
  )
}

export default DeleteProject