import { Box, Flex, Image, Text } from "@chakra-ui/react";

const OrderCards = ({ text, icon, amount }) => {
  return (
    <Box bg={"#fff"} p={"20px 15px"} borderRadius={"10px"}>
      <Flex justifyContent={"space-between"} align={"center"} mb={"40px"}>
        <Text
          fontWeight={500}
          fontSize={"20px"}
          color={
            text === "Pending"
              ? "#CD4E34"
              : text === "Active"
              ? "#16171D"
              : text === "Delivered"
              ? "#7B5DD6"
              : "#16171D"
          }
        >
          {text}
        </Text>
        <Image src={icon} />
      </Flex>
      <Text fontWeight={"bold"} fontSize={"25px"}>
        {amount}
      </Text>
    </Box>
  );
};

export default OrderCards;
