import React from "react";
import CardHeader from "../../component/CardHeader";
import { Box, Flex } from "@chakra-ui/react";
import OrderCards from "./components/OrderCards";
import icon from "../../assets/icon.png";
import active from "../../assets/active.png";
import pending from "../../assets/pending.png";
import delivered from "../../assets/delivered.png";
import { CustomBtn } from "../../component/CustomBtn";
import OrderTable from "./components/OrderTable";

const Orders = () => {
  return (
    <Box>
      <CardHeader>
        <Flex
          mt={"60px"}
          justifyContent={"space-between"}
          gap={"20px"}
          align={"center"}
        >
          <Box flex={1}>
            <OrderCards text="Pending" amount="5" icon={pending} />
          </Box>
          <Box flex={1}>
            <OrderCards text="Active" amount="8" icon={active} />
          </Box>
          <Box flex={1}>
            <OrderCards text="Delivered" amount="15" icon={delivered} />
          </Box>
          <Box flex={1}>
            <OrderCards text="Total Services" amount="22" icon={icon} />
          </Box>
        </Flex>
       
      </CardHeader>
      <Box my="30px">
          <CustomBtn text={"My Service List"} />
      </Box>
      <Box>
        <OrderTable />
    </Box>
    </Box>
  );
};

export default Orders;
