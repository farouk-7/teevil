import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import CardHeader from '../../component/CardHeader'
import ServiceProviderCard from './components/ServiceProviderCard'
import ServiceDescription from './components/ServiceDescription'
import PersonalInfo from './components/PersonalInfo'
import ManagePassword from './components/ManagePassword'
import { useNavigate } from 'react-router-dom'
import { CustomBtn } from '../../component/CustomBtn'

const Setting = () => {
    const navigate = useNavigate()
  return (
    <Box>
        <CardHeader>

        </CardHeader>
        <Flex mt="50px" gap={"50px"} align={"start"}>
            <Box flex={1}>
                <ServiceProviderCard/>
                <CustomBtn text={"view profile"} mt="20px" handleClick={()=>{
                    navigate("/profile")
                }}/>
            </Box>
            <Box flex={2}><ServiceDescription /></Box>
        </Flex>
        <Flex my={"30px"} gap={"50px"} align={"start"}> 
            <Box flex={2}>
                <PersonalInfo />
            </Box>
            <Box flex={1.5}>
                <ManagePassword />
            </Box>
        </Flex>
    </Box>
  )
}

export default Setting