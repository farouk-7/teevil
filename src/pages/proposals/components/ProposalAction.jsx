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
import { BsThreeDots } from "react-icons/bs";
import { _COLORS } from "../../../constants/colors";
import CustomModal from "../../../component/CustomModal";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

const ProposalAction = ({event}) => {
  console.log(event,"SCOTT")
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  
  return (
    <Box>

    
    <Popover>
      <PopoverTrigger>
        <Button
          bg="transparent"
          _hover={{ background: "transparent" }}
          _focus={{ background: "transparent" }}
        >
          <BsThreeDots fontSize={"2em"} color={_COLORS.brand} />
        </Button>
      </PopoverTrigger>
      <PopoverContent w={"100%"} bg="#2C2C2C">
        <PopoverArrow bg={"#2C2C2C"} />
        <PopoverBody gap="3px" display={"flex"} flexDir={"column"} px={"20px"}>
          <Text  cursor={"pointer"}  ref={btnRef}  onClick={onOpen}>
            View Proposal
          </Text>

         

          <CustomModal
            header="Transaction Details"
            maxH={"500px"}
            size={"xl"}
            overflow={"scroll"}
            icon={<Text>Message Client</Text>}
          >
            {/* <CreateClientTransaction event={event} refetch={refetch}/> */}
          </CustomModal>
        </PopoverBody>
      </PopoverContent>
    </Popover>


      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Proposal Details</DrawerHeader>

          <DrawerBody>
    
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    
   
    </Box>
  );
};

export default ProposalAction;
