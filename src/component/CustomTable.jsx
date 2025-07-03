import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td as ChakraTd,
  TableContainer,
  Box,
  Text,
  HStack,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
  Flex,
  Tabs,
  Tab,
  TabList,
  InputRightElement,
  Spinner,
  Divider,
} from "@chakra-ui/react";

import { FiDownload } from "react-icons/fi";

import { Button } from "@chakra-ui/react";
import { useDeferredValue, useEffect, useState } from "react";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { useDebounce } from "use-debounce";
// import { AiOutlineSearch } from "react-icons/ai";
import dayjs from "dayjs";
import { _COLORS } from "../constants/colors";
// import axiosInstance from "../service/api";

function CustomTable({ head = [], filter, DBdata, DBsearchID, api, children }) {
  const [initialCopy, setInitialCopy] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    // store initial copy data
    setInitialCopy(DBdata);
    setFilteredData(DBdata);
  }, [DBdata]);

  const { search, fromDate, toDate } = filter || {};

  useEffect(() => {
    if (DBdata?.length < 1) return;

    if (!fromDate && !toDate) {
      return;
    }

    const filterByDate = DBdata?.filter((data) => {
      const dataDate = data?.startDate || data?.date;
      const check1 =
        // month
        parseInt(dayjs(dataDate).format("M")) >=
          new Date(fromDate).getMonth() + 1 &&
        // day
        parseInt(dayjs(dataDate).format("D")) >= new Date(fromDate).getDate() &&
        // year
        parseInt(dayjs(dataDate).format("YYYY")) ===
          new Date(fromDate).getFullYear();

      const check2 =
        // month
        parseInt(dayjs(dataDate).format("M")) <=
          new Date(toDate).getMonth() + 1 &&
        // day
        parseInt(dayjs(dataDate).format("D")) <= new Date(toDate).getDate() &&
        // year
        parseInt(dayjs(dataDate).format("YYYY")) ===
          new Date(toDate).getFullYear();

      return check1 && check2;
    });

    if (filterByDate?.length < 1) return;
    setFilteredData(filterByDate);
  }, [DBdata, fromDate, toDate]);

  // useEffect(() => {
  //   // data length from the database (backend)
  //   if (DBdata?.length < 1) return;

  //   if (!search && initialCopy?.length > 0) {
  //     return;
  //   }

  //   const filterBySearch = DBdata?.filter((data) => {
  //     // access object in another object using dot notation if added
  //     return DBsearchID?.split(".")
  //       .reduce((a, b) => a?.[b], data)
  //       ?.toLowerCase()
  //       .includes(search?.toLowerCase());
  //   });

  //   if (filterBySearch?.length < 1) return;
  //   setFilteredData(filterBySearch);
  // }, [DBdata, search]);

  // if user clear search input, return to original data
  // useEffect(() => {
  //   if (
  //     !fromDate &&
  //     !toDate
  //     // && DBdata?.length !== filteredData?.length
  //   )
  //     setFilteredData(DBdata);
  // }, [DBdata]);

  // if user clear date input, return to original data
  useEffect(() => {
    if (
      (!fromDate && DBdata?.length !== filteredData?.length) ||
      (!toDate && DBdata?.length !== filteredData?.length)
    )
      setFilteredData(DBdata);
  }, [fromDate, toDate, DBdata]);

  useEffect(() => {
    if (!api) {
      setFilteredData(initialCopy);
      return;
    }
    console.log(api(), "))))");

    const runSearch = async () => {
      try {
        await api().then((data) => {
          setFilteredData(data);
          console.log("search data from table", data);
        });
      } catch (error) {
        console.log(error, "search error");
      }
    };

    runSearch();
  }, [initialCopy, api]);

  return (
    <Box
      bg="#2C2C2C"
      boxShadow={"sm"}
      borderRadius={"20px"}
      // pt="10px"
      // pb="50px"
      color={"white"}
      maxH={"450px"}
      overflow={"scroll"}
      // maxW={["100%", "100%", "100%", "800px", "100%"]}
      className="custom-table-container"
      >
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .custom-table-container::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          .custom-table-container {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          
          `}
      </style>
      <TableContainer>
        {/* custom stripe color */}
        <style>
          {`
          .css-tdnrhj tr:nth-of-type(odd) td {
            background: #2C2C2C;
        }
          `}
        </style>
        <Table variant={""} size="lg" >
          <Thead>
            <Tr>
              {head?.map((data) => (
                <Th
                  py="30px"
                  color={_COLORS.white}
                  bg="#2C2C2C"
                  fontWeight={"bold"} 
                  fontSize={"16px"}
                  key={data}
                  textTransform="capitalize">
                  {data}
                </Th>
              ))}
            </Tr>
          </Thead>

          <Tbody 
          fontWeight={"500"} 
          fontSize={".92em"} 
          // pos={"sticky"}  
          zIndex={1} 
          top={50}  >
           
            {
              // typeof filter === "object" ?
              children(filteredData)
              // : children
            }
        
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CustomTable;

export const DATA_ROWS = {
  LIMIT: 100,
};
const limit = DATA_ROWS.LIMIT;

export const Pagination = ({ updateTable, length = 0, total = 0 }) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isEmpty, setEmpty] = useState(false);
  const [maxPageLimit] = useState(5);

  useEffect(() => {
    if (length < 1) {
      setEmpty(({}, () => true));
    } else {
      setEmpty(({}, () => false));
    }
  }, [length]);

  const NUMBER_OF_PAGES = Math.ceil(Number(total) / DATA_ROWS.LIMIT);

  const getPageNumbers = () => {
    let currentPage = page;
    let p = NUMBER_OF_PAGES >= maxPageLimit ? maxPageLimit : NUMBER_OF_PAGES;
    let start = Math.floor(currentPage / p) * p;
    return new Array(p).fill().map((_, idx) => start + idx + 1); //get range 1-5, 6-10
  };

  const goBack = () => {
    if (page === 0) return;

    setPage((initial) => initial - 1);
    setLoading(true);
    updateTable(page - 1).then(() => setLoading(false));
  };

  const isLastPage = total && limit * (page + 1) >= total;

  const goNext = () => {
    if (!length) {
      return;
    }

    if (
      // length < limit ||
      isLastPage
    ) {
      console.log("fs", length, limit, isLastPage);

      return;
    }

    setPage((initial) => initial + 1);
    setLoading(true);
    updateTable(page + 1).then(() => setLoading(false));
  };

  const ARROW_STYLE = {
    borderRadius: "3px",
    bg: _COLORS.brandPink,
    fontSize: "1.5em",
    color: "#fff",
    _hover: { background: "transparent" },
    _focus: { boxShadow: "none" },
    p: "2px",
    width: "fit-content",
    cursor: "pointer",
  };

  const goToPageX = (page) => {
    setLoading(true);
    setPage(page);
    updateTable(page)
      .then(() => {
        setLoading(false);
      })
      .catch(() => null);
  };

  return (
    <Box p="10px 0px" my="20px">
      <HStack gap="5px" spacing="2px" justifyContent="flex-end">
        <Text fontSize={".9em"} color="#000">
          {/* Page 1 - {limit} of {NUMBER_OF_PAGES} */}
          Page 1 of {NUMBER_OF_PAGES} pages
        </Text>
        <Box {...ARROW_STYLE} onClick={goBack} disabled={page === 0}>
          <BiChevronLeft />
        </Box>
        <Stack direction="row">
          {getPageNumbers()?.map((pageNumber, idx) => {
            let t = pageNumber - 1;
            return pageNumber <= NUMBER_OF_PAGES ? (
              <Text
                key={idx}
                // border="1px solid #8080806b"
                // p="5px"
                borderRadius={"5px"}
                fontSize=".8em"
                // paddingX="15px"
                p="2px 10px"
                cursor={"pointer"}
                onClick={() => (page === t ? null : goToPageX(t))}
                bg={
                  // page === t ? `${_COLORS.brand}99` :
                  "#fff"
                }
                color={
                  // page === t ? "#fff" :
                  "#000"
                }>
                {pageNumber}
              </Text>
            ) : null;
          })}
        </Stack>
        <Box
          {...ARROW_STYLE}
          onClick={goNext}
          disabled={length < limit || isLastPage}>
          <BiChevronRight />
        </Box>
      </HStack>
    </Box>
  );
};

const style = {
  whiteSpace: "break-spaces",
  maxW: "120px",
  lineHeight: "1.8",
  fontWeight: "400",
  color: "#000",
  textTransform: "capitalize",
};

// TAB STYLES

const TAB_BASE_STYLE = {
  color: "#808080",
  fontWeight: "bold",
};
const ACTIVE_TAB_STYLE = {
  fontWeight: "bold",
  color: _COLORS.brand,
  borderBottom: `5px solid ${_COLORS.brand}`,
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px",
  boxShadow: "none ",
};

const COMBINE_TAB_STYLES = {
  ...TAB_BASE_STYLE,
  _selected: {
    ...ACTIVE_TAB_STYLE,
  },
};

// END OF TAB STYLES

const DownloadButton = ({ icon: Icon, onClick, px, py }) => {
  return (
    <Button
      bg={_COLORS.brand}
      color={"#fff"}
      py={py}
      px={px}
      borderRadius={"10px"}
      _hover={{ background: `${_COLORS.brand}90` }}
      _focus={{ background: _COLORS.brand }}
      leftIcon={
        Icon ? <Icon fontSize={"1.5em"} /> : <FiDownload fontSize={"1.5em"} />
      }
      onClick={onClick}>
      Download CSV
    </Button>
  );
};

const BrandButton = ({ icon: Icon, noIcon, onClick, children, ...props }) => {
  return (
    <Button
      bg={_COLORS.brand}
      color={"#fff"}
      borderRadius={"10px"}
      _hover={{ background: `${_COLORS.brand}90` }}
      _focus={{ background: _COLORS.brand }}
      {...(noIcon
        ? {}
        : Icon
        ? {
            leftIcon: {
              ...(Icon ? (
                <Icon fontSize={"1.5em"} />
              ) : (
                <FiDownload fontSize={"1.5em"} />
              )),
            },
          }
        : {})}
      onClick={onClick}
      {...props}>
      {children}
    </Button>
  );
};

export const Td = ({ children, ...props }) => {
  return (
    <ChakraTd py="12px !important" fontSize={".8em"} {...props}>
      {children}
    </ChakraTd>
  );
};

export const filterFunc = (data, filterBy) => {
  return filterBy?.key &&
    String(filterBy?.key?.split(".")?.reduce((a, b) => a?.[b], data))
    ? String(filterBy?.key?.split(".")?.reduce((a, b) => a?.[b], data)) ===
        filterBy?.value
    : filterBy?.search
    ? String(filterBy?.searchFilter?.split(".")?.reduce((a, b) => a?.[b], data))
        ?.toLowerCase()
        ?.includes(String(filterBy?.search)?.toLowerCase())
    : data;
};
export const STATUS_BASE_STYLE = (color) => ({
  bg: `${color || "#F96400AD"}`,
  borderRadius: "7px",
  textAlign: "center",
});

export const LimitedText = ({ children, limit = 10, ...props }) => {
  return (
    <Tooltip
      label={`${children
        ?.toString()
        ?.split("")
        ?.slice(0, parseInt(limit))
        ?.join("")}`}>
      <Box>
        <Text {...props}>{`${children
          ?.toString()
          ?.split("")
          ?.slice(0, parseInt(limit))
          ?.join("")}${children?.length > limit ? "..." : ""}`}</Text>
      </Box>
    </Tooltip>
  );
};

export const SearchInputField = ({
  setSearchText,
  apiResponseData,
  placeholder,
  isSearching,
  width,
  ...props
}) => {
  const [search, setSearch] = useState("");
  console.log("ddd", search);
  const [searchDeferredValue] = useDebounce(search, 1000);

  useEffect(() => {
    setSearchText && setSearchText(searchDeferredValue);
  }, [searchDeferredValue]);
  return (
    <InputGroup {...props}>
      <InputLeftElement
        pointerEvents="none"
        children={
          <CiSearch
            style={{ marginTop: "10px" }}
            fontSize={"1.8em"}
            color="gray.300"
          />
        }
      />
      <Input
        width={width || "70%"}
        placeholder={placeholder || "Search Resident Name"}
        _placeholder={{
          color: "grey",
          fontSize: ".8rem",
        }}
        size={"lg"}
        color="black"
        outline="none"
        bg={"#F0F0F0"}
        borderRadius={"10px"}
        type="text"
        fontSize={".9rem"}
        _focus={{ outline: "none", boxShadow: "none", border: "none" }}
        onChange={
          (e) => setSearch(e.target.value)
          // setFilter
          //   ? setFilter((state) => ({ ...state, search: e.target.value }))
          //   : props?.onChange(e)
        }
      />
      <InputRightElement>
        {isSearching && <Spinner color="green.500" />}
      </InputRightElement>
    </InputGroup>
  );
};

export const DatesInputField = ({ setSearchDate, ...props }) => {
  const { inputWidth } = props || {};
  // custom calendar icon
  const CALENDAR_SVG_ICON = `<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5175 0.667482C11.8712 0.666651 12.151 0.941514 12.1518 1.308L12.1526 1.93268C14.4482 2.11259 15.9645 3.67681 15.967 6.07561L15.9761 13.0971C15.9794 15.7124 14.3363 17.3216 11.7026 17.3258L5.26932 17.3342C2.65207 17.3375 0.988427 15.69 0.985136 13.0671L0.97608 6.12808C0.972794 3.71346 2.43568 2.15341 4.73122 1.94268L4.7304 1.31799C4.72958 0.951509 5.00109 0.675813 5.36311 0.675813C5.72513 0.67498 5.99665 0.949843 5.99747 1.31633L5.99829 1.89937L10.8856 1.8927L10.8847 1.30966C10.8839 0.943179 11.1554 0.668317 11.5175 0.667482ZM11.8531 12.4941H11.8449C11.4664 12.5032 11.1628 12.8206 11.1711 13.2037C11.1719 13.5868 11.4771 13.9025 11.8556 13.9109C12.2415 13.91 12.5541 13.5927 12.5533 13.2012C12.5533 12.8097 12.2398 12.4941 11.8531 12.4941ZM5.0735 12.4949C4.69502 12.5116 4.39882 12.8289 4.39964 13.212C4.41692 13.5952 4.72958 13.895 5.10805 13.8775C5.47912 13.8609 5.7745 13.5435 5.75722 13.1604C5.74899 12.7856 5.44374 12.4941 5.0735 12.4949ZM8.46332 12.4907C8.08485 12.5082 7.78947 12.8247 7.78947 13.2079C7.80675 13.591 8.1194 13.89 8.49788 13.8734C8.86813 13.8559 9.16432 13.5394 9.14705 13.1554C9.13882 12.7814 8.83357 12.4899 8.46332 12.4907ZM5.06938 9.49639C4.69091 9.51305 4.39553 9.83039 4.39635 10.2135C4.41281 10.5967 4.72629 10.8965 5.10476 10.879C5.47501 10.8624 5.77038 10.545 5.75311 10.1619C5.74488 9.78708 5.44045 9.49556 5.06938 9.49639ZM8.46003 9.46724C8.08155 9.4839 7.78536 9.80124 7.78618 10.1844C7.80263 10.5675 8.11611 10.8665 8.49459 10.8499C8.86483 10.8324 9.16021 10.5159 9.14375 10.1327C9.1347 9.75793 8.83028 9.46641 8.46003 9.46724ZM11.8499 9.47141C11.4714 9.47974 11.1752 9.78792 11.176 10.1711V10.1802C11.1842 10.5634 11.4969 10.854 11.8762 10.8457C12.2464 10.8366 12.5418 10.5192 12.5336 10.1361C12.5163 9.76959 12.2193 9.47058 11.8499 9.47141ZM10.8872 3.1754L5.99994 3.18206L6.00076 3.85589C6.00076 4.21487 5.73007 4.49807 5.36805 4.49807C5.00603 4.4989 4.73369 4.21654 4.73369 3.85755L4.73287 3.21621C3.12846 3.37696 2.24069 4.31982 2.24315 6.12642L2.24398 6.38545L14.7008 6.3688V6.07727C14.6654 4.2865 13.7669 3.34698 12.1543 3.20705L12.1551 3.84839C12.1551 4.20655 11.8762 4.49057 11.5224 4.49057C11.1604 4.4914 10.888 4.20821 10.888 3.85006L10.8872 3.1754Z" fill="#7EBD25"/>
</svg>
`;
  let convertToUse = window.btoa(CALENDAR_SVG_ICON);
  return (
    <Flex
      direction={["column", "column", "row", "row"]}
      gap={["2", ""]}
      {...props}>
      {/* change custom calendar icon */}
      <style>
        {`
        input[type="date"]::-webkit-calendar-picker-indicator {
          background: url(data:image/svg+xml;base64,${convertToUse});
          }
        `}
      </style>
      <Box display={"flex"} mx={2} alignItems={"center"}>
        <Text fontSize={"12px"} mr={"2"}>
          From
        </Text>
        <InputGroup
          w={"85%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}>
          <Input
            type="date"
            placeholder="From Date"
            size="md"
            bg="#EDEDED"
            borderRadius={"6px"}
            py="20px"
            _focus={{ outline: "none", boxShadow: "none", border: "none" }}
            onChange={(e) =>
              setSearchDate((state) => ({
                ...state,
                fromDate: e.target.value,
              }))
            }
            {...(inputWidth ? inputWidth : {})}
          />
        </InputGroup>
      </Box>
      <Box mx={2} display={"flex"} alignItems={"center"}>
        <Text fontSize={"12px"} mr={"2"}>
          To
        </Text>
        <InputGroup w={"85%"}>
          <Input
            type="date"
            placeholder="To Date"
            size="md"
            bg="#EDEDED"
            borderRadius={"6px"}
            py="20px"
            _focus={{ outline: "none", boxShadow: "none", border: "none" }}
            onChange={(e) =>
              setSearchDate((state) => ({ ...state, toDate: e.target.value }))
            }
            {...(inputWidth ? inputWidth : {})}
          />
        </InputGroup>
      </Box>
    </Flex>
  );
};

export const CustomTab = ({
  tab1,
  tab2,
  tab3,
  px,
  mx,
  handleClick,
  gap,
  handleClicked,
  handleClickTabThree,
  ...props
}) => {
  return (
    <Tabs
      {...props}
      variant="unstyled"
      bg="#F0F0F0"
      align={"center"}
      px={px || "10px"}
      mx={mx || "50px"}
      borderRadius={"10px"}>
      <TabList gap={"50px" || gap} py="5px">
        <Tab
          cursor={"pointer"}
          onClick={handleClick}
          px={"30px"}
          _selected={{
            bg: _COLORS.green,
            color: _COLORS.white,
            fontWeight: "600",
            borderRadius: "10px",
            border: `1px solid ${_COLORS.white}`,
          }}>
          {tab1}
        </Tab>
        <Tab
          cursor={"pointer"}
          onClick={handleClicked}
          _selected={{
            bg: _COLORS.green,
            color: _COLORS.white,
            fontWeight: "600",
            borderRadius: "10px",
            border: `1px solid ${_COLORS.white}`,
          }}>
          {tab2}
        </Tab>
        <Tab
          cursor={"pointer"}
          onClick={handleClickTabThree}
          _selected={{
            bg: _COLORS.green,
            color: _COLORS.white,
            fontWeight: "600",
            borderRadius: "10px",
            border: `1px solid ${_COLORS.white}`,
          }}>
          {tab3}
        </Tab>
      </TabList>
    </Tabs>
  );
};

export const CurveHeaderBox = ({ children, ...props }) => (
  <Flex
    flexDir={"row"}
    bg="#fff"
    p="10px 20px"
    borderRadius={"20px"}
    {...props}>
    {children}
  </Flex>
);

CustomTable.CurveHeaderBox = CurveHeaderBox;
CustomTable.CustomTab = CustomTab;

CustomTable.DatesInputField = DatesInputField;

CustomTable.SearchInputField = SearchInputField;

CustomTable.BrandButton = BrandButton;

CustomTable.LimitedText = LimitedText;
CustomTable.STATUS_BASE_STYLE = STATUS_BASE_STYLE;
CustomTable.Td = Td;
CustomTable.style = style;
CustomTable.COMBINE_TAB_STYLES = COMBINE_TAB_STYLES;
CustomTable.TAB_BASE_STYLE = TAB_BASE_STYLE;
CustomTable.ACTIVE_TAB_STYLE = ACTIVE_TAB_STYLE;
CustomTable.DownloadButton = DownloadButton;

CustomTable.Pagination = Pagination;
CustomTable.filterFunc = filterFunc;
