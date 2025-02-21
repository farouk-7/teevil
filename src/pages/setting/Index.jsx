import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import CardHeader from '../../component/CardHeader'
import ServiceProviderCard from './components/ServiceProviderCard'
import ServiceDescription from './components/ServiceDescription'
import PersonalInfo from './components/PersonalInfo'
import ManagePassword from './components/ManagePassword'
import { useNavigate } from 'react-router-dom'
import { CustomBtn } from '../../component/CustomBtn'
import { useGetState } from '../../GlobalStateContext/useGetState'

const Setting = () => {
    const {state} = useGetState()
    const navigate = useNavigate()
  return (
    <Box>
        <CardHeader>

        </CardHeader>
        <Flex mt="50px" gap={"50px"} align={"start"} flexDir={["column","column","column","row"]}>
            <Box flex={1} width={"full"}>
                <ServiceProviderCard/>
                <CustomBtn text={"view profile"} mt="20px" handleClick={()=>{
                    navigate("/profile")
                }}/>
            </Box>
            <Box flex={2} width={"full"}><ServiceDescription /></Box>
        </Flex>
        <Flex my={"30px"} gap={"50px"} align={"start"} flexDir={["column","column","column","row"]}> 
            <Box flex={2} width={"full"}>
                <PersonalInfo />
            </Box>
            <Box flex={1.5} width={"full"}>
                <ManagePassword />
            </Box>
        </Flex>
    </Box>
  )
}

export default Setting