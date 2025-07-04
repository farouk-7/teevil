import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FormInput from "../../../component/FormInput";
import { CustomBtn } from "../../../component/CustomBtn";
import { _COLORS } from "../../../constants/colors";

const PostJob = ({ data, isOpen, onClose, finalFocusRef }) => {
  console.log(data, "PELU");
  const [formValues, setFormValues] = useState({
    project: data?.project,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={"lg"}
        finalFocusRef={finalFocusRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#141414" color="#fff">
          <DrawerCloseButton bg="#FBBF24" color="#000" />
          <DrawerHeader>{!data ? "Post New Job" : "Edit Job"}</DrawerHeader>

          <DrawerBody mt="40px">
            {/* <Input placeholder='Type here...' /> */}
            <FormInput
              label={"Job Title"}
              focusBorderColor={_COLORS?.brand}
              name="project"
              value={formValues?.project}
              handleChange={handleChange}
            />
            <FormInput
              lines={5}
              label={"Description"}
              mt={"30px"}
              name="description"
              // value={formValues?.description}
              // handleChange={handleChange}
            />
            <FormInput
              lines={5}
              label={"key Responsibilities"}
              mt={"30px"}
              name="description"
              // value={formValues?.description}
              // handleChange={handleChange}
            />
            <FormInput
              lines={5}
              label={"Required Skills"}
              mt={"30px"}
              name="description"
              // value={formValues?.description}
              // handleChange={handleChange}
            />
          </DrawerBody>

          <DrawerFooter>
            <Flex align={"center"} gap={"40px"}>
              <CustomBtn
                bg={"#FBBF24"}
                color={"#000"}
                // handleClick={handleSubmit}
                // loading={isPending}
                text={!data ? "Post Job" : "Edit Job"}
              />
              {!data && (
                <CustomBtn
                  bg={"none"}
                  border={"1px solid #fff"}
                  color={"#fff"}
                  // handleClick={handleSubmit}
                  // loading={isPending}
                  text={"Save as Draft"}
                />
              )}

              {/* <Button variant="outline" mr={3} onClick={onClose} color={"#fff"}>
                Cancel
              </Button> */}
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default PostJob;
