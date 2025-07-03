import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import FormInput from '../../../component/FormInput'
import { CustomBtn } from '../../../component/CustomBtn'
import CustomModal from '../../../component/CustomModal'
import SendProposal from './SendProposal'

const JobComponent = ({isOpen, onClose, btnRef, refetch, datum}) => {
  // console.log(datum,"SHAQsss")
  return (
    <Box>
       <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                size={"lg"}
                ref={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent bg="#141414" color="#fff">
                  <DrawerCloseButton bg="#FBBF24" color="#000" />
                  <DrawerHeader fontSize={"25px"}>Job Details</DrawerHeader>
        
                  <DrawerBody mt="20px">
                    {/* <Input placeholder='Type here...' /> */}
                  
                    <Box mt={"30px"}>
                      <Box>
                        <Text fontSize={"25px"} fontWeight={500}>
                          {datum?.title}
                        </Text>
                        <Text py={"20px"} fontSize={"20px"}>
                          {datum?.description}
                        </Text>
                        <Box>
                          <Text fontSize={"25px"} fontWeight={500}>Key Responsibilties:</Text>
                        </Box>

                        <Box my="20px">
                          <Text fontSize={"25px"} fontWeight={500}>Required Skills:</Text>
                        </Box>

                         <Box >
                          <Text fontSize={"25px"} fontWeight={500}>Experience Level:</Text>
                        </Box>

                         <Box my="20px">
                          <Text fontSize={"25px"} fontWeight={500}>Job Type:</Text>
                          <Flex align={"center"} gap={"10px"}>
                            <Text fontSize={"20px"} py="10px">{datum?.jobType}</Text>
                          </Flex>
                        </Box>

                         <Box >
                          <Text fontSize={"25px"} fontWeight={500}>Pricing Model:</Text>
                          <Text  fontSize={"20px"} py>Hourly Rate</Text>
                        </Box>

                         <Box my="20px">
                          <Text fontSize={"25px"} fontWeight={500}>Budget:</Text>
                          <Text  fontSize={"20px"} >${datum?.budget} per hour</Text>
                        </Box>

                        <Flex justifyContent={"flex-end"} align={"center"} gap={"20px"} my="30px">
                          <CustomModal bg={"#2C2C2C"} headerColor={"#fff"} header={"send your proposal on this project"} icon={<CustomBtn text={"Send Proposal"} color={'#000'}/>}>
                          <SendProposal datum={ datum} refetch= {refetch}/>
                          </CustomModal>
                          <CustomBtn text={"Cancel"} border={"1px solid #fff"} bg={"none"}/>
                        </Flex>
                    
        
                        
                      </Box>
                    
                    </Box>
                  </DrawerBody>
        
                  {/* <DrawerFooter>
                    <Flex align={"center"} gap={"40px"}>
                     
                      <Button variant="outline" mr={3} onClick={onClose} color={"#fff"}>
                        Cancel
                      </Button>
                    </Flex>
                  </DrawerFooter> */}
                </DrawerContent>
          </Drawer>
    </Box>
  )
}

export default JobComponent