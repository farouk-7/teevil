import { Box, Flex, Tab, TabList, Tabs } from "@chakra-ui/react";
import React, { useState } from "react";
import CardHeader from "../../component/CardHeader";
import Card from "../market/components/Card";
import { FaBagShopping } from "react-icons/fa6";
import { MdAnalytics } from "react-icons/md";
import { formatToNaira } from "../../utils/numberFormat";
import { CustomBtn } from "../../component/CustomBtn";
import PaymentTable from "./components/PaymentTable";
import { useQuery } from "@tanstack/react-query"
import { getAllWithdrawal, getPaymentHistory } from "./services";

const Earn = () => {
    const [tabToShow, setTabToShow] = useState("payment")
  //    const {
  //   data: allProjects,
  //   isLoading,
  //   refetch: fetchProjects,
  // } = useQuery({
  //   queryKey: ["all-projects"],
  //   queryFn: getProjects,
  // });
  const {data:allPaymentHistory, isLoading, refetch: fetchHistory} = useQuery({
    queryKey:["history"],
    queryFn: getPaymentHistory
  })
  console.log(allPaymentHistory,"ooo")


  const {data:withdrawalData,} = useQuery({
    queryKey:["history"],
    queryFn:getAllWithdrawal
  })
  console.log(withdrawalData,"PPP")


  return (
    <Box h={"100%"} color={"#fff"}>
      <CardHeader></CardHeader>

      <Flex mt={"50px"} gap={"20px"} align={""}>
        <Card
          flex={1}
          icon={<FaBagShopping color="black" size={25} />}
          cardText={"Total Earns"}
          subText={formatToNaira(500000)}
        />
        <Card
          flex={1}
          icon={<MdAnalytics color="black" size={25} />}
          cardText={"Available balance"}
          subText={formatToNaira(400000)}
          //   subText1={"View Projects"}
        />
        <Card
          flex={1}
          icon={<MdAnalytics color="black" size={25} />}
          cardText={"Total Withdrawn Amount"}
          subText={formatToNaira(400000)}
        />
        <CustomBtn text={"Make Earning Withdrawal"} color={"#000"} />
      </Flex>

      <Tabs variant="unstyled" mt="60px">
        <TabList
          bg={"#2C2C2C"}
          p={"5px"}
          borderRadius={"10px"}
          w={"fit-content"}
          gap={"40px"}
        >
          <Tab
            _selected={{ color: "#000", bg: "#F5F5F5" }}
            borderRadius={"10px"}
            px="30px"
            fontWeight={"bold"}
            onClick={() => {
              setTabToShow("payment");
            }}
          >
            Payment History
          </Tab>
          <Tab
            _selected={{ color: "#000", bg: "#F5F5F5" }}
            borderRadius={"10px"}
            px="30px"
            fontWeight={"bold"}
            onClick={() => {
              setTabToShow("withdraw");
            }}
          >
            Withdraw History
          </Tab>
        </TabList>
      </Tabs>

      <Box mt="20px">
        {tabToShow==="payment"?<PaymentTable />:<PaymentTable />}
      </Box>
    </Box>
  );
};

export default Earn;
