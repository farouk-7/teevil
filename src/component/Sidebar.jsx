import {
  Box,
  Circle,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";


import {useState } from "react";
// import { GlobalStateContext } from "../GlobalStateContext/GlobalState";

import { _COLORS } from "../constants/colors";
import logo from "../assets/logo.png";

import { AUTHENTICATED_ROUTES } from "../constants/pageRoutes";
import SidebarCard from "./SidebarCard";

import { FaEnvelope, FaUser } from "react-icons/fa";
import { IoIosRocket, IoIosDocument } from "react-icons/io";
import { FaTags } from "react-icons/fa6";
import { TbUsersGroup } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiStackFill } from "react-icons/ri";
import { TbLayout } from "react-icons/tb";
import { BsCardChecklist } from "react-icons/bs";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";
import { LiaUsersSolid } from "react-icons/lia";
import { MdEventAvailable, MdLocationPin } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import loogo from "../assets/loogo.png"

function Sidebar() {
  const [activePage, setActivePage] = useState(null);
  const [mobile] = useMediaQuery("(max-width:480px)");

  return (
    <Box h="100vh" position={"relative"} flex={0.2} >
      <Flex
        p="2%"
        flexDir={"column"}
        position={"fixed"}
        left="0"
        w="16%"
        h="100vh"
        zIndex={"999"}
        >

        <Flex flexDir={"column"} w="100%">
          <Flex flexDir={"row"} alignItems={"center"}>
            <Image
              // w="40px"
              maxW="150px"
              src={loogo}
              alt="Lead Capital"
              alignSelf={"center"}
            />
            {/* <Text fontWeight={700} color="#2D3748" fontSize={".7em"}>
              XYZ EVENT MANAGER
            </Text> */}
          </Flex>
          <Divider mt="10%" />

          <Flex flex=".9" flexDir={"column"} gap="10px" mt="1rem">
            {NAVS.map(({ to, title, icon: Icon }, idx) => (

              <Flex key={idx}>

                <NavLink
                  key={idx}
                  style={(isActive ) => {
                    {
                      isActive && setActivePage(title);
                    }
                    return isActive
                      ? {
                        color: "white",
                        background: _COLORS.brand,
                        padding: "10px",
                        width: "100%",
                        fontSize: ".8em",

                        borderRadius: "8px",
                        boxShadow: "rgb(0 0 0 / 30%) 1px 1px 3px",
                      }
                      : {
                        color: "#2D3748",
                        width: "100%",
                        fontSize: ".8em",
                        padding: "10px",
                      };
                  }}
                  to={to}
                  {...(mobile
                    ? {
                        onClick: () =>
                          setState((prev) => ({ ...prev, toggle: true })),
                      }
                    : {})}
                    >
                  <style>
                    {/* this style the active state */}
                    {`
                      a.active .qw{
                        background: #7B5DD6;
                     
                      }
                      a.active .as{
                        color:#fff;
                        fill:#fff;
                      }
                      `}
                  </style>
                  <Flex
                    gap="5px"
                    alignItems={"center"}
                    fontWeight="600"
                    onClick={() => setActiveSubPage(null)}
                    >
                    <Circle
                      borderRadius={"8px"}
                      className="qw"
                      padding=".2rem"
                      bg={"#fff"}>
                      <Icon
                        className="as"
                        fontSize={"1rem"}
                        color={"#7B5DD6"}
                      />
                    </Circle>
                    <Text fontWeight={700} fontSize={".8em"}>
                      {title}
                    </Text>
                    
                  </Flex>
                </NavLink>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <SidebarCard />
      </Flex>
    </Box>
  );
}

export default Sidebar;

const NAVS = [
  {
    title: "Market Place",
    to: AUTHENTICATED_ROUTES.market,
    icon: FaTachometerAlt,
  },
  {
    title: "My Event",
    to: AUTHENTICATED_ROUTES.event,
    icon: LiaUsersSolid,
  },
  {
    title: "My Orders",
    to: AUTHENTICATED_ROUTES.orders,
    icon: MdEventAvailable,
  },
  { title: "Wallet", to: AUTHENTICATED_ROUTES.wallet, icon: MdLocationPin },

  {
    title: "Settings",
    to: AUTHENTICATED_ROUTES.setting,
    icon: FiSettings,
  },
];
