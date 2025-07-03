import React from 'react'
// import CustomTable from '../../../component/CustomTable';
import { Box, Flex, Image, Text, Tr } from '@chakra-ui/react';
import CustomTable from "../../../component/CustomTable"
import AllProjectsAction from './AllProjectsAction';
import five from "../../../assets/five.png"
import three from "../../../assets/three.png"
import two from "../../../assets/two.png"

const AllProjectsTable = ({data, refetch}) => {
   
      const headerNames = ["project Title", "Project Deadline","Task","Collaborators","Sections","Project Status",""];
  return (
    <Box>
          <CustomTable DBdata={data} head={headerNames}>
            {(data) => {
              return data?.map((event, idx) => (
                <Tr key={event?.id}>
                  {/* <CustomTable.Td>{idx + 1}.</CustomTable.Td> */}
                  <CustomTable.Td >
                    {/* <CustomTable.LimitedText limit={70} {...CustomTable.style}> */}
                    <Flex flexDir={"column"}>
                      <Text>{event?.title || "N/A"}</Text>
                      {/* <Text>{event?.email || "N/A"}</Text> */}
                    </Flex>
    
                    {/* </CustomTable.LimitedText> */}
                  </CustomTable.Td>
                  <CustomTable.Td>{event?.deadline}</CustomTable.Td>
                  <CustomTable.Td>{event?.task || "N/A"}</CustomTable.Td>
                  <CustomTable.Td>
                    <Flex align={"center"} gap={"10px"}>
                      {
                        event?.collaborators>=5?(
                         <Image src={five}/>
                        ):event?.collaborators==3?(
                          <Image src={three}/>
                        ):event?.collaborators==2?(
                          <Image src={two}/>
                        ):event?.collaborators
                      }
                     
                     <Text fontSize={"18px"}>{event?.collaborators || "N/A"}</Text>
                    </Flex>
                    
                  </CustomTable.Td>
                  <CustomTable.Td>{event?.sections.length || "N/A"}</CustomTable.Td>
                  <CustomTable.Td>
                   <Text borderRadius={"8px"} bg={event?.status==="review"?"#FE9C7214":event?.status==="in-progress"?"#2270EE38":"#1CBD2142"} textAlign={"center"}>{event?.status || "N/A"}</Text> 
                  </CustomTable.Td>
                  <CustomTable.Td>
                  <AllProjectsAction event={event} refetch={refetch}/>
                </CustomTable.Td>
               
                 
    
                 
                </Tr>
              ));
            }}
          </CustomTable>
        </Box>
  )
}

export default AllProjectsTable