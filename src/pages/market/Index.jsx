import { Avatar, Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
// import CardHeader from "../../component/CardHeader";
import { useGetState } from "../../GlobalStateContext/useGetState";
import SearchField from "../../component/SearchField";
import { FaBell } from "react-icons/fa";
import Card from "./components/Card";
import { FaBagShopping } from "react-icons/fa6";
import { MdAnalytics } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { formatToNaira } from "../../utils/numberFormat";
import Charts from "./components/Charts";
import { ResponsiveContainer } from "recharts";
import Conversation from "./components/Conversation";
import Recommendation from "./components/Recommendation";
import CardHeader from "../../component/CardHeader";

const Market = () => {
  const { state } = useGetState();
  console.log(state, "uuh");

  return (
    <Box>
      <CardHeader></CardHeader>
      
      <Flex mt={"50px"} gap={"20px"} align={"center"}>
        <Card
          flex={1}
          icon={<FaBagShopping color="black" size={25} />}
          cardText={"Total Earns"}
          subText={formatToNaira(500000)}
        />
        <Card
          flex={1}
          icon={<MdAnalytics color="black" size={25} />}
          cardText={"Total Ongoing Projects"}
          subText={"03"}
          subText1={"View Projects"}
        />
        <Card
          flex={1}
          icon={<MdAnalytics color="black" size={25} />}
          cardText={"Total Completed Projects"}
          subText={"25"}
        />
        <Card
          flex={1}
          icon={<IoBagHandle color="black" size={25} />}
          cardText={"Total Applied Jobs"}
          subText={"250"}
        />
      </Flex>

      <Flex my="50px" gap={"50px"}>
        <Box flex={1}>
          <Text  pb="10px" color={"#fff"}>Project Anaytics</Text>
          <Charts />
        </Box>
        <Box flex={1}>
          <Conversation />
        </Box>
      </Flex>
      <Box my="50px">
        <Recommendation />
      </Box>
    </Box>
  );
};

export default Market;
