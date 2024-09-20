import { Box } from '@chakra-ui/react'
import CardHeader from "../../component/CardHeader"
import {CustomBtn} from "../../component/CustomBtn"
import EventTable from './components/EventTable'

const MyEvent = () => {
  return (
   <Box>
    <CardHeader>

    </CardHeader>
    <Box my="30px">
       <CustomBtn text={"My Service List"}/> 
    </Box>

    <Box>
        <EventTable />
    </Box>
    
   </Box>
  )
}

export default MyEvent