import React from 'react'
import CustomTable from '../../../component/CustomTable'
import { Box, Tr } from '@chakra-ui/react';
import { EventData } from './eventData';
import { formatToNaira } from '../../../utils/numberFormat';
import { CustomBtn } from '../../../component/CustomBtn';
import { useNavigate } from 'react-router-dom';

const EventTable = () => {
  const navigate = useNavigate()
    const headerNames = [
        "S/N",
        "Order ID",
        "Service Name",
        "Service Category",
      ];
  return (
    <Box h={"100vh"}>
    <CustomTable
    //   filter={filter} // state, to get filter data, e.g search & date
      DBdata={EventData} // data coming from backend
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
            <CustomTable.Td>{event?.serviceName}</CustomTable.Td>
            <CustomTable.Td>{event?.serviceCategory || "N/A"}</CustomTable.Td>
            <CustomTable.Td>
                <CustomBtn handleClick={()=>{
                  navigate("/event-details")
                }} text={"View Details"} color={"#0CAF60"} bg={"transparent"} border={"1px solid #0CAF60"} fontSize={"13px"}/>
            </CustomTable.Td>
            <CustomTable.Td>
                <CustomBtn text={"End Service"} color={"#fff"} bg={"#CD4E34"} fontSize={"13px"}/>
            </CustomTable.Td>
          </Tr>


        ));
      }}
    </CustomTable>
    <CustomTable.Pagination
      length={EventData?.length}
      total={10}
      updateTable={async (page) => null}
    />
  </Box>
  )
}

export default EventTable