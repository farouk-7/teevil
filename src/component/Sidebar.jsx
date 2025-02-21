import {
  Box,
  Circle,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";

import { useContext, useState } from "react";
// import { GlobalStateContext } from "../GlobalStateContext/GlobalState";

import { _COLORS } from "../constants/colors";
import logo from "../assets/logo.png";

import { AUTHENTICATED_ROUTES } from "../constants/pageRoutes";
import SidebarCard from "./SidebarCard";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import loogo from "../assets/loogo.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GlobalStateContext } from "../GlobalStateContext/GlobalState";

function Sidebar() {
  const navigate = useNavigate();
  const [activeSubPage, setActiveSubPage] = useState(null);
  const [workingEvent, setWorkingEvent] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const [mobile] = useMediaQuery("(max-width: 991px)");
  const { state, setState } = useContext(GlobalStateContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box h="auto" position={"relative"} flex={0.2}>
      {mobile ? (
        <>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            onClick={onOpen}
            position="fixed"
            top="10px"
            left="10px"
            zIndex="999"
          />
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg={bg} color={color}>
              <DrawerCloseButton />
              <DrawerHeader>
                <Image
                  maxW="150px"
                  h={"40px"}
                  // src={loogo}
                  alt="Logo"
                  alignSelf={"center"}
                />
              </DrawerHeader>
              <DrawerBody>
                <Flex flexDir={"column"} w="100%">
                  <Flex flexDir={"column"} gap="10px" mt="0.5rem">
                    {NAVS.map(({ to, title, icon: Icon }, idx) => (
                      <Flex key={idx}>
                        <NavLink
                          key={idx}
                          style={({ isActive }) => {
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
                          onClick={() => setActiveSubPage(null)}
                        >
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
                              bg={"#fff"}
                            >
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
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Flex
          p="2%"
          flexDir={"column"}
          position={"fixed"}
          left="0"
          w="16%"
          h="100vh"
          zIndex={"999"}
          bg={bg}
          color={color}
        >
          <Flex flexDir={"column"} w="100%">
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"start"}
            >
              <Image
                maxW="150px"
                h={"50px"}
                // src={loogo}
                alt="Logo"
                alignSelf={"center"}
              />
            </Flex>
            <Divider mt="10%" />
            <Flex flex=".9" flexDir={"column"} gap="10px" mt="1rem">
              {NAVS.map(({ to, title, icon: Icon }, idx) => (
                <Flex key={idx}>
                  <NavLink
                    key={idx}
                    style={({ isActive }) => {
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
                            color: _COLORS?.brand,
                            width: "100%",
                            fontSize: ".8em",
                            padding: "10px",
                          };
                    }}
                    to={to}
                    onClick={() => setActiveSubPage(null)}
                  >
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
                        bg={"#fff"}
                      >
                        <Icon
                          className="as"
                          fontSize={"1rem"}
                          // color={"#7B5DD6"}
                          color={_COLORS?.brand}
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
          {/* <SidebarCard /> */}
        </Flex>
      )}
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

  // {
  //   title: "Settings",
  //   to: AUTHENTICATED_ROUTES.setting,
  //   icon: FiSettings,
  // },
];
