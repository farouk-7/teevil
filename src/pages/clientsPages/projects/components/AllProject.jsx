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
import ProjectAction from "./ProjectAction";

const statusColor = {
  completed: "#285229ED",
//   inProgress: "#FBBF2433",
  inprogress: "#FF5A5F6B",
};

export default function AllProject({payments}) {
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
              {["Project Title", "Deadline", "Task", "Collaborators", "Section", "Status",""].map((heading) => (
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
                <Td px="30px">{payment.projectTitle}</Td>
                <Td>{payment.deadline}</Td>
                {/* <Td>
                  <Flex align="center" gap={3}>
                    <Avatar size="sm" name={payment.freelancer.name} src={payment.freelancer.avatar} />
                    <Box>
                      <Text fontWeight="bold">{payment.freelancer.name}</Text>
                      <Text fontSize="sm" color="gray.400">
                        {payment.freelancer.email}
                      </Text>
                    </Box>
                  </Flex>
                </Td> */}
                <Td>{payment.task}</Td>
                <Td>{payment.collaborators}</Td>
                <Td>{payment.section}</Td>
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
                 
                 <ProjectAction data={payment}/>
                  </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}