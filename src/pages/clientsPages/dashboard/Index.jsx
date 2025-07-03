import { Box, Flex, Grid, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import CardHeader from "../../../component/CardHeader";
// import { useGetState } from "../../GlobalStateContext/useGetState";
import { useGetState } from "../../../GlobalStateContext/useGetState";
import Card from "../../market/components/Card";
import { FaBagShopping } from "react-icons/fa6";
import { formatToNaira } from "../../../utils/numberFormat";
import { MdAnalytics } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import ClientChart from "./components/ClientChart";
import { CustomBtn } from "../../../component/CustomBtn";
import { _COLORS } from "../../../constants/colors";
import ClientChat from "./components/ClientChat";
import ClientTableDashboard from "./components/ClientTableDashboard";

const Dashboard = () => {
  const { state } = useGetState();
  console.log(state, "uuh");

  return (
    <Box >
      <CardHeader></CardHeader>
      <Flex mt={"50px"} gap={"20px"} align={"center"}>
        <Card
          flex={1}
          icon={<FaBagShopping color="black" size={25} />}
          cardText={"Total Job Created"}
          subText={"20"}
        />
        <Card
          flex={1}
          icon={<MdAnalytics color="black" size={25} />}
          cardText={"Total Proposal Alerts"}
          subText={"10"}
          subText1={"View Proposals"}
        />
        <Card
          flex={1}
          icon={<MdAnalytics color="black" size={25} />}
          cardText={"Active Projects"}
          subText={"03"}
        />
        <Card
          flex={1}
          icon={<IoBagHandle color="black" size={25} />}
          cardText={"Completed Projects"}
          subText={"05"}
        />
      </Flex>

      <Box my="30px">
        <Flex gap={"30px"} align={"center"}>
          <Box flex={2}>
            <Flex align={"center"} justify={"space-between"}>
              <Flex align={"center"} gap={"30px"}>
                <Text color={"#fff"}>Project Task Project</Text>
                <Flex
                  color={"#fff"}
                  align={"center"}
                  fontSize={"13px"}
                  gap={"20px"}
                >
                  <HStack>
                    <Text>In Progress</Text>
                  </HStack>
                  <HStack>
                    <Text>Pending</Text>
                  </HStack>
                  <HStack>
                    <Text>Completed</Text>
                  </HStack>
                </Flex>
              </Flex>
              <CustomBtn
                text={"View More"}
                bg={"none"}
                color={_COLORS?.brand}
              />
            </Flex>
            <Flex
              bg={"#2C2C2C"}
              px={"20px"}
              borderRadius={"10px"}
              align={"start"}
              gap={"30px"}
            >
              <ClientChart
                textCenter={"70%"}
                header={"E-commerce Website Redesign"}
                labels={["Used", "Remaining","Others"]}
                values={[30, 40, 30]}
                colors={["#0A644E", "#FBBF24", "#2CAEC2"]}
              />
              <ClientChart
                textCenter={"67%"}
                header={"Mobile App Development"}
                labels={["Completed", "Pending", "Overdue"]}
                values={[50, 30, 20]}
               colors={["#0A644E", "#FBBF24","#2CAEC2"]}
              />
              <ClientChart
                textCenter={"50%"}
                header={"Social Media Campaign"}
                labels={["Male", "Female","Others"]}
                values={[40, 50, 10]}
                colors={["#0A644E", "#FBBF24","#2CAEC2"]}
                />
            </Flex>
          </Box>

          <Box flex={1}>
             <ClientChat />
          </Box>
        </Flex>
      </Box>


      <Box>
        <Flex justify={"space-between"} align={"center"}>
          <Text color={_COLORS?.white}>Recent Transactions</Text>
          <CustomBtn text={"View more"} bg="none" color={_COLORS?.brand}/>
        </Flex>
        <Box w="full">
          <ClientTableDashboard />
        </Box>
      </Box>




    </Box>
  );
};

export default Dashboard;
