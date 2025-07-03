import {
  Avatar,
  Badge,
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
// import Action from "./Action";
import Action from "../dashboard/components/Action";

const payments = [
  {
    date: "2025-02-20",
    project: "E-commerce Website",
    freelancer: { name: "Marcel Williams", email: "marcelw@gmail.com", avatar: "" },
    amount: "$2,000",
    status: "Failed",
  },
  {
    date: "2025-02-20",
    project: "Mobile App UI Design",
    freelancer: { name: "Vincent Green", email: "vincentg@gmail.com", avatar: "" },
    amount: "$2,000",
    status: "Pending",
  },
  {
    date: "2025-02-20",
    project: "Marketing Strategy",
    freelancer: { name: "Lauren Palmer", email: "laurenp@gmail.com", avatar: "" },
    amount: "$2,000",
    status: "Paid",
  },
  {
    date: "2025-02-20",
    project: "Logo Animation",
    freelancer: { name: "Jean Smith", email: "jeansmith@gmail.com", avatar: "" },
    amount: "$2,000",
    status: "Paid",
  },
];

const statusColor = {
  Paid: "#285229ED",
  Pending: "#FBBF2433",
  Failed: "#FF5A5F6B",
};

export default function ActiveJob() {
  return ( 
    <Box  w="100%" color="white">
    
      {/* <Flex justify={"space-around"} borderRadius="10px" px="30px" py="10px" bg="#2C2C2C" align="center" mb="20px">
        <Text>Date</Text>
        <Text>Project Name</Text>
        <Text>Freelancer Name </Text>
        <Text>Amount</Text>
        <Text>Status</Text>
        <Text></Text>
      </Flex> */}

      <TableContainer
        maxH="500px"
        overflowY="auto"
        borderRadius="md"
        border="1px solid"
        borderColor="#2C2C2C"
        bg={"#2C2C2C"}
      >
        <Table variant={"simple"}>
          <Thead>
            <Tr mb="70px">
              {["Date", "Project Name", "Freelancer Name", "Amount", "Status",""].map((heading) => (
                <Th
                  key={heading}
                  position="sticky"
                  top={0}
                  bottom={500}
                  zIndex={1}
                  bg="#2C2C2C"
                  color="white"
                >
                  {heading}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody mt="100px" >
            {payments.map((payment, index) => (
              <Tr key={index}>
                <Td px="30px">{payment.date}</Td>
                <Td>{payment.project}</Td>
                <Td>
                  <Flex align="center" gap={3}>
                    <Avatar size="sm" name={payment.freelancer.name} src={payment.freelancer.avatar} />
                    <Box>
                      <Text fontWeight="bold">{payment.freelancer.name}</Text>
                      <Text fontSize="sm" color="gray.400">
                        {payment.freelancer.email}
                      </Text>
                    </Box>
                  </Flex>
                </Td>
                <Td>{payment.amount}</Td>
                <Td>
                  <Badge
                    // colorScheme={statusColor[payment.status]}
                    color="white"
                    bg={statusColor[payment.status]}
                    px={2}
                    py={1}
                    borderRadius="md"
                  >
                    {payment.status}
                  </Badge>
                </Td>
                <Td>
                 
                  <Action />
                  </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}