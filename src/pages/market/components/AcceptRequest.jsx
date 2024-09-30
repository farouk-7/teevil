import { Box, Flex, Text } from "@chakra-ui/react";
import { CustomBtn } from "../../../component/CustomBtn";
import { acceptRequest } from "../services/market";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetState } from "../../../GlobalStateContext/useGetState";
import { useState } from "react";

const AcceptRequest = ({state}) => {
  // const {state} = useGetState()
  
  const requestId=state?._id
  console.log(requestId,"gbub")
   const [formData, setFormData] = useState({
    serviceRequest: requestId,
    type: "accept"
   })
  const queryClient = useQueryClient();
  const { mutate: updateResponse, isPending: isUpdateMutating } =
    useMutation({
      mutationFn: acceptRequest,
      // mutationKey: ["request"],
      onSuccess: (data) => {
        console.log("data", data);
        queryClient.invalidateQueries({ queryKey: ["request"] });
        // setState((prev) => ({ ...prev, updated: !prev.updated }));
        // setFormValues({});
      },
      onError: (error) => {
        console.error("Update Profile Mutation error", error);
      },
    });
  // const handleAccept = (e) => {
  //   e.preventDefault();
  //   const payload = {
  //     id: state?._id,
  //     vendorResponse:"accepted"
  //   };
  //   updatePasswordMutation(payload);
  //   console.log(payload)
  // };

  const handleAccept = async () => {
    const payload = { 
      ...formData
     }
    updateResponse( payload);
    console.log(payload,"ry/")
  };
  return (
    <Box
      maxW={"fit-content"}
      border={"1px solid #A0AEC0"}
      borderRadius={"10px"}
      mt={"20px"}
      p={"20px"}
    >
        <Text fontSize={"20px"} fontWeight={"bold"}>Are you sure you want to accept this request</Text>
        <Flex align={"center"} gap={"20px"} mt={"20px"}>
            <CustomBtn width={"full"} text={"Accept"} handleClick={handleAccept}/>
        </Flex>
    </Box>
  );
};

export default AcceptRequest;
