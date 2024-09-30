import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import FormInput from "../../../component/FormInput";
import { CustomBtn } from "../../../component/CustomBtn";
import useForm from "../../../hooks/useForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changePassword } from "./services/service";
import { useGetState } from "../../../GlobalStateContext/useGetState";
import { errorNotifier } from "../../../component/notifier";

const ManagePassword = () => {
  const { setState, state } = useGetState();
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const queryClient = useQueryClient();
  const { mutate: updatePasswordMutation, isPending: isUpdateMutating } =
    useMutation({
      mutationFn: (payload) => changePassword(payload),
      mutationKey: ["vendor"],
      onSuccess: (data) => {
        console.log("data", data);
        queryClient.invalidateQueries({ queryKey: ["vendor"] });
        setState((prev) => ({ ...prev, updated: !prev.updated }));
        setFormValues({});
      },
      onError: (error) => {
        console.error("Update Profile Mutation error", error);
      },
    });
  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (formData?.newPassword !== formData?.confirmPassword)
      return errorNotifier("Password mismatch");
    const payload = {
      // id: state?._id,
      ...formData,
    };
    updatePasswordMutation(payload);
  };
  return (
    <Box
      borderRadius={"10px"}
      p={"20px"}
      bg={"#fff"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
    >
      <Text fontWeight={"bold"}>Manage Password</Text>
      <Box
        justify-content="space-between"
        mb="20px"
        align={"center"}
        gap={"20px"}
        mt="20px"
      >
        <FormInput
          label={"Old Password"}
          name={"oldPassword"}
          value={formData?.oldPassword}
          bg={"#DCDCDC"}
          mb={"20px"}
          handleChange={handleChange}
        />
        <FormInput
          label={"New Password"}
          name={"newPassword"}
          value={formData?.newPassword}
          bg={"#DCDCDC"}
          mb={"20px"}
          handleChange={handleChange}
        />
        <FormInput
          label={"Confirm Password"}
          name={"confirmPassword"}
          value={formData?.confirmPassword}
          bg={"#DCDCDC"}
          mb={"20px"}
          handleChange={handleChange}
        />
      </Box>
      <Flex mt="20px">
        <CustomBtn
          loading={isUpdateMutating}
          text={"Save New Password"}
          handleClick={handleUpdatePassword}
          disabled={
            !formData?.newPassword ||
            !formData?.newPassword ||
            !formData?.confirmPassword
          }
        />
      </Flex>
    </Box>
  );
};

export default ManagePassword;
