import React from "react";
import CardHeader from "../../../component/CardHeader";
import { Avatar, Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { CustomBtn } from "../../../component/CustomBtn";
import CustomModal from "../../../component/CustomModal";
import { BsArrowBarDown, BsArrowDown, BsPlus } from "react-icons/bs";
import two from "../../../assets/two.png";
import { _COLORS } from "../../../constants/colors";
import AddSectionModal from "./AddSectionModal";
import AddCollaborators from "./AddCollaborators";
import CreateTask from "./CreateTask";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSpecificProject } from "../services/Index";
import ShareProject from "./ShareProject";

const ProjectDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const {data:singleProject, isLoading, refetch: refetchProject} = useQuery({
      queryKey:['project'],
      queryFn:()=>getSpecificProject(id)
    })

    

    const projectData = singleProject?.data
    console.log(projectData,"PIPPIN")


  return (
    <Box height={"100%"} color={"#fff"}>
      <CardHeader></CardHeader>
      <Flex mt={"70px"} justify={"space-between"} align={"center"}>
        <Box>
          <Text fontWeight={500} fontSize={"30px"}>
            {projectData?.title}
          </Text>
        </Box>
        <Flex align={"center"} gap={"20px"}>
          <Box>
            <CustomModal
              header={"Create Section"}
              size={"2xl"}
              bg={"#2C2C2C"}
              headerColor={"#fff"}
              icon={
                <CustomBtn
                  childComp={<BsPlus size={30} />}
                  text={"Add Sections"}
                  color={"#000"}
                  fontSize={"20px"}
                />
              }
            >
              <AddSectionModal projectData = {projectData} refetch={()=>refetchProject()} />
            </CustomModal>
          </Box>
          <Box>
            <CustomModal
              size={"2xl"}
              bg={"#2C2C2C"}
              headerColor={"#fff"}
              header={"Add Collaborators"}
              icon={
                <CustomBtn
                  childComp={<BsPlus size={30} />}
                  text={"Add Collaborators"}
                  color={"#fff"}
                  bg={"none"}
                  border={"1px solid #fff"}
                  fontSize={"20px"}
                />
              }
            >
              <AddCollaborators  data = {projectData} refetch={()=>refetchProject()}/>
              {/* <ShareProject /> */}
            </CustomModal>
          </Box>
          <Box>
            <CustomModal
              icon={
                <CustomBtn
                  //   childComp={<BsPlus size={30} />}
                  rightIcon={<BsArrowDown />}
                  text={"In Progress"}
                  color={"#fff"}
                  bg={"none"}
                  border={"1px solid #fff"}
                  fontSize={"20px"}
                />
              }
            ></CustomModal>
          </Box>
        </Flex>
      </Flex>
      <Flex
        mt="100px"
        mb={"50px"}
        justify={"space-between"}
        gap={"50px"}
        align={"start"}
      >
        {
          projectData?.sections?.map((datum)=>(
             <Box flex={1} key={datum?._id} bg={"#2C2C2C"} borderRadius={"10px"} p={"20px"}>
          <Flex
            align={"center"}
            fontSize={"20px"}
            justify={"space-between"}
            fontWeight={700}
          >
            <Text>{datum?.title}</Text>

            <CustomModal
              size={"3xl"}
              bg={"#2C2C2C"}
              headerColor={"#fff"}
              header={""}
              icon={<BsPlus size={30} />}
            >
                <CreateTask datum={datum} refetch={()=>refetchProject()} />

            </CustomModal>
          </Flex>
          <Box mt={"30px"}>
            <Text fontSize={"20px"} fontWeight={400}>
              Collaborators
            </Text>
            <Flex
              bg={"#3D3D3D"}
              p="10px"
              mt="10px"
              borderRadius={"10px"}
              align={"center"}
              justifyContent={"space-between"}
            >
              <Image src={two} />
              <Text fontSize={"20px"} fontWeight={500}>
                2+
              </Text>
            </Flex>
          </Box>

          <Box mt="30px">
            <Text fontSize={"20px"} fontWeight={500}>
              Recently added task
            </Text>
            <Box
              border={"1px dashed #fff"}
              mt="10px"
              p="10px"
              borderRadius={"10px"}
            >
              <Box bg={"#3D3D3D"} p="10px" borderRadius={"10px"}>
                <Text fontWeight={500} fontSize={"20px"}>
                  Create About Us Page
                </Text>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Assigned To:</Text>
                  <HStack>
                    <Text>Jane Star</Text>
                    <Avatar size={"sm"} name="Jane Star" />
                  </HStack>
                </Flex>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Due Date:</Text>

                  <Text>Mar 20, 2025</Text>
                </Flex>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Status:</Text>

                  <Text bg={"#2DAAD391"} px={"15px"} borderRadius={"10px"}>
                    In progress
                  </Text>
                </Flex>
              </Box>
            </Box>

            <Box
              border={"1px dashed #fff"}
              mt="20px"
              p="10px"
              borderRadius={"10px"}
            >
              <Box bg={"#3D3D3D"} p="10px" borderRadius={"10px"}>
                <Text fontWeight={500} fontSize={"20px"}>
                  Create About Us Page
                </Text>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Assigned To:</Text>
                  <HStack>
                    <Text>Alex Brown</Text>
                    <Avatar size={"sm"} name="Alex Brown" />
                  </HStack>
                </Flex>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Due Date:</Text>

                  <Text>Mar 20, 2025</Text>
                </Flex>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Status:</Text>

                  <Text bg={"#2DAAD391"} px={"15px"} borderRadius={"10px"}>
                    In progress
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Box>

          <Text
            color={_COLORS?.brand}
            fontWeight={700}
            fontSize={"20px"}
            onClick={()=>{
                navigate("/project-section-details")
            }}
            textAlign={"center"}
            cursor={"pointer"}
            py="20px"
          >
            View Section Details
          </Text>
        </Box>)
          )
        }
       

        {/* <Box flex={1} bg={"#2C2C2C"} borderRadius={"10px"} p={"20px"}>
          <Flex
            align={"center"}
            fontSize={"20px"}
            fontWeight={700}
            justifyContent={"space-between"}
          >
            <Text>FrontEnd Development</Text>
            <BsPlus size={30} />
          </Flex>
          <Box mt={"30px"}>
            <Text fontSize={"20px"} fontWeight={400}>
              Collaborators
            </Text>
            <Flex
              bg={"#3D3D3D"}
              p="10px"
              mt="10px"
              borderRadius={"10px"}
              align={"center"}
              justifyContent={"space-between"}
            >
              <Image src={two} />
              <Text fontSize={"20px"} fontWeight={500}>
                2+
              </Text>
            </Flex>
          </Box>

          <Box mt="30px">
            <Text fontSize={"20px"} fontWeight={500}>
              Recently added task
            </Text>
            <Box
              border={"1px dashed #fff"}
              mt="10px"
              p="10px"
              borderRadius={"10px"}
            >
              <Box bg={"#3D3D3D"} p="10px" borderRadius={"10px"}>
                <Text fontWeight={500} fontSize={"20px"}>
                  Create About Us Page
                </Text>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Assigned To:</Text>
                  <HStack>
                    <Text>Jane Star</Text>
                    <Avatar size={"sm"} name="Jane Star" />
                  </HStack>
                </Flex>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Due Date:</Text>

                  <Text>Mar 20, 2025</Text>
                </Flex>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Status:</Text>

                  <Text bg={"#2DAAD391"} px={"15px"} borderRadius={"10px"}>
                    In progress
                  </Text>
                </Flex>
              </Box>
            </Box>

            <Box
              border={"1px dashed #fff"}
              mt="20px"
              p="10px"
              borderRadius={"10px"}
            >
              <Box bg={"#3D3D3D"} p="10px" borderRadius={"10px"}>
                <Text fontWeight={500} fontSize={"20px"}>
                  Create About Us Page
                </Text>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Assigned To:</Text>
                  <HStack>
                    <Text>Alex Brown</Text>
                    <Avatar size={"sm"} name="Alex Brown" />
                  </HStack>
                </Flex>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Due Date:</Text>

                  <Text>Mar 20, 2025</Text>
                </Flex>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Status:</Text>

                  <Text bg={"#2DAAD391"} px={"15px"} borderRadius={"10px"}>
                    In progress
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Box>

          <Text
            color={_COLORS?.brand}
            fontWeight={700}
            fontSize={"20px"}
            textAlign={"center"}
            py="20px"
          >
            View Section Details
          </Text>
        </Box>

        <Box flex={1} bg={"#2C2C2C"} borderRadius={"10px"} p={"20px"}>
          <Flex align={"center"} fontSize={"20px"} fontWeight={700}>
            <Text>Product Design</Text>
            <BsPlus size={30} />
          </Flex>
          <Box mt={"30px"}>
            <Text fontSize={"20px"} fontWeight={400}>
              Collaborators
            </Text>
            <Flex
              bg={"#3D3D3D"}
              p="10px"
              mt="10px"
              borderRadius={"10px"}
              align={"center"}
              justifyContent={"space-between"}
            >
              <Image src={two} />
              <Text fontSize={"20px"} fontWeight={500}>
                2+
              </Text>
            </Flex>
          </Box>

          <Box mt="30px">
            <Text fontSize={"20px"} fontWeight={500}>
              Recently added task
            </Text>
            <Box
              border={"1px dashed #fff"}
              mt="10px"
              p="10px"
              borderRadius={"10px"}
            >
              <Box bg={"#3D3D3D"} p="10px" borderRadius={"10px"}>
                <Text fontWeight={500} fontSize={"20px"}>
                  Create About Us Page
                </Text>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Assigned To:</Text>
                  <HStack>
                    <Text>Jane Star</Text>
                    <Avatar size={"sm"} name="Jane Star" />
                  </HStack>
                </Flex>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Due Date:</Text>

                  <Text>Mar 20, 2025</Text>
                </Flex>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Status:</Text>

                  <Text bg={"#2DAAD391"} px={"15px"} borderRadius={"10px"}>
                    In progress
                  </Text>
                </Flex>
              </Box>
            </Box>

            <Box
              border={"1px dashed #fff"}
              mt="20px"
              p="10px"
              borderRadius={"10px"}
            >
              <Box bg={"#3D3D3D"} p="10px" borderRadius={"10px"}>
                <Text fontWeight={500} fontSize={"20px"}>
                  Create About Us Page
                </Text>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Assigned To:</Text>
                  <HStack>
                    <Text>Alex Brown</Text>
                    <Avatar size={"sm"} name="Alex Brown" />
                  </HStack>
                </Flex>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Due Date:</Text>

                  <Text>Mar 20, 2025</Text>
                </Flex>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  mt="10px"
                >
                  <Text color={"#9F9F9F"}>Status:</Text>

                  <Text bg={"#2DAAD391"} px={"15px"} borderRadius={"10px"}>
                    In progress
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Box>

          <Text
            color={_COLORS?.brand}
            fontWeight={700}
            fontSize={"20px"}
            textAlign={"center"}
            py="20px"
          >
            View Section Details
          </Text>
        </Box> */}
      </Flex>
    </Box>
  );
};

export default ProjectDetails;
