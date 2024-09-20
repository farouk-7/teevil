import { Box, Flex, Image, Text } from '@chakra-ui/react'
import icon from "../../../assets/icon.png"
import {formatToNaira} from "../../../utils/numberFormat"




const CardsComponents = (props) => {
  return (
    <Box bg={"#fff"} p={"20px 15px"} borderRadius={"10px"}>
        <Flex justifyContent={"space-between"} align={"center"} mb={"40px"}>
         <Text fontWeight={500} fontSize={"20px"}>{props.text}</Text>
         <Image src={icon} />
        </Flex>
        <Text fontWeight={"bold"} fontSize={"20px"}>{formatToNaira(props.amount)}</Text>
    </Box>
  )
}

export default CardsComponents