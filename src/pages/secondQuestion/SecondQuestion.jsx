import { Box, Flex, FormLabel, Image, Progress, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import loginBg from "../../assets/loginBg.png";
import { CustomBtn } from "../../component/CustomBtn";
import { _COLORS } from "../../constants/colors";
import { useQuery } from "@tanstack/react-query";
import { getQuestion } from "./service/second";
import FullPageLoader from "../../component/FullPageLoader";

const SecondQuestion = () => {
  const [selectedSkillId, setSelectedSkillId] = useState(''); // Store the selected user ID
  const type= "primarySkill"
  const { isLoading, isError, data, error, refetch: fetchTasks, } = useQuery({
    queryKey: ["question"],
    queryFn:()=>getQuestion("primarySkill"),
  });
  console.log(data,"question")
  const skillResult = data?.data
  const skilled = skillResult?.slice(0,6)

  const {data:interestData, } = useQuery({
    queryKey: ["question"],
    queryFn:()=>getQuestion("interest"),
  });
  console.log("INTEREST",interestData)



  // const { isLoading, isError, data, error, refetch: fetchTasks, } = useQuery({
  //   queryKey: ["question"],
  //   queryFn:()=>getQuestion("primarySkill"),
  // });




  const handleChange = (event) => {
    setSelectedSkillId(event.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(selectedSkillId,"TYES")

  }



  return isLoading ? (
    <FullPageLoader />
  ):(
    <Box h={"100vh"} overflow={"hidden"} bg={"#000"} color={"#fff"}>
      <Flex justify={"space-between"} flexDir={"row"} gap={"50px"}>
        <Box p={"10px 50px"} flex={1}>
          <Image src={logo} h={"50px"} />
          <Box my="50px">
            <Text pb={"30px"}>2/3</Text>
            <Text fontSize={"30px"}>
              What best describes your primary skill and service?
            </Text>
          </Box>
          <Box>
            <Box>
                <FormLabel>Choose a skill</FormLabel>
              {/* <Select placeholder="Select option" color={"gray.500"}>
              <option value="product" color="black">Product Designer</option>
              <option value="backend">Backend Engineer</option>
              <option value="frontend">Frontend Engineer</option>
            </Select>   */}
            <Select
            focusBorderColor={_COLORS?.brand}
            color={_COLORS?.brand}
          name="skill"
          value={selectedSkillId}
          // onChange={handleChange}
          onChange={handleChange}
          placeholder="Enter Skill"
          >
          {skilled?.map((skil) => (
          <option value={skil?._id}>{skil.skill}</option>
        ))}
          </Select>
            </Box>

            <Box my="30px">
                <FormLabel>What type of work are you interested in?</FormLabel>
              <Select placeholder="Select option" color={"gray.500"}>
              <option value="oneTime" color="black">One-time project</option>
              <option value="fullTime">Fulltime Project</option>
            </Select>  
            </Box>
            <Box>
                <FormLabel>How would you like to get paid?</FormLabel>
              <Select placeholder="Select option" color={"gray.500"}>
              <option value="oneTime" color="black">One-time project</option>
              <option value="fullTime">Fulltime Project</option>
            </Select>  
            </Box>
            
          </Box>
          <Flex mt={"70px"} align={"center"} justifyContent={"space-between"}> 
            <Box width={"150px"}>
            <Progress  value={70} size='xs' colorScheme={"red"}/>
            </Box>
            <Flex align={"center"} gap={"20px"}>
                <Text cursor={"pointer"}>Skip For Now</Text>
                <CustomBtn text={"Next"} bg={_COLORS?.brand} width={"100px"} handleClick={handleSubmit}/>
            </Flex>
          </Flex>
        </Box>

        <Box flex={1}>
          <Image src={loginBg} h={"auto"} />
        </Box>
      </Flex>
    </Box>
  );
};

export default SecondQuestion;
