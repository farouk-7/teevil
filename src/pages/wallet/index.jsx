import React from "react";
import CardHeader from "../../component/CardHeader";
import { Box, Flex } from "@chakra-ui/react";
import CardsComponents from "./components/CardsComponents";
import CustomModal from "../../component/CustomModal"
import { CustomBtn } from "../../component/CustomBtn";
import { _COLORS } from "../../constants/colors";
import WalletTable from "./components/WalletTable";

const Wallet = () => {
  return (
    <Box>
      <CardHeader>
        <Flex justifyContent={"space-between"} gap={"20px"} align={"center"} mt="70px">
          <Box flex={1}><CardsComponents text="Total Expected Earnings" amount="125000"/></Box>
          <Box flex={1}><CardsComponents text="Total Paid" amount="125000"/></Box>
          <Box flex={1}><CardsComponents text="Total Balance" amount="125000"/></Box>
          <Box border={"1px solid #fff"} p={"10px 15px"} borderRadius={"10px"}>
            <CustomModal icon={<CustomBtn text={"Request Payout"} bg={_COLORS?.white} color={_COLORS?.brand} />} />
          </Box>
        </Flex>
      </CardHeader>
      <Box my={"50px"}>
          <WalletTable DBsearchID={"name"}/>
        </Box>
    </Box>
  );
};

export default Wallet;
