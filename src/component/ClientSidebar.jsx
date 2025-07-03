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
  
  import { Link, NavLink, useNavigate } from "react-router-dom";
  import { FaTachometerAlt } from "react-icons/fa";
  import { FiSettings } from "react-icons/fi";
  // import loogo from "../assets/loogo.png";
  import { HamburgerIcon } from "@chakra-ui/icons";
  import { GlobalStateContext } from "../GlobalStateContext/GlobalState";
import { CLIENT_AUTHENTICATED_ROUTES } from "../constants/clientRoute";
  
  function ClientSidebar() {
    const navigate = useNavigate();
    const [activeSubPage, setActiveSubPage] = useState(null);
    const [workingEvent, setWorkingEvent] = useState(false);
    const [activePage, setActivePage] = useState(null);
    const [mobile] = useMediaQuery("(max-width: 991px)");
    const { state, setState } = useContext(GlobalStateContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const bg = useColorModeValue("#141414", "gray.800");
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
                // p="2%"
                py="2%"
                pr="2%"
                flexDir={"column"}
                position={"fixed"}
                left="0"
                w="16%"
                h="100vh"
                zIndex={"999"}
                bg={bg}
                borderRight={'1px solid #2C2C2C'}
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
                                  background: "#2C2C2C",
                                  borderLeft:"5px solid #D39D12",
                                  // borderLeftColor:"red",
                                  padding: "10px",
                                  paddingLeft:"40px",
                                  width: "100%",
                                  fontSize: "0.9em",
                                  borderTopRightRadius:"8px",
                                  borderBottomRightRadius:"8px",
                                  boxShadow: "rgb(0 0 0 / 30%) 1px 1px 3px",
                                }
                              : {
                                  
                                  color: "#fff",
                                  opacity:'50%',
                                  width: "100%",
                                  fontSize: ".8em",
                                  padding: "10px",
                                  paddingLeft:"40px",
                                };
                          }}
                          to={to}
                          onClick={() => setActiveSubPage(null)}
                        >
                          <Flex
                            gap="15px"
                            alignItems={"center"}
                            fontWeight="600"
                            onClick={() => setActiveSubPage(null)}
                          >
                            {/* <Circle
                              borderRadius={"8px"}
                              className="qw"
                              padding=".2rem"
                              bg={"#fff"}
                            > */}
                              <Icon
                                className="as"
                                fontSize={"1em"}
                                // color={"#7B5DD6"}
                                color={"#fff"}
                              />
                            {/* </Circle> */}
                            <Text fontWeight={700} fontSize={"1em"}>
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
  
  export default ClientSidebar;
  
  const NAVS = [
    {
      title: "Dashboard",
      to: CLIENT_AUTHENTICATED_ROUTES.dashboard,
      icon: FaTachometerAlt,
    },

       {
      title: "Job Management",
      to: CLIENT_AUTHENTICATED_ROUTES.job,
      icon: FaTachometerAlt,
    },
     {
      title: "Project Workspaces",
      to: CLIENT_AUTHENTICATED_ROUTES.projects,
      icon: FaTachometerAlt,
    },
     {
      title: "Proposal Lists",
      to: CLIENT_AUTHENTICATED_ROUTES.proposal,
      icon: FaTachometerAlt,
    },
     {
      title: "Messages",
      to: CLIENT_AUTHENTICATED_ROUTES.messages,
      icon: FaTachometerAlt,
    },
     {
      title: "Payment",
      to: CLIENT_AUTHENTICATED_ROUTES.payment,
      icon: FaTachometerAlt,
    },
  
    {
      title: "Settings",
      to: CLIENT_AUTHENTICATED_ROUTES.setting,
      icon: FiSettings,
    },
  ];
  