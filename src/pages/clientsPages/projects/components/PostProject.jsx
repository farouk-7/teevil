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
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FormInput from "../../../../component/FormInput";
import { CustomBtn } from "../../../../component/CustomBtn";
import { _COLORS } from "../../../../constants/colors";
import { MdCalendarToday } from "react-icons/md";
import { BsPlus, BsTrash } from "react-icons/bs";

const PostProject = ({ data, isOpen, onClose, finalFocusRef }) => {
  console.log(data, "PELU");
//   const [formValues, setFormValues] = useState({
//     project: data?.project,
//   });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const [formValues, setFormValues] = useState({
      title: "",
      description: "",
      projectType: "",
      deadline: "",
      section: [""],
    });

   const [inputs, setInputs] = useState(formValues.section);
  
    const handleAddInput = () => {
      const updatedInputs = [...inputs, ""];
      setInputs(updatedInputs);
      setFormValues((prev) => ({ ...prev, section: updatedInputs }));
    };
  
    const handleSectionChange = (index, value) => {
      const updatedInputs = [...inputs];
      updatedInputs[index] = value;
      setInputs(updatedInputs);
      setFormValues((prev) => ({ ...prev, section: updatedInputs }));
    };
    const handleDeleteInput = (index) => {
      const updatedInputs = [...inputs];
      updatedInputs.splice(index, 1);
      setInputs(updatedInputs);
      setFormValues((prev) => ({ ...prev, section: updatedInputs }));
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
          <DrawerHeader>{!data ? "Add New Project" : "Edit Job"}</DrawerHeader>

          <DrawerBody mt="40px">
            {/* <Input placeholder='Type here...' /> */}
            <FormInput
              label={"Project Title"}
              focusBorderColor={_COLORS?.brand}
              name="project"
              value={formValues?.project}
              handleChange={handleChange}
            />
            <FormInput
              lines={5}
              label={"Project Description"}
              mt={"30px"}
              name="description"
              // value={formValues?.description}
              // handleChange={handleChange}
            />
            <FormInput
              
              label={"Project Deadline"}
              mt={"30px"}
              name="deadline"
              type={"date"}
              rightIcon={<MdCalendarToday color={_COLORS?.brand}/>}
              
              
              

              // value={formValues?.description}
              // handleChange={handleChange}
            />
             <Box mt={"30px"}>
              <Flex align={"center"} justify={"space-between"}>
                <Text fontSize={"1em"} fontWeight={500}>
                  Project Section
                </Text>

                <CustomBtn
                  text={"Add More"}
                  childComp={<BsPlus size={30} />}
                  handleClick={handleAddInput}
                  color={"#FBBF24"}
                  bg={"none"}
                />
              </Flex>
              {inputs.map((value, index) => (
                <Flex key={index} gap={2} mb={3} align={"center"}>
                  <FormInput
                    mb="10px"
                    value={value}
                    placeholder={`Product Section ${index + 1}`}
                    handleChange={(e) =>
                      handleSectionChange(index, e.target.value)
                    }
                  />

                  <Flex justify={"flex-end"}>
                    <CustomBtn
                      childComp={<BsTrash size={20} />}
                      color={"#FBBF24"}
                      bg={"none"}
                      handleClick={() => handleDeleteInput(index)}
                    />
                  </Flex>
                </Flex>
              ))}
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Flex align={"center"} justify={"flex-end"} gap={"20px"}>
                <CustomBtn text={"Create Project"} color="#000"/>
                <CustomBtn text={"Cancel"} bg="none" border={"1px solid #fff"}/>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default PostProject;
