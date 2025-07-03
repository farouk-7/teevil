import { Box, Flex, Tab, TabList, Tabs } from '@chakra-ui/react'
import React, { useState } from 'react'
import CardHeader from "../../../component/CardHeader"
import { CustomBtn } from '../../../component/CustomBtn'
import { FaPlus } from 'react-icons/fa'
import AllProject from './components/AllProject'
import ActiveProject from './components/ActiveProject'
import SuspendedProject from './components/SuspendedProject'

const Projects = () => {
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
                         All Projects()
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
                  <CustomBtn text={"Add New Project"} color={"#000"} childComp={<FaPlus />}/>
                </Flex>
                <Box mt="30px">
                    {tabToShow==="all"?<AllProject/> : tabToShow === "active" ? <ActiveProject /> : <SuspendedProject />}
                </Box>

    </Box>
  )
}

export default Projects