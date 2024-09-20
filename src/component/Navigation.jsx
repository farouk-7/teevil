import { Avatar, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AiOutlineAlignLeft, AiOutlineBell } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
// import { GlobalStateContext } from "../GlobalStateContext/GlobalState";
// import { getPageTitle } from "../utils/GetPageTitle";
// import { useGetState } from "../GlobalStateContext/useGetState";
import { AUTHENTICATED_ROUTES } from "../constants/pageRoutes";

function Navigation() {
  const navigate = useNavigate();
  const [width, setW] = useState("");
  const [mobile] = useMediaQuery("(max-width:480px)");
  // const { setState } = useContext(GlobalStateContext);

  // const { state } = useGetState();

  useEffect(() => {
    setW(document.getElementById("x")?.offsetWidth);
  }, []);

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Flex w="100%" h="80px" position={"relative"} id="x">
      <Flex
        alignItems={"center"}
        position={"fixed"}
        top="20px"
        bg="#fff"
        zIndex={1}
        p="15px 40px"
        w={width - 60}
        ml="20px"
        h="70px"
        borderRadius={"20px"}
        justifyContent={"space-between"}
        boxShadow="0px 1px 1px 0px #0000000d"
      >
      
      </Flex>
    </Flex>
  );
}

export default Navigation;
