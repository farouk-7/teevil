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
import PostJob from "./PostJob";
import JobDetails from "./JobDetails";
import DeleteJob from "./DeleteJob";

const JobAction = ({ data }) => {
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  const {
    isOpen: isDetailOpen,
    onOpen: onDetailOpen,
    onClose: onDetailClose,
  } = useDisclosure();

  const btnRef = useRef();
  const detailRef = useRef();

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
            <Text cursor={"pointer"} ref={detailRef} onClick={onDetailOpen}>
              View Details
            </Text>
            <Text ref={btnRef} onClick={onEditOpen} cursor={"pointer"}>
              Edit
            </Text>

            {data?.status==="active"?(
              <CustomModal
              header="Close Job"
              headerColor={"#fff"}
              maxH={"500px"}
              bg={"#2C2C2C"}
              size={"xl"}
              overflow={"scroll"}
              color={"#fff"}
              // onClose={onEditClose}
              icon={<Text>Close Job</Text>}
            >
              <DeleteJob onClose={onEditClose} />
            </CustomModal>
            ): data?.status==="closed"?(
              <Text cursor={"pointer"} ref={detailRef} onClick={onDetailOpen}>
              Re-Post
            </Text>
            ):
            <Text cursor={"pointer"} ref={detailRef} onClick={onDetailOpen}>
              Post
            </Text>
            }
            

            <CustomModal
              header="Delete Job"
              maxH={"500px"}
              color={"#fff"}
              bg={"#2C2C2C"}
              size={"xl"}
              overflow={"scroll"}
              icon={<Text>Delete</Text>}
            >
              <DeleteJob onClose={onEditClose} />
            </CustomModal>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      {/* Modals */}
      <PostJob
        isOpen={isEditOpen}
        finalFocusRef={btnRef}
        onClose={onEditClose}
        data={data}
      />
      <JobDetails
        isOpen={isDetailOpen}
        finalFocusRef={detailRef}
        onClose={onDetailClose}
        data={data}
      />
    </Box>
  );
};

export default JobAction;
