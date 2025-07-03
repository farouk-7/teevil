import { Button, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'
import React from 'react'
import { BsEye, BsThreeDots } from 'react-icons/bs'

import { _COLORS } from '../../../constants/colors'
import CustomModal from '../../../component/CustomModal'
import { CustomBtn } from '../../../component/CustomBtn'
import DeleteProject from './DeleteProject'
import ShareProject from './ShareProject'
import { useNavigate } from 'react-router-dom'

// import { deleteClientInvoice, deleteTransaction } from '../services/Index'
// import { QueryClient, useMutation } from '@tanstack/react-query'
// import DeleteClientTransaction from './DeleteClientTransaction'
// import ClientTransactionDetails from './ClientTransactionDetails'
// import { useNavigate } from 'react-router-dom'

const AllProjectsAction = ({event, refetch}) => {
  const navigate = useNavigate()
  console.log(event,"FPOOD")
  const id = event?._id
  //   const queryClient = new QueryClient();
  //   const { mutate: deleteTransactionMutation, isPending: isDeleteMutating } =
  //   useMutation({
  //     mutationFn: () => deleteTransaction(event?._id),
  //     mutationKey: ["delete-transaction"],
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ["transaction"] });
  //       refetch && refetch();
  //       onClose();
  //     },
  //     onError: (error) => {
  //       console.error("Update Profile Mutation error", error);
  //     },
  //   });

  // const handleDelete = () => {
  //   deleteTransactionMutation();
  // };
  return (
    <Popover >
      <PopoverTrigger >
        <Button
          bg="transparent"
          _hover={{ background: "transparent" }}
          _focus={{ background: "transparent" }}
        >
          <BsThreeDots fontSize={"2em"} color={_COLORS.brand} />
        </Button>
      </PopoverTrigger>
      <PopoverContent w={"100%"} bg="#2C2C2C">
        <PopoverArrow bg={"#2C2C2C"}/>
        <PopoverBody gap="3px" display={"flex"} flexDir={"column"} px={"20px"} >
        {/* <CustomModal
            header="Transaction Details"
            maxH={"500px"}
            size={"xl"}
            overflow={"scroll"}
            icon={<Text>View Details</Text>}
           
          >
          
           
          </CustomModal> */}
          <Text cursor={"pointer"} 
          onClick={()=>{ navigate(`/project-details/${id}`)}}>View Details</Text>
          {/* onClick={() => navigate(`/orderdetails/${requestId}`)} */}



          <CustomModal
            header="Transaction Details"
            maxH={"500px"}
            size={"xl"}
            overflow={"scroll"}
            icon={<Text>Edit</Text>}
           
          >
          
           {/* <CreateClientTransaction event={event} refetch={refetch}/> */}
          </CustomModal>
          <CustomModal
            header="Add Collaborators"
            headerColor={"#fff"}
            maxH={"500px"}
            bg={"#2C2C2C"}
            size={"xl"}
            overflow={"scroll"}
            color={"#fff"}
            icon={<Text>Share</Text>}
           
          >
          <ShareProject datum={event} refetch={refetch} />
           {/* <CreateClientTransaction  */}
          </CustomModal>
          <CustomModal
            header="Delect Project"
            maxH={"500px"}
            size={"xl"}
            overflow={"scroll"}
            icon={<Text>Delete</Text>}
           
          >
          
          <DeleteProject datum={event} refetch={refetch} />
          </CustomModal>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default AllProjectsAction