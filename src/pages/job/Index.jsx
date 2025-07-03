import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import CardHeader from "../../component/CardHeader";
import { CustomBtn } from "../../component/CustomBtn";
import SearchField from "../../component/SearchField";
import { FaFileAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { Grid, GridItem } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getJobs } from "./services/Index";
import FullPageLoader from "../../component/FullPageLoader";
import JobComponent from "./components/JobComponent";
import FormInput from "../../component/FormInput";
import filter from "../../assets/filter.png";
import filterWhite from "../../assets/filterWhite.png";

const data = [
  {
    id: 1,
    name: "Micheal Susan",
    email: "mike@gmail.com",
    topic: "Need a skilled developer to build a responsive e-commerce platform",
    text: "Looking for an experienced full-stack developer to create a user-friendly and responsive website for our online retail business",
  },
  {
    id: 2,
    name: "Micheal Susan",
    email: "mike@gmail.com",
    topic: "Need a skilled developer to build a responsive e-commerce platform",
    text: "Looking for an experienced full-stack developer to create a user-friendly and responsive website for our online retail business",
  },
  {
    id: 3,
    name: "Micheal Susan",
    email: "mike@gmail.com",
    topic: "Need a skilled developer to build a responsive e-commerce platform",
    text: "Looking for an experienced full-stack developer to create a user-friendly and responsive website for our online retail business",
  },

  {
    id: 4,
    name: "Micheal Susan",
    email: "mike@gmail.com",
    topic: "Need a skilled developer to build a responsive e-commerce platform",
    text: "Looking for an experienced full-stack developer to create a user-friendly and responsive website for our online retail business",
  },
  {
    id: 5,
    name: "Micheal Susan",
    email: "mike@gmail.com",
    topic: "Need a skilled developer to build a responsive e-commerce platform",
    text: "Looking for an experienced full-stack developer to create a user-friendly and responsive website for our online retail business",
  },
  {
    id: 6,
    name: "Micheal Susan",
    email: "mike@gmail.com",
    topic: "Need a skilled developer to build a responsive e-commerce platform",
    text: "Looking for an experienced full-stack developer to create a user-friendly and responsive website for our online retail business",
  },
];

const Jobs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
   const btnRef = useRef();
  const {
    isOpen: isOpens,
    onOpen: onOpens,
    onClose: onCloses,
  } = useDisclosure();
 
  const btnRefs = useRef();
  const {
    data: allJobs,
    isLoading,
    refetch: fetchProjects,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });

  // console.log(allJobs,"JOBS")

  const jobData = allJobs?.data?.data;
  // console.log(jobData, "JOBSD");

  return isLoading ? (
    <FullPageLoader />
  ) : (
    <Box h={"100vh"}>
      <CardHeader></CardHeader>

      <Flex mt={"50px"} justify={"space-between"}>
        <Box>
          <CustomBtn
            text={"Job Filter"}
            color={"#000"}
            ref={btnRefs}
            handleClick={onOpens}
            rightIcon={<Image src={filter} />}
          />
        </Box>

        <HStack spacing={"20px"}>
          <Box>
            <CustomBtn
              text={"Newest"}
              rightIcon={<Image src={filterWhite} />}
              bg={"none"}
              border="1px solid #fff"
              color={"#fff"}
            />
          </Box>

          <Box>
            <SearchField placeholder={"Job title or keyword"} />
          </Box>
        </HStack>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="50px">
        {/* <GridItem justify={"space-between"} gap={"20px"}> */}
        {jobData?.map((datum) => (
          <>
            <GridItem key={datum?._id} bg="#2C2C2C" borderRadius={"20px"}>
              <Box p="20px">
                <Flex my="10px" gap={"10px"} align={"center"}>
                  <Avatar
                    name={
                      datum?.createdBy?.firstName +
                      " " +
                      datum?.createdBy?.lastName
                    }
                  />
                  <Box color={"#fff"}>
                    <Text fontWeight={"bold"} fontSize={"20px"}>
                      {datum?.createdBy?.firstName +
                        " " +
                        datum?.createdBy?.lastName}
                    </Text>
                    <Text>{datum?.createdBy.email}</Text>
                  </Box>
                </Flex>
                <Text
                  color={"#fff"}
                  fontSize={"23px"}
                  fontWeight={700}
                  py={"20px"}
                >
                  {datum?.title}
                </Text>
                <Text color={"#fff"} fontSize={"20px"}>
                  {datum?.description}
                </Text>
                <Flex justify={"space-between"} mt="20px" color={"#fff"}>
                  <Flex align={"center"} gap={"10px"} opacity={"80%"}>
                    <FaFileAlt />
                    <Text>{datum?.proposals.length} Proposal sent</Text>
                  </Flex>

                  <Flex align={"center"} gap={"10px"} opacity={"30%"}>
                    <FaRegClock />
                    <Text>Posted days ago</Text>
                  </Flex>
                </Flex>
              </Box>
              <Divider />
              <Flex p={"20px"} justify={"space-between"}>
                <Flex align={"center"}>
                  <Text color={"#fff"} fontWeight={"bold"} fontSize={"25px"}>
                    ${datum?.budget}
                  </Text>
                  <Text color={"#fff"} opacity={"50%"}>
                    /Hourly
                  </Text>
                </Flex>
                <Box my="10px">
                  <CustomBtn
                    text={"View Details"}
                    ref={btnRef}
                    handleClick={onOpen}
                    color={"#FBBF24"}
                    bg={"none"}
                    p={"0px"}
                    fontSize={"18px"}
                  />
                </Box>
              </Flex>
            </GridItem>
            <JobComponent
              datum = {datum}
              isOpen={isOpen}
              refetch={() => fetchProjects()}
              
              // placement="right"
              onClose={onClose}
              // size={"lg"}
              ref={btnRef}
            />
          </>
        ))}

        {/* </GridItem> */}
      </Grid>

      <Drawer
        isOpen={isOpens}
        placement="right"
        onClose={onCloses}
        size={"sm"}
        ref={btnRefs}
      >
        <DrawerOverlay />
        <DrawerContent bg="#141414" color="#fff" px="50px">
          <DrawerCloseButton bg="#FBBF24" color="#000" />
          <DrawerHeader fontSize={"25px"}>Job Filter</DrawerHeader>

          <DrawerBody mt="20px">
            <Flex flexDir={"column"}>
              <Text fontSize={"25px"} fontWeight={500} pb="20px">
                Job Type
              </Text>
              <Checkbox size="lg" colorScheme="orange" defaultChecked>
                All Job Type
              </Checkbox>

              <Checkbox
                size="lg"
                my={"20px"}
                colorScheme="orange"
                defaultChecked
              >
                Full Time
              </Checkbox>
              <Checkbox size="lg" colorScheme="orange" defaultChecked>
                Part Time
              </Checkbox>
              <Checkbox
                size="lg"
                my={"20px"}
                colorScheme="orange"
                defaultChecked
              >
                Contract
              </Checkbox>
            </Flex>

            <Flex flexDir={"column"} my="30px">
              <Text fontSize={"25px"} fontWeight={500} pb="20px">
                Pricing Model
              </Text>
              <Checkbox size="lg" colorScheme="orange" defaultChecked>
                Hourly Rate
              </Checkbox>

              <Checkbox
                size="lg"
                my={"20px"}
                colorScheme="orange"
                defaultChecked
              >
                FIxed Price
              </Checkbox>
            </Flex>

            <Flex flexDir={"column"}>
              <Text fontSize={"25px"} fontWeight={500} pb="20px">
                Budget Range
              </Text>
              <Checkbox size="lg" colorScheme="orange" defaultChecked>
                $10 - $50
              </Checkbox>

              <Checkbox
                size="lg"
                my={"20px"}
                colorScheme="orange"
                defaultChecked
              >
                $51 - $100
              </Checkbox>
              <Checkbox size="lg" colorScheme="orange" defaultChecked>
                $101 - $500
              </Checkbox>

              <Checkbox
                size="lg"
                my={"20px"}
                colorScheme="orange"
                defaultChecked
              >
                $500 - $1000
              </Checkbox>
              <Checkbox
                size="lg"
               
                colorScheme="orange"
                defaultChecked
              >
                Above $1000
              </Checkbox>
            </Flex>

            <Flex flexDir={"column"} my="30px">
              <Text fontSize={"25px"} fontWeight={500} pb="20px">
                Experience Level
              </Text>
              <Checkbox size="lg" colorScheme="orange" defaultChecked>
                Entry - Level
              </Checkbox>

              <Checkbox
                size="lg"
                my={"20px"}
                colorScheme="orange"
                defaultChecked
              >
                Intermediate
              </Checkbox>
              <Checkbox
                size="lg"
                colorScheme="orange"
                defaultChecked
              >
                Expert
              </Checkbox>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Jobs;
