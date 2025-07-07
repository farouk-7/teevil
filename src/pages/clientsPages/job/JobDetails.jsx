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
import FormInput from "../../../component/FormInput";
import { CustomBtn } from "../../../component/CustomBtn";
import { _COLORS } from "../../../constants/colors";
import { FaBagShopping } from "react-icons/fa6";

const JobDetails = ({ data, isOpen, onClose, finalFocusRef }) => {
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
          <DrawerHeader>{data?.status==="closed"?"Re-Post Job":"Job Details"}</DrawerHeader>

          <DrawerBody mt="40px">
            <Box
              bg={"#2C2C2C"}
              color={"#fff"}
              p={"20px"}
              borderRadius={"10px"}
              w={"250px"}
            >
              <Flex align={"center"} gap={"20px"}>
                <Box bg={"#E9FCFF"} borderRadius={"50px"} p={"10px"}>
                  {<FaBagShopping color="#000" />}
                </Box>
                <Text fontSize={"15px"}>{"Job Proposal Alert"}</Text>
              </Flex>
              <Flex
                mt="20px"
                fontWeight={800}
                fontSize={"25px"}
                justify={"space-between"}
                align={"baseline"}
              >
                <Text>{data?.proposal}</Text>
                <CustomBtn
                  text={"View Proposal"}
                  bg={"none"}
                  color={_COLORS?.brand}
                />
              </Flex>
            </Box>
            <Box mt="30px">
              <Text fontSize={"25px"} fontWeight="bold">
                {data?.project}
              </Text>
              <Text maxW={"500px"} pt="10px">
                We're looking for a creative and experienced designer to develop
                innovative product packaging for our new skincare line. The
                design should reflect eco-friendliness, modern aesthetics, and
                appeal to a youthful audience. You’ll collaborate with our brand
                and marketing teams to bring our product identity to life
                through packaging.
              </Text>
              <Box my="20px">
                <Text fontWeight={"bold"}>Key Responsibilities:</Text>
                <Box mt="10px">
                  <Text>
                    . Conceptualize and design primary and secondary product
                    packaging.
                  </Text>
                  <Text>
                    . Ensure designs are print-ready and meet manufacturer
                    specifications.
                  </Text>
                  <Text>
                    . Present mockups and revisions based on feedback.
                  </Text>
                </Box>
              </Box>
              <Box>
                <Text fontWeight={"bold"}>Required Skills:</Text>
                <Box mt="10px">
                  <Text>
                    . Proficiency in Adobe Illustrator, Photoshop, and packaging
                    design software.
                  </Text>
                </Box>
              </Box>
               <Box my="20px">
                <Text fontWeight={"bold"}>Exprienced Level:</Text>
                <Box mt="10px">
                  <Text>
                   Intermediate to Expert
                  </Text>
                </Box>
              </Box>
                <Box >
                <Text fontWeight={"bold"}>Job Type:</Text>
                <Box mt="10px">
                  <Text>
                   Contract
                  </Text>
                </Box>
              </Box>
                <Box my="20px">
                <Text fontWeight={"bold"}>Pricing Model:</Text>
                <Box mt="10px">
                  <Text>
                   Fixed
                  </Text>
                </Box>
              </Box>
                <Box>
                <Text fontWeight={"bold"}>Budget</Text>
                <Box mt="10px">
                  <Text>
                   {data?.budget}
                  </Text>
                </Box>
              </Box>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            {data?.status==="closed" ? (
              <Flex justify={"flex-end"} gap={"20px"}>
                <CustomBtn text={"Repost Job"} color={"#000"} handleClick={onClose}/>
                <CustomBtn text={"Cancel"} color={"#fff"} border={"1px solid #fff"} bg={"none"} handleClick={onClose}/>
              </Flex>
            ):data?.status==="drafted" ?(
               <Flex justify={"flex-end"} gap={"20px"}>
                <CustomBtn text={"Post Job"} color={"#000"} handleClick={onClose}/>
                <CustomBtn text={"Cancel"} color={"#fff"} border={"1px solid #fff"} bg={"none"} handleClick={onClose}/>
              </Flex>
            ):(
               <CustomBtn text={"Close"} color={"#000"} handleClick={onClose}/>
            )
            }
          
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default JobDetails;
