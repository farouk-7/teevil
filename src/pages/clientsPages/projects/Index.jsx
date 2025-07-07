import { Box, Flex, Tab, TabList, Tabs, useDisclosure } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import CardHeader from "../../../component/CardHeader"
import { CustomBtn } from '../../../component/CustomBtn'
import { FaPlus } from 'react-icons/fa'
import AllProject from './components/AllProject'
import ActiveProject from './components/ActiveProject'
import SuspendedProject from './components/SuspendedProject'
import PostProject from './components/PostProject'



const payments = [
  {
    deadline: "2025-02-20",
    projectTitle: "E-commerce Website",
    freelancer: { name: "Marcel Williams", email: "marcelw@gmail.com", avatar: "" },
    amount: "$2,000",
    status: "completed",
    task: "10/60",
    section:"10",
    collaborators:"7+"
  },
  {
    deadline: "2025-02-20",
    projectTitle: "Mobile App UI Design",
    freelancer: { name: "Vincent Green", email: "vincentg@gmail.com", avatar: "" },
    amount: "$2,000",
    status: "completed",
    task: "0/0",
    section:"1",
    collaborators:"2+"
  },
  {
    deadline: "2025-02-20",
    projectTitle: "Marketing Strategy",
    freelancer: { name: "Lauren Palmer", email: "laurenp@gmail.com", avatar: "" },
    status: "inprogress", 
    task: "3/7",
    section:"3",
    collaborators:"2+"
  },

];

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
    const [tabToShow, setTabToShow] = useState("all")
  return (
    <Box h={"100vh"}>
        <CardHeader></CardHeader>

         <Flex align={"center"} justify={"space-between"} mt="40px" >
                  <Box>
                    <Tabs variant="unstyled" mt="10px">
                      <TabList
                        bg={"#2C2C2C"}
                        p={"5px"}
                        borderRadius={"10px"}
                        w={"fit-content"}
                        color={"#B5B5B5"}
                        gap={"0px"}
                      >
                        <Tab
                          _selected={{ color: "#000", bg: "#F5F5F5" }}
                          borderRadius={"10px"}
                          px="10px"
                          fontWeight={"bold"}
                          onClick={() => {
                            setTabToShow("all");
                          }}
                        >
                         All Projects({payments.length})
                        </Tab>
                        <Tab
                          _selected={{ color: "#000", bg: "#F5F5F5" }}
                          borderRadius={"10px"}
                          px="10px"
                          fontWeight={"bold"}
                          onClick={() => {
                            setTabToShow("active");
                          }}
                        >
                          Active Projects()
                        </Tab>
                        <Tab
                          _selected={{ color: "#000", bg: "#F5F5F5" }}
                          borderRadius={"10px"}
                          px="10px"
                          fontWeight={"bold"}
                          onClick={() => {
                            setTabToShow("suspended");
                          }}
                        >
                          Suspended Projects()
                        </Tab>
                      </TabList>
                    </Tabs>
                  </Box>
                  <CustomBtn text={"Add New Project"} color={"#000"} childComp={<FaPlus />} ref={btnRef}
            handleClick={onOpen}/>
                </Flex>
                <Box mt="30px">
                    {tabToShow==="all"?<AllProject payments={payments}/> : tabToShow === "active" ? <ActiveProject /> : <SuspendedProject />}
                </Box>
                 <PostProject isOpen={isOpen} finalFocusRef={btnRef} onClose={onClose}/>


    </Box>
  )
}

export default Projects