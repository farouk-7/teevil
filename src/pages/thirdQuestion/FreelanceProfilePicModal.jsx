import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCamera } from "react-icons/fa6";
import { CustomBtn } from "../../component/CustomBtn";
import { _COLORS } from "../../constants/colors";
import { useNavigate } from "react-router-dom";
import { getLocalStorageItem } from "../../utils/localStorage";
import { APP_CONSTANTS } from "../../constants/app";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadPicture } from "./services";

const FreelanceProfilePicModal = () => {
  const userAccount = getLocalStorageItem(APP_CONSTANTS.accountType);
  const id = userAccount?._id;
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setFile(file)
    }
  };
  const { mutate: sendPicture, isPending: isUpdateMutating } = useMutation({
    mutationFn: (payload) => uploadPicture(id,payload),
    mutationKey: ["picture"],
    onSuccess: (data) => {
      console.log("data", data);
      queryClient.invalidateQueries({ queryKey: ["picture"] });
      navigate("/login");
    },
    onError: (error) => {
      console.error("Update Profile Mutation error", error);
    },
  });
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const payload = {
  //     id: id,
  //     ...formValue,
  //   };

  //   // sendExperience(payload);
  //   console.log(payload, "ry/");
  // };

  const handleSubmit = () => {
    if (!file) {
      alert("Please select an image to upload");
      return;
    }

    // Create a FormData object to send the image
    const formData = new FormData();
    formData.append("file", file); // Append the file under the key `profileImage`
    // formData.append("id", id)
    // Trigger the mutation to upload the image
    sendPicture(formData);
    console.log(formData,"hhhdh")
  };


  return (
    <Box zIndex={9999}>
      <Box color={"#fff"}>
        <Text textAlign={"center"} fontSize={"25px"} fontWeight={500} pb="50px">
          One last step, add a presentable profile image.
        </Text>
        <VStack spacing={4} align="center" mb={"20px"}>
          {/* Profile Image with Camera Icon */}
          <Box position="relative" w="180px" h="180px">
            <Avatar size="full" src={image} name="" />
            <IconButton
              aria-label="Change Profile Picture"
              icon={<FaCamera />}
              position="absolute"
              bottom="0"
              right="0"
              borderRadius="full"
              bg="gray.100"
              size="md"
              colorScheme="gray"
              _hover={{ bg: "gray.200" }}
              onClick={() => document.getElementById("fileInput").click()}
            />
          </Box>

          {/* Hidden File Input */}
          <Input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            display="none"
          />

          {/* Change Profile Button */}
          <Flex justify={"space-between"} gap={"30px"} mt="50px" w={"100%"}>
            <CustomBtn
              text={"skip for now"}
              handleClick={() => {
                navigate("/login");
              }}
              bg={"none"}
              border={"1px solid #fff"}
              width={"full"}
            />
            <CustomBtn
              text={"upload image"}
              bg={_COLORS?.brand}
              loading={isUpdateMutating}
              // handleClick={() => document.getElementById("fileInput").click()}
              handleClick={handleSubmit}
              width={"full"}
            />
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

export default FreelanceProfilePicModal;
