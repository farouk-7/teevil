import { Avatar, Box, Flex, Text, Tr } from "@chakra-ui/react";
import React from "react";
import CustomTable from "../../../component/CustomTable";
// import ProposalAction from "./ProposalAction";

const PaymentTable = () => {
  const Results = [
    {
      id: 1,
      title: "Website Rebuilding",
      deadline: "2025-02-15",
      name: "James Adeleke",
      email: "jame@gmail.com",
      budget: "$600",
      status: "Pending",
    },
    {
      id: 2,
      title: "Mobile App for fitness tracking",
      deadline: "2025-02-15",
      name: "David Adeleke",
      email: "david@gmail.com",
      budget: "$4000",
      status: "paid",
    },

    {
      id: 3,
      title: "social media marketing campaign",
      deadline: "2025-02-15",
      name: "Tunji Adeleke",
      email: "tunji@gmail.com",
      budget: "$700",
      status: "Pending",
    },

    {
      id: 4,
      title: "Logo and Branding for new startup",
      deadline: "2025-02-15",
      name: "Tade Adeleke",
      email: "tade@gmail.com",
      budget: "$4000",
      status: "paid",
    },

    {
      id: 5,
      title: "SEO Optimization for Online Store",
      deadline: "2025-02-15",
      name: "Maria Adeleke",
      email: "maria@gmail.com",
      budget: "$1000",
      status: "paid",
    },
  ];
  const headerNames = [
    "Date",
    "Project Name",
    "Client Name",
    "Amount",
    "Status",
  ];
  return (
    <Box>
      <CustomTable DBdata={Results} head={headerNames}>
        {(data) => {
          return data?.map((event, idx) => (
            <Tr key={event?.id}>
              {/* <CustomTable.Td>{idx + 1}.</CustomTable.Td> */}
              <CustomTable.Td>{event?.deadline || "N/A"}</CustomTable.Td>

              <CustomTable.Td>{event?.title || "N/A"}</CustomTable.Td>

              <CustomTable.Td>
                <Flex gap={"10px"} align={"center"}>
                  <Avatar name={event?.name || "N/A"} size={"sm"} />
                  <Box>
                    <Text>{event?.name || "N/A"}</Text>
                    <Text opacity={"50%"}>{event?.email || "N/A"}</Text>
                  </Box>
                </Flex>
              </CustomTable.Td>
              <CustomTable.Td>{event?.budget || "N/A"}</CustomTable.Td>

              <CustomTable.Td>
                <Text
                  borderRadius={"8px"}
                  bg={
                    event?.status === "Regeted"
                      ? "#FE9C7214"
                      : event?.status === "Under Review"
                      ? "#2270EE38"
                      : event?.status === "Pending"
                      ? "#FBBF2433"
                      : "#1CBD2142"
                  }
                  textAlign={"center"}
                >
                  {event?.status || "N/A"}
                </Text>
              </CustomTable.Td>
              
              <CustomTable.Td>
                {/* <ProposalAction event={event}/> */}
              </CustomTable.Td>
              
            </Tr>
          ));
        }}
      </CustomTable>
    </Box>
  );
};

export default PaymentTable;
