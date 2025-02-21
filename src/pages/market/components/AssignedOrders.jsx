import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { cardData } from "./cardData";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { CustomBtn } from "../../../component/CustomBtn";
import { useQuery } from "@tanstack/react-query";
import FullPageLoader from "../../../component/FullPageLoader";
import { getAssignedOrders } from "../services/market";
import { useGetState } from "../../../GlobalStateContext/useGetState";

const AssignedOrders = () => {
  const { state } = useGetState();
  const vendorId = state?._id;
  const { isLoading, data } = useQuery({
    queryKey: ["order"],
    queryFn: () => getAssignedOrders(vendorId),
  });
  const assignedData = data?.data;
  return isLoading ? (
    <FullPageLoader />
  ) : (
    <Box>
      <Flex justifyContent={"space-between"} align={"center"} gap={"20px"}>
        {assignedData?.length <= 0 ? (
          <Text
            w={"full"}
            margin={"0px auto"}
            fontSize={"25px"}
            fontWeight={"bold"}
          >
            NO ASSIGNED ORDER YET!
          </Text>
        ) : (
          assignedData?.map((item) => {
            return (
              <Box
                key={item?.id}
                p={"20px"}
                bg={"#D9D9D9"}
                borderRadius={"20px"}
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
              >
                <Image src={item?.img} w={"full"} />
                <Flex
                  flexDirection={"column"}
                  textAlign={"start"}
                  maxW={"400px"}
                  margin={"0 auto"}
                >
                  <Text fontWeight={"bold"} pt="20px" pb="10px">
                    {item?.title}
                  </Text>
                  <Flex
                    alignItems={"center"}
                    gap={"10px"}
                    mb={"5px"}
                    color={"#425466"}
                  >
                    <FaUser />
                    <Text>{item?.date}</Text>
                  </Flex>
                  <Flex
                    alignItems={"center"}
                    gap={"10px"}
                    mb={"5px"}
                    color={"#425466"}
                  >
                    <FaRegCalendarAlt />
                    <Text>{item?.name}</Text>
                  </Flex>
                  <Flex
                    alignItems={"center"}
                    gap={"10px"}
                    mb={"5px"}
                    color={"#425466"}
                  >
                    <IoLocationSharp />
                    <Text>{item?.location}</Text>
                  </Flex>
                  <Text color={"#425466"} fontWeight={600}>
                    {item?.text}
                  </Text>
                </Flex>
                <Flex mt={"30px"}>
                  <CustomBtn
                    text={"see more"}
                    handleClick={() => {
                      navigate("/assigned_order_details");
                    }}
                  />
                </Flex>
              </Box>
            );
          })
        )}
      </Flex>

      {assignedData?.length > 0 && (
        <Flex justifyContent={"center"} mt="40px">
          <CustomBtn text={"View More"} width={"300px"} />
        </Flex>
      )}
    </Box>
  );
};

export default AssignedOrders;
