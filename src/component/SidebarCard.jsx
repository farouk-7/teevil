import { Box, Circle, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

import { _COLORS } from "../constants/colors";
import wave from "../assets/circle-wave.png";

const SidebarCard = () => {
  return (
    <Box width="100%">
      <Box
        border="1px solid"
        position="absolute"
        bottom="2%"
        padding="1rem"
        width="85%"
        borderRadius=".5rem"
        fontSize=".6rem"
        color={_COLORS.white}
        bg={_COLORS?.brandPink}
        zIndex={999}
      >
        <Image pos={"absolute"} zIndex={1} src={wave} />

        <Stack zIndex={999}>
          <Circle bg={_COLORS.white} size="2rem">
            <FaQuestionCircle size={18} color={_COLORS.pink} />
          </Circle>
          <Text mt=".5rem">Need help?</Text>
          <Text>Please check reach out to us</Text>
          <Flex
            mt=".7rem"
            width="100%"
            justify="space-between"
            align="center"
            height="1rem"
            padding=".8rem"
            bg={_COLORS.white}
            color={_COLORS.mutedBlack}
            fontWeight="semibold"
            borderRadius=".3rem"
          >
            <Text>Contact Us</Text>
            <FaEnvelope size={14} color={_COLORS.mutedBlack} />
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};

export default SidebarCard;
