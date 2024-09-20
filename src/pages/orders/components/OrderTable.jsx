import React from "react";
import CustomTable from "../../../component/CustomTable";
import { Box, Text, Tr } from "@chakra-ui/react";
import { orderData } from "./orderData";
import { CustomBtn } from "../../../component/CustomBtn";
import { MoreActionButton } from "../../../component/MoreActionButton";

const OrderTable = () => {
  const headerNames = [
    "S/N",
    "Order ID",
    "Service Type",
    "Date",
    "Status",
    "Action",
  ];
  return (
    <Box h={"100vh"}>
      <CustomTable
        //   filter={filter} // state, to get filter data, e.g search & date
        DBdata={orderData} // data coming from backend
        //   DBsearchID={"eventTitle"} // what data do you want to search by, e.g name, status, fee
        head={headerNames} // header names list
      >
        {(data) => {
          return data?.map((event, idx) => (
            <Tr key={idx}>
              <CustomTable.Td>{idx + 1}</CustomTable.Td>
              <CustomTable.Td>
                <CustomTable.LimitedText limit={50} {...CustomTable.style}>
                  {event?.orderNo || "N/A"}
                </CustomTable.LimitedText>
              </CustomTable.Td>
              <CustomTable.Td>{event?.serviceType}</CustomTable.Td>
              <CustomTable.Td>{event?.date || "N/A"}</CustomTable.Td>
              <CustomTable.Td>
                <Text
                  textAlign={"center"}
                  width={"100px"}
                  borderRadius={"8px"}
                //   p={"1px"}
                  color={"#fff"}
                  bg={
                    event?.status === "in-progress"
                      ? "#7EBD25"
                      : event?.status === "cancelled"
                      ? "#AF0C5B"
                      : "#0CAF60"
                  }
                >
                  {event?.status}
                </Text>
              </CustomTable.Td>
              <CustomTable.Td>
                <MoreActionButton />
              </CustomTable.Td>
            </Tr>
          ));
        }}
      </CustomTable>
      <CustomTable.Pagination
        length={orderData?.length}
        total={10}
        updateTable={async (page) => null}
      />
    </Box>
  );
};

export default OrderTable;
