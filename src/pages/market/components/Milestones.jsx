import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { _COLORS } from "../../../constants/colors";
import {CustomBtn} from "../../../component/CustomBtn"

const Milestones = () => {
  return (
    <Box>
      <Accordion defaultIndex={[0]} allowMultiple>

        <AccordionItem border={"1px solid #A0AEC0"} borderRadius={"10px"}>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontWeight={"bold"}
              fontSize={"20px"}
            >
              Check Out Our Venue
            </Box>
            <Text pr={"100px"} fontSize={"20px"} fontWeight={"bold"}>₦200,000</Text>
            <AccordionIcon />
          </AccordionButton> 
          <AccordionPanel pb={4}>
            <Flex gap={"10px"}fontWeight={"bold"}>
              <Text >Milestone Status:</Text>
              <Text color={"#0CAF60"}>completed</Text>
            </Flex>
            <Text pt="10px" maxW={"1000px"} color={"#606778"}>
              Facilitating a smooth transition to official recognition. Our
              company registration services offer a seamless pathway to
              establishing your business entity with precision and efficiency.
              With a commit
            </Text>
            <Box mt="20px" color={"#606778"}>
                <Text fontWeight={"bold"}>Submitted Requirement</Text>
                <Text>IMG.2EGYYU3.PNG</Text>
                {/* <Text p={"5px 10px"} bg="#17A1FA">Photo Sample</Text> */}
            </Box>
            <Box mt={"20px"} p={"8px"} borderRadius={"10px"} border={"1px solid #17a1fa"} color={"#17A1FA"} bg={"#B5DEF9"} w={"fit-content"} fontWeight={"bold"}>
              <Text>Photo Sample</Text>
            </Box>
          </AccordionPanel>
        </AccordionItem>


        <AccordionItem border={"1px solid #A0AEC0"} borderRadius={"10px"} my="20px">
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontWeight={"bold"}
              fontSize={"20px"}
            >
              Check Out Our Venue
            </Box>
             <Text pr={"100px"} fontSize={"20px"} fontWeight={"bold"}>₦200,000</Text>
            <AccordionIcon />
          </AccordionButton> 
          <AccordionPanel pb={4}>
            <Flex gap={"10px"}fontWeight={"bold"}>
              <Text fontWeight={"bold"}>Milestone Status:</Text>
              <Text color={"#0CAF60"}>completed</Text>
            </Flex>
            <Text pt="10px" maxW={"1000px"} color={"#606778"}>
              Facilitating a smooth transition to official recognition. Our
              company registration services offer a seamless pathway to
              establishing your business entity with precision and efficiency.
              With a commit
            </Text>
            <Box mt="20px" color={"#606778"}>
                <Text fontWeight={"bold"}>Submitted Requirement</Text>
                <Flex gap={"5px"} >
                  <Text>1.</Text>
                  <Text>Provide Venue Image</Text>
                </Flex>
                <Flex gap={"5px"} >
                  <Text>2.</Text>
                  <Text>Send a message</Text>
                </Flex>
                <Flex mt={"20px"} justifyContent={"space-between"}>
                  <Box><Input type="file" bg={"#B3BDCB"} focusBorderColor={_COLORS?.brand}/></Box>
                  <Box><CustomBtn text={"submit"}/></Box>
                </Flex>

                
            </Box>
          </AccordionPanel>
        </AccordionItem>



       
      </Accordion>
    </Box>
  );
};

export default Milestones;
