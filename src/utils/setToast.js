import { useToast } from "@chakra-ui/react";

import React from "react";

const setToast = (title, msg, type) => {
  const toast = useToast();
  return toast({
    title: title,
    description: msg,
    status: type,
    duration: 3000,
    isClosable: true,
  });
};

export default setToast;
