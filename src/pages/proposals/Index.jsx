import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import CardHeader from "../../component/CardHeader";
import { CustomBtn } from "../../component/CustomBtn";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ProposalTable from "./components/ProposalTable";
import { useQuery } from "@tanstack/react-query";
import { getProposals } from "./components/services";

const Proposal = () => {
   const {
    data: allProposals,
    isLoading,
    refetch: fetchProposal,
  } = useQuery({
    queryKey: ["all-proposals"],
    queryFn: getProposals,
  });
  const proposals = allProposals?.data?.data
 



  return  (
    <Box h={"100vh"}>
      <CardHeader></CardHeader>

      <Box mt="50px">
        <Flex justify={"flex-end"}>
          <CustomBtn
            rightIcon={<MdOutlineKeyboardArrowDown size={20} />}
            text={"All Proposal Status"}
            bg={"#2C2C2C"}
          />
        </Flex>

        <Box mt="50px">
          <ProposalTable proposalsData = {proposals}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Proposal;
