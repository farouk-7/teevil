import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import CardHeader from "../../component/CardHeader";
import { cardData } from "./components/cardData";
import { CustomBtn } from "../../component/CustomBtn";
import { FaUser } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
// import { requestData } from './components/requestData';
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// import axiosInstance, {AUTH_ROUTES} from '../../service/api';
import { getAllRequest } from "./services/market";
import dayjs from "dayjs";
import FullPageLoader from "../../component/FullPageLoader";
import { formatToNaira } from "../../utils/numberFormat";

const Market = () => {
  const navigate = useNavigate();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["request"],
    queryFn: getAllRequest,
  });

  const requestDatas = data?.data;
  console.log(requestDatas, "oo");

  return (
    <Box>
      <CardHeader></CardHeader>
      <Text fontWeight={600} pt="20px" pb="40px" fontSize={"25px"}>
        Assigned Orders
      </Text>
      <Flex justifyContent={"space-between"} align={"center"} gap={"20px"}>
        {cardData?.map((item) => {
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
        })}
      </Flex>
      <Flex justifyContent={"center"} mt="40px">
        <CustomBtn text={"View More"} width={"300px"} />
      </Flex>
      <Box>
        <Text fontWeight={600} pt="20px" pb="40px" fontSize={"25px"}>
          New Request
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {requestDatas?.length <= 0 ? (
            <Box>
              <Text
                w={"full"}
                margin={"0px auto"}
                fontSize={"25px"}
                fontWeight={"bold"}
              >
                No Request Yet! Check Back
              </Text>
            </Box>
          ) : (
            requestDatas?.map((items) => {
              return isPending ? (
                <FullPageLoader />
              ) : (
                <Box
                  key={items?.id}
                  p={"20px"}
                  bg={"#fff"}
                  borderRadius={"20px"}
                  boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
                >
                  <Flex gap="8px" align={"center"} fontWeight={500} justifyContent={"space-between"}>
                    <Flex gap={"8px"}>
                      <Text>Deadline:</Text>
                      <Text color={"#F74780"}>
                        
                        {dayjs(items?.deadline).format("DD MMM YYYY")}
                      </Text>
                    </Flex>
                    <Text>{formatToNaira(items?.budget)}</Text>
                  </Flex>

                  <Flex flexDirection={"column"} textAlign={"start"} fontWeight={"bold"}>
                    <Flex
                      mt="10px"
                      mb={"5px"}
                      fontSize={"20px"}
                      gap={"8px"}
                      // fontWeight={500}
                    >
                      <Text>Service Title:</Text>
                      <Text>{items?.serviceTitle}</Text>
                    </Flex>


                    <Flex
                      // mt="10px"
                      fontSize={"20px"}
                      gap={"8px"}
                      // fontWeight={500}
                    >
                      <Text>Service Type:</Text>
                      <Text pb="10px">{items?.serviceType}</Text>
                    </Flex>

                    <Flex
                      alignItems={"center"}
                      mb={"5px"}
                      gap={"8px"}
                      color={"#425466"}
                    >
                      <Flex align={"center"} gap={"5px"} fontWeight={500}>
                        <FaUser />
                        <Text>Requester's Name:</Text>
                      </Flex>
                      <Text>{items?.requesterId?.fullName}</Text>
                    </Flex>

                    <Flex
                      alignItems={"center"}
                      gap={"8px"}
                      mb={"5px"}
                      color={"#425466"}
                    >
                      <Flex align={"center"} gap={"5px"} fontWeight={500}>
                        <FaRegCalendarAlt />
                        <Text>Event Date:</Text>
                      </Flex>
                      <Text>
                        {" "}
                        {dayjs(items?.creeatedAt).format("DD MMM YYYY")}
                      </Text>
                    </Flex>

                    <Flex
                      alignItems={"center"}
                      gap={"8px"}
                      mb={"5px"}
                      color={"#425466"}
                    >
                      <Flex align={"center"} gap={"5px"} fontWeight={500}>
                        <IoLocationSharp />
                        <Text>Location:</Text>
                      </Flex>
                      <Text>{items?.location}</Text>
                    </Flex>
                  </Flex>
                  <Flex mt={"10px"}>
                    <CustomBtn
                      text={"View Details"}
                      width={"full"}
                      handleClick={() => {
                        navigate("/new_request_details", { state: items });
                      }}
                    />
                  </Flex>
                </Box>
              );
            })
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Market;
