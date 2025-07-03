import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import CardHeader from "../../component/CardHeader";
import ServiceProviderCard from "./components/ServiceProviderCard";
import ServiceDescription from "./components/ServiceDescription";
import PersonalInfo from "./components/PersonalInfo";
import ManagePassword from "./components/ManagePassword";
import { useNavigate } from "react-router-dom";
import { CustomBtn } from "../../component/CustomBtn";
import { useGetState } from "../../GlobalStateContext/useGetState";
import { FaEnvelope } from "react-icons/fa";
import FormInput from "../../component/FormInput";
import { FaPhoneAlt } from "react-icons/fa";
import AccountManagement from "./components/AccountManagement";
import NotificationManagement from "./components/NotificationManagement";
import ChangePassword from "./components/ChangePassword";
import PublicProfile from "./components/PublicProfile";
import DeleteAccount from "./components/DeleteAccount";
import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../job/services/Index";

const Setting = () => {
     const inputRef = useRef(null);

       const {
         data: allJobs,
         isLoading,
         refetch: fetchProjects,
       } = useQuery({
         queryKey: ["jobs"],
         queryFn: getJobs,
       });
       console.log(allJobs)


  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
  };
  const { state } = useGetState();
  console.log(state, "pop");
  const navigate = useNavigate();
  return (
    <Box h={"100%"} color={"#fff"}>
      <CardHeader></CardHeader>
      <Flex align={"center"} justify={"space-between"} mt="70px">
        <HStack spacing={5}>
          <Box>
            <Avatar src={state?.profileImage} size={"xl"}/>
          </Box>
          <Box>
            <Text fontWeight={"bold"} fontSize={"25px"}>{state?.firstName + " " + state?.lastName}</Text>
            <Flex align={"center"} gap={"30px"}>
              <Flex align={"center"} gap={"10px"}>
                <FaEnvelope />
                <Text>{state?.email}</Text>
              </Flex>

              <Flex align={"center"} gap={"10px"}>
                <FaPhoneAlt/>
                <Text>{state?.phone}</Text>
              </Flex>
            </Flex>
          </Box>
        </HStack>

        <CustomBtn
          text={"Upload Profile Image"}
          handleClick={handleClick}
          bg={"none"}
          border={"1px solid #fff"}
        />
        <input
          type="file"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </Flex>
      <AccountManagement refetch={() => fetchProjects()}/>
      <NotificationManagement />
      <ChangePassword />
      <Flex align={"center"} gap={"50px"}>
        <PublicProfile />
        <DeleteAccount />
      </Flex>
      
    </Box>
  );
};

export default Setting;
