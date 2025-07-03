import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { CustomBtn } from '../../../component/CustomBtn'



const data= [
    {
        id:1,
        name:"Micheal Susan",
        email:"mike@gmail.com",
        topic:"Need a skilled developer to build a responsive e-commerce platform",
        text:"Looking for an experienced full-stack developer to create a user-friendly and responsive website for our online retail business",
    },
    {
        id:2,
        name:"Micheal Susan",
        email:"mike@gmail.com",
        topic:"Need a skilled developer to build a responsive e-commerce platform",
        text:"Looking for an experienced full-stack developer to create a user-friendly and responsive website for our online retail business",
    },
    {
        id:3,
        name:"Micheal Susan",
        email:"mike@gmail.com",
        topic:"Need a skilled developer to build a responsive e-commerce platform",
        text:"Looking for an experienced full-stack developer to create a user-friendly and responsive website for our online retail business",
    },
    

]
const Recommendation = () => {
  return (
    <Flex>
        <Flex justify={"space-between"} gap={"20px"}>
            {data.map((datum)=>(
                <Box key={datum?.id} bg="#2C2C2C" p="20px"borderRadius={"20px"}>
                    <Flex my="10px" gap={"10px"} align={"center"}>
                        <Avatar name={datum?.name}/>
                        <Box color={"#fff"}>
                            <Text fontWeight={"bold"} fontSize={"20px"}>{datum?.name}</Text>
                            <Text>{datum?.email}</Text>
                        </Box>
                    </Flex>
                    <Text color={"#fff"} fontSize={"23px"} fontWeight={700} py={"20px"}>{datum?.topic}</Text>
                    <Text color={"#fff"} fontSize={"20px"}>{datum?.text}</Text>
                    <Box my="10px">
                      <CustomBtn text={"View Details"} color={"#FBBF24"} bg={"none"} p={"0px"} fontSize={"20px"}/>   
                    </Box>
                   
                </Box>
            ))}
        </Flex>

    </Flex>
  )
}

export default Recommendation