import {
  Avatar,
  Box,
  Checkbox,
  Flex,
  FormLabel,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FormInput from "../../../component/FormInput";
import { BsPlus } from "react-icons/bs";
import cross from "../../../assets/cross.png";
import { CustomBtn } from "../../../component/CustomBtn";
import { _COLORS } from "../../../constants/colors";

const CreateTask = ({datum, refetch}) => {
  const [formValues, setFormValues] = useState({
    title:"",
    content:"",
    priority:"",
    status:"",
    section:"",
    assignedTo:"",
    project:"",
    dueDate:"",
    files:"",
    tasks:"",
  })
  return (
    <Flex color={"#fff"} gap={"20px"}>
      <Box flex={2}>
        <Text fontSize={"20px"} fontWeight={500}>
          Create Task
        </Text>

        <FormInput label={"Task Title"} mt={"20px"} />

        <FormInput lines={5} label={"Description"} mt={"20px"} />

        <Box mt="30px">
          <Flex align={"center"} justify={"space-between"}>
            <Text fontSize={"18px"} fontWeight={400}>
              SUB-TASKS
            </Text>
            <BsPlus size={30} />
          </Flex>
          <Box my={"20px"}>
            <Flex align={"center"} gap={"15px"}>
              <Image src={cross} />
              <Checkbox size={"lg"} />
              <Text>set primary goals for the product design</Text>
            </Flex>
            <Flex align={"center"} gap={"15px"} my="20px">
              <Image src={cross} />
              <Checkbox size={"lg"} />
              <Text>set primary goals for the product design</Text>
            </Flex>
            <FormInput placeholder="Align goals" />
          </Box>
        </Box>
        <Flex justify={"flex-end"} align={"center"}>
          <CustomBtn text="Discard" color={"#fff"} bg={"none"} />
          <CustomBtn text="Save task" color={_COLORS?.brand} bg={"none"} />
        </Flex>
      </Box>

      <Flex flex={1.5} align={"start"} gap={"10px"}>
        <Box h={"100%"} w={"2px"} bg={"#3D3D3D"}>
            
        </Box>
        <Box>
          <Text>Attributes</Text>

          <Box my="20px">
            <FormLabel>Priority</FormLabel>
            <Select style={{color:"white",}}>
              <option value={"high"} style={{background:"black"}}>High</option>
              <option value={"mid"} style={{background:"black"}}>Mid</option>
              <option value={"low"} style={{background:"black"}}>low</option>
            </Select>
          </Box>

          <Box>
            <Text>Assigned to?</Text>
            <Flex
              border={"1px solid #fff"}
              p={"5px"}
              gap={"10px"}
              borderRadius={"8px"}
              align={"center"}
            >
              <Flex
                p={"4px"}
                bg={"#3D3D3D"}
                borderRadius={"8px"}
                align={"center"}
                gap={"10px"}
              >
                <Avatar name="Alex Brown" size={"sm"} />
                <Text>Alex Brown</Text>
              </Flex>

              <Flex
                p={"4px"}
                bg={"#3D3D3D"}
                borderRadius={"8px"}
                align={"center"}
                gap={"10px"}
              >
                <Avatar name="Jane Smith" size={"sm"} />
                <Text>Jane Smith</Text>
              </Flex>
            </Flex>
          </Box>

          <Box my="20px">
            <FormInput type={"date"} label={"Due Date"}/>
          </Box>

          <Flex mt="200px" justify={"flex-end"} gap={"10px"}>
            <CustomBtn text={"Create Task"} color={"#fff"} />
            <CustomBtn text={"Cancel"} bg={"none"} border={"1px solid #fff"}/>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CreateTask;
