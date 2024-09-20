import { Button, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import PropTypes from "prop-types";


export const MoreActionButton = () => {
  return (
    <Popover>
    <PopoverTrigger>
      <Button
        bg="transparent"
        _hover={{ background: "transparent" }}
        _focus={{ background: "transparent" }}
      >
        <BsThreeDots fontSize={"1.2em"} color={"#0CAF60"} />
      </Button>
    </PopoverTrigger>
    <PopoverContent w={"100%"}>
      <PopoverArrow />
      <PopoverBody gap="10px" display={"flex"} flexDir={"column"}>
           <Text fontSize={"13px"}  cursor={"pointer"}>View Details</Text>
           <Text fontSize={"13px"}  cursor={"pointer"}>Update Status</Text>
           <Text fontSize={"13px"}  cursor={"pointer"}>Message</Text>
      </PopoverBody>
    </PopoverContent>
  </Popover>
  )
}

MoreActionButton.propTypes = {
    clickRef: PropTypes.func.isRequired,
    loanId: PropTypes.string,
    // status: PropTypes.string,
  };
  