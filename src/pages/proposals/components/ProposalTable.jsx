import { Avatar, Box, Flex, Text, Tr } from "@chakra-ui/react";
import React from "react";
import CustomTable from "../../../component/CustomTable";
import ProposalAction from "./ProposalAction";
import dayjs from "dayjs";

const ProposalTable = ({proposalsData}) => {
  console.log(proposalsData,"SMILE")
  const Results = [
    {
      id: 1,
      title: "Website Rebuilding",
      deadline: "2025-02-15",
      name: "James Adeleke",
      email:"jame@gmail.com",
      budget: "$600",
      status: "Accepted",
    },
    {
      id: 2,
      title: "Mobile App for fitness tracking",
      deadline: "2025-02-15",
      name: "David Adeleke",
      email:"david@gmail.com",
      budget: "$4000",
      status: "Regeted",
    },

    {
      id: 3,
      title: "social media marketing campaign",
      deadline: "2025-02-15",
      name: "Tunji Adeleke",
      email:"tunji@gmail.com",
      budget: "$700",
      status: "Pending",
    },

    {
      id: 4,
      title: "Logo and Branding for new startup",
      deadline: "2025-02-15",
      name: "Tade Adeleke",
      email:"tade@gmail.com",
      budget: "$4000",
      status: "Under Review",
    },

    {
      id: 5,
      title: "SEO Optimization for Online Store",
      deadline: "2025-02-15",
      name: "Maria Adeleke",
      email:"maria@gmail.com",
      budget: "$1000",
      status: "Accepted",
    },
  ];
  const headerNames = [
    "Client Name",
    "Project Title",
    "Date Submitted",
    "Status",
    "Budget",
    "",
  ];
  return (
    <Box>
      <CustomTable DBdata={proposalsData} head={headerNames}>
        {(data) => {
          return data?.map((event, idx) => (
            <Tr key={event?._id}>
              {/* <CustomTable.Td>{idx + 1}.</CustomTable.Td> */}
              <CustomTable.Td>
                {/* <CustomTable.LimitedText limit={70} {...CustomTable.style}> */}
                <Flex gap={"10px"} align={"center"}>
                  <Avatar src={event?.submittedBy?.profileImage} name={event?.submittedBy?.firstName +"" + event?.submittedBy?.lastName} size={"sm"} />
                  <Box>
                    <Text>{event?.submittedBy?.firstName +" " + event?.submittedBy?.lastName || "N/A"}</Text> 
                    <Text opacity={"50%"}>{event?.submittedBy?.email|| "N/A"}</Text>
                  </Box>
                 
                  {/* <Text>{event?.email || "N/A"}</Text> */}
                </Flex>

                {/* </CustomTable.LimitedText> */}
              </CustomTable.Td>
              <CustomTable.Td>{event?.title}</CustomTable.Td>
              <CustomTable.Td>{dayjs(event?.createdAt || "N/A").format('DD-MM-YYYY')}</CustomTable.Td>
              {/* <CustomTable.Td>{dayjs(event?.createdAt || "N/A").format('YYYY-MM-DD HH:mm:ss')}</CustomTable.Td> */}

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
              <CustomTable.Td>{event?.budget || "N/A"}</CustomTable.Td>
              <CustomTable.Td>
                <ProposalAction event={event}/>
              </CustomTable.Td>
              {/* <CustomTable.Td>{event?.date || "N/A"}</CustomTable.Td> */}
            </Tr>
          ));
        }}
      </CustomTable>
    </Box>
  );
};

export default ProposalTable;
