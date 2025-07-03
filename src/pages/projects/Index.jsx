import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "../market/components/Card";
import CardHeader from "../../component/CardHeader";
import AllProjectsTable from "./components/AllProjectsTable";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { CustomBtn } from "../../component/CustomBtn";
import { BsFileMinus, BsPlus, BsTrash } from "react-icons/bs";
import CustomModal from "../../component/CustomModal";
import FormInput from "../../component/FormInput";
import { useRef } from "react";
import FullPageLoader from "../../component/FullPageLoader";
import { createNewProject, getProjects } from "./services/Index";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = new QueryClient();
  const btnRef = useRef();
  const {
    data: allProjects,
    isLoading,
    refetch: fetchProjects,
  } = useQuery({
    queryKey: ["all-projects"],
    queryFn: getProjects,
  });

  // console.log(allProjects?.data?.data, "MY PROJECTS");
  const projectData = allProjects?.data?.data;
  

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { mutate: createProjectMutation, isPending } = useMutation({
    mutationFn: createNewProject,
    mutationKey: ["project"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project"] });
      refetch && refetch();
      onClose();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formValues,
    };
    createProjectMutation(payload);
  };

  return isLoading ? (
    <FullPageLoader />
  ) : (
    <Box h="100vh">
      <CardHeader></CardHeader>
      <Flex my={"50px"} align={"center"} justify={"space-between"}>
        <Tabs variant="unstyled" mt="10px">
          <TabList
            bg={"#2C2C2C"}
            p={"5px 5px"}
            color={"#fff"}
            borderRadius={"10px"}
            w={"fit-content"}
            gap={"10px"}
          >
            <Tab
              _selected={{ color: "#000", bg: "#F5F5F5" }}
              borderRadius={"10px"}
              //   px="30px"
              fontWeight={"bold"}
              onClick={() => {
                setTabToShow("freelancer");
              }}
            >
              All Projects ({projectData?.length})
            </Tab>
            <Tab
              _selected={{ color: "#000", bg: "#F5F5F5" }}
              borderRadius={"10px"}
              //   px="30px"
              fontWeight={"bold"}
              onClick={() => {
                setTabToShow("client");
              }}
            >
              Shared Projects
            </Tab>
            <Tab
              _selected={{ color: "#000", bg: "#F5F5F5" }}
              borderRadius={"10px"}
              //   px="30px"
              fontWeight={"bold"}
              onClick={() => {
                setTabToShow("client");
              }}
            >
              My Projects
            </Tab>
            <Tab
              _selected={{ color: "#000", bg: "#F5F5F5" }}
              borderRadius={"10px"}
              //   px="30px"
              fontWeight={"bold"}
              onClick={() => {
                setTabToShow("client");
              }}
            >
              Clients Projects
            </Tab>
          </TabList>
        </Tabs>
        <Box>
          <CustomBtn
            childComp={<BsPlus size={30} />}
            ref={btnRef}
            handleClick={onOpen}
            text={"Add New Project"}
            color={"#000"}
            fontWeight={"bold"}
          />
        </Box>
      </Flex>
      <Box>
        <AllProjectsTable data={projectData} refetch={() => fetchProjects()} />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={"lg"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#141414" color="#fff">
          <DrawerCloseButton bg="#FBBF24" color="#000" />
          <DrawerHeader>Add New Project</DrawerHeader>

          <DrawerBody mt="40px">
            {/* <Input placeholder='Type here...' /> */}
            <FormInput
              label={"Project Title"}
              name="title"
              value={formValues?.title}
              handleChange={handleChange}
            />
            <FormInput
             mt={"30px"}
              label={"Project Type"}
              name="projectType"
              value={formValues?.projectType}
              handleChange={handleChange}
            />
            <FormInput
              lines={5}
              label={"Projetc Description"}
              mt={"30px"}
              name="description"
              value={formValues?.description}
              handleChange={handleChange}
            />
            <FormInput
              label={"Project Deadline"}
              mt={"30px"}
              type={"date"}
              name="deadline"
              value={formValues?.deadline}
              handleChange={handleChange}
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
                <Flex key={index} gap={2} mb={3}>
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
            <Flex align={"center"} gap={"40px"}>
              <CustomBtn
                bg={"#FBBF24"}
                color={"#000"}
                handleClick={handleSubmit}
                loading={isPending}
                text={"Create Project"}
              />
              <Button variant="outline" mr={3} onClick={onClose} color={"#fff"}>
                Cancel
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Projects;
