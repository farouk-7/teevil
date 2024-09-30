import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import webDevelopment from "../../../assets/webDevelopment.png"
import productDesign from "../../../assets/productDesign.png"
import productManagement from "../../../assets/productManagement.png"
import dataAnalysis from "../../../assets/dataAnalysis.png"
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";



const sliderPicture = [
    {
        id:1,
        img: webDevelopment,
    },
    {
        id:2,
        img: dataAnalysis,
    },
    {
        id:3,
        img: productDesign,
    },
    {
        id:4,
        img: productManagement,
    },
]
 
const SwiperComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <BsArrowRightSquare color="black" size={30} />,
        prevArrow: <BsArrowLeftSquare color="black" size={30} />,

    //     autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear"
      };
  return (
    <Box maxW={"1200px"} margin={"0px auto"}>
        <Slider {...settings}>
          {sliderPicture?.map((data) => {
            return (
              <Box key={data?.id} > 
                <Flex
                //   w="100%"
                  align="center"
                  mx="20px"
                  borderRadius={"10px"}
                  border={"1px solid #ECEBFF"}
                  justifyContent="space-between"
                  gap="10px"
                  flexDirection={["column", "column", "row"]}
                >
                  <Box w={"100%"}>
                    <Image
                      src={data?.img}
                      borderRadius={"10px"}
                      height={"140px"}
                      w={"100%"}
                      
                    />
                  </Box>
                </Flex>
              </Box>
            );
          })}
        </Slider>
      </Box>
  );
};

export default SwiperComponent;
