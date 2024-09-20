import React from 'react'
import CustomTable from '../../../component/CustomTable'
import { Box, Tr } from '@chakra-ui/react';
import {walletData} from "./walletData"
import { formatToNaira } from '../../../utils/numberFormat';
// import { formatToNaira } from '../../../utils/numberFormat';

const WalletTable = () => {
    const headerNames = [
        "S/N",
        "Order ID",
        "Services",
        "Date",
        "Deposit Paid",
        "Balance",
      ];
  return (
    <Box h={"100vh"}>
    <CustomTable
    //   filter={filter} // state, to get filter data, e.g search & date
      DBdata={walletData} // data coming from backend
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
            <CustomTable.Td>{event?.service}</CustomTable.Td>
            <CustomTable.Td>{event?.date || "N/A"}</CustomTable.Td>
            <CustomTable.Td>{formatToNaira(event?.deposit || "N/A")}</CustomTable.Td>
            <CustomTable.Td>{formatToNaira(event?.balance || "N/A")}</CustomTable.Td>
          </Tr>
        ));
      }}
    </CustomTable>
    <CustomTable.Pagination
      length={walletData?.length}
      total={10}
      updateTable={async (page) => null}
    />
  </Box>
  )
}

export default WalletTable