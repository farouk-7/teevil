import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import React, { useState } from "react";
import CardHeader from "../../../component/CardHeader";
import AllProposal from "./component/AllProposal";
import PendingProposals from "./component/PendingProposals";
import ReviewingProposals from "./component/ReviewingProposals";
import AcceptedProposals from "./component/AcceptedProposals";
import RejectedProposals from "./component/RejectedProposals";

const ProposalList = () => {
  const payments = [
    {
      proposalDate: "2025-02-20",
      jobTitle: "E-commerce Website",
      freelancer: {
        name: "Marcel Williams",
        email: "marcelw@gmail.com",
        avatar: "",
      },
      budget: "$2,000",
      status: "reviewing",
      timeLine: "2 weeks",
      task: "10/60",
      section: "10",
      collaborators: "7+",
    },
    {
      proposalDate: "2025-0-10",
      jobTitle: "Logistic Application",
      freelancer: { name: "Ryan Philip", email: "ryan@gmail.com", avatar: "" },
      budget: "$3,500",
      status: "pending",
      timeLine: "7 weeks",
      task: "10/60",
      section: "10",
      collaborators: "7+",
    },
    {
      proposalDate: "2025-02-20",
      jobTitle: "Website For a Chruch",
      freelancer: {
        name: "Marcel Gray",
        email: "marcel@gmail.com",
        avatar: "",
      },
      budget: "$2,000",
      status: "accepted",
      timeLine: "2 weeks",
      task: "10/60",
      section: "10",
      collaborators: "7+",
    },
    {
      proposalDate: "2025-02-20",
      jobTitle: "A school landing page",
      freelancer: { name: "Jane Austin", email: "janea@gmail.com", avatar: "" },
      budget: "$900",
      status: "accepted",
      timeLine: "1 weeks",
      task: "10/60",
      section: "10",
      collaborators: "7+",
    },
    {
      proposalDate: "2025-07-23",
      jobTitle: "Client Dashboard",
      freelancer: { name: "John Boyega", email: "jboye@gmail.com", avatar: "" },
      budget: "$5,000",
      status: "rejected",
      timeLine: "3 weeks",
      task: "10/60",
      section: "10",
      collaborators: "7+",
    },
  ];
  const pendings = payments?.filter((pay) => pay?.status === "pending");
  const reviewing = payments?.filter((pay) => pay?.status === "reviewing");
   console.log(reviewing,"RRR")
  const accepted = payments?.filter((pay) => pay?.status === "accepted");
   const rejected = payments?.filter((pay) => pay?.status === "rejected");

  const [tabToShow, setTabToShow] = useState("all");
  const allProposalCount = payments?.length;

  return (
    <Box h={"100vh"}>
      <CardHeader></CardHeader>
      <Box mt="50px">
        <Tabs variant="unstyled" mt="10px">
          <TabList
            bg={"#2C2C2C"}
            p={"5px"}
            borderRadius={"10px"}
            w={"fit-content"}
            color={"#B5B5B5"}
            gap={"0px"}
          >
            <Tab
              _selected={{ color: "#000", bg: "#F5F5F5" }}
              borderRadius={"10px"}
              px="10px"
              fontWeight={"bold"}
              onClick={() => {
                setTabToShow("all");
              }}
            >
              All Proposals ({allProposalCount})
            </Tab>
            <Tab
              _selected={{ color: "#000", bg: "#F5F5F5" }}
              borderRadius={"10px"}
              px="10px"
              fontWeight={"bold"}
              onClick={() => {
                setTabToShow("pending");
              }}
            >
              Pending({pendings?.length})
            </Tab>
            <Tab
              _selected={{ color: "#000", bg: "#F5F5F5" }}
              borderRadius={"10px"}
              px="10px"
              fontWeight={"bold"}
              onClick={() => {
                setTabToShow("reviewing");
              }}
            >
              Reviewing({reviewing?.length})
            </Tab>
            <Tab
              _selected={{ color: "#000", bg: "#F5F5F5" }}
              borderRadius={"10px"}
              px="10px"
              fontWeight={"bold"}
              onClick={() => {
                setTabToShow("accepted");
              }}
            >
              Accepted({accepted?.length})
            </Tab>
            <Tab
              _selected={{ color: "#000", bg: "#F5F5F5" }}
              borderRadius={"10px"}
              px="10px"
              fontWeight={"bold"}
              onClick={() => {
                setTabToShow("rejected");
              }}
            >
              Rejected({rejected?.length})
            </Tab>
          </TabList>
        </Tabs>
      </Box>
      <Box mt="30px">
        {tabToShow === "all" ? 
          <AllProposal payments={payments} />
        : tabToShow === "pending" ? 
          <PendingProposals payments={pendings} />
        : tabToShow === "reviewing" ? 
          <ReviewingProposals data={reviewing}/>
        : tabToShow ==="accepted" ? 
            <AcceptedProposals payments={accepted}/>
        :<RejectedProposals payments={rejected}/>
        }
      </Box>
    </Box>
  );
};

export default ProposalList;
