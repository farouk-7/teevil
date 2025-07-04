import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsEye, BsThreeDots } from "react-icons/bs";
import { _COLORS } from "../../../constants/colors";
import CustomModal from "../../../component/CustomModal";
import PostJob from "./PostJob";
// import { CustomBtn } from '../../../../component/CustomBtn'

// import { deleteClientInvoice, deleteTransaction } from '../services/Index'
// import { QueryClient, useMutation } from '@tanstack/react-query'
// import DeleteClientTransaction from './DeleteClientTransaction'
// import ClientTransactionDetails from './ClientTransactionDetails'
// import { useNavigate } from 'react-router-dom'

const JobAction = ({data}) => {
    
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
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
    <Box>
      <Popover>
        <PopoverTrigger>
          <Button
            bg="transparent"
            _hover={{ background: "transparent" }}
            _focus={{ background: "transparent" }}
          >
            <BsThreeDots fontSize={"1.4em"} color={_COLORS.white} />
          </Button>
        </PopoverTrigger>
        <PopoverContent w={"100%"} bg="#2C2C2C">
          <PopoverArrow bg={"#2C2C2C"} />
          <PopoverBody
            gap="3px"
            display={"flex"}
            flexDir={"column"}
            px={"20px"}
          >
            {/* <CustomModal
            header="Transaction Details"
            maxH={"500px"}
            size={"xl"}
            overflow={"scroll"}
            icon={<Text>View Details</Text>}
           
          >
          
           
          </CustomModal> */}
            <Text cursor={"pointer"}>View Details</Text>
            {/* onClick={() => navigate(`/orderdetails/${requestId}`)} */}

            <Text ref={btnRef} onClick={onOpen} cursor={"pointer"}>
              Edit
            </Text>

            <CustomModal
              header="Add Collaborators"
              headerColor={"#fff"}
              maxH={"500px"}
              bg={"#2C2C2C"}
              size={"xl"}
              overflow={"scroll"}
              color={"#fff"}
              icon={<Text>Share</Text>}
            ></CustomModal>
            <CustomModal
              header="Delect Project"
              maxH={"500px"}
              size={"xl"}
              overflow={"scroll"}
              icon={<Text>Delete</Text>}
            ></CustomModal>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <PostJob isOpen={isOpen} finalFocusRef={btnRef} onClose={onClose} data ={data}/>
    </Box>
  );
};

export default JobAction;
