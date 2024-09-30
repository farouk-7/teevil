import {
  Box,
  Flex,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import FormInput from "../../../component/FormInput";
import { CustomBtn } from "../../../component/CustomBtn";
import React, { useState, useRef } from "react";
import { RiAttachment2 } from "react-icons/ri";

const ServiceDescription = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState("");
  const fileInputRef = useRef(null); // Create a reference for the Pictures input
  const fileInputsRef = useRef(null); // Create a reference for the Banner input
  const VideoInputsRef = useRef(null); // Create a reference for the Video input
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);
  };
  const handleFilesChange = (e) => {
    const file = e.target.files[0]; // Get the first file
    if (file) {
      setSelectedBanner(file); // Store the selected file in state
    }
  };
  const handleVideoChange = (e) => {
    const file = e.target.files[0]; // Get the first file
    if (file) {
      setSelectedMedia(file); // Store the selected file in state
      setMediaType(file.type.startsWith("image") ? "image" : "video"); // Determine if it's an image or video
    }
  };
  const handleIconClick = () => {
    fileInputRef.current.click(); // Programmatically trigger the file input
  };
  const handleBannerClick = () => {
    fileInputsRef.current.click(); // Programmatically trigger the file input
  };
  const handleVideoClick = () => {
    VideoInputsRef.current.click(); // Programmatically trigger the file input
  };
  return (
    <Box
      borderRadius={"10px"}
      p={"20px"}
      bg={"#fff"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
      h={"fit-content"}
    >
      <Text fontWeight={"bold"}>Service Description</Text>
      <Box mt="20px">
        <Box my={"20px"}>
          <FormLabel>Service Title</FormLabel>
          <Textarea bg={"#DCDCDC"} h={"30px"} />
        </Box>
        {/* <Box my={"20px"}>
          <FormLabel>Add Banner</FormLabel>
          <InputGroup>
            <Input bg={"#DCDCDC"} />
            <InputRightElement>
              <Flex
                p="7px"
                position="absolute"
                borderRadius="10px"
                right="-5px"
                bottom="-5px"
              >
                <FormLabel htmlFor="profile-pic">
                  
                  <RiAttachment2
                    fontSize={"1.2em"}
                    color="green"
                    cursor="pointer"
                  />
                </FormLabel>
                <Input
                  display={"none"}
                  type="file"
                  id="profile-pic"
                  // onChange={handleChange}
                />
              </Flex>
            </InputRightElement>
          </InputGroup>
        </Box> */}

        <Box my={"20px"}>
          <FormLabel>Add Banner</FormLabel>
          <InputGroup>
            <Input bg={"#DCDCDC"} />
            <InputRightElement>
              <Flex
                p="7px"
                position="absolute"
                borderRadius="10px"
                alignItems={"center"}
              >
                <Box>
                  <RiAttachment2
                    fontSize={"1.2em"}
                    color="green"
                    cursor="pointer"
                    onClick={handleBannerClick}
                  />
                </Box>
                <Input
                  type="file"
                  accept="image/*"
                  ref={fileInputsRef}
                  multiple
                  onChange={handleFilesChange}
                  display={"none"}
                />
              </Flex>
            </InputRightElement>
          </InputGroup>

          {/* Display selected images */}
          <Box>
            {selectedBanner && (
              <Box mt={"10px"}>
                <Image
                  src={URL.createObjectURL(selectedBanner)}
                  alt="Selected"
                  width={"full"}
                  h={"200px"}
                  objectFit={"cover"}
                  // style={{
                  //   width: "300px",
                  //   height: "300px",
                  //   objectFit: "cover",
                  // }}
                />
              </Box>
            )}
          </Box>
        </Box>

        <Box my={"20px"}>
          <FormLabel>Add Pictures</FormLabel>
          <InputGroup>
            <Input bg={"#DCDCDC"} />
            <InputRightElement>
              <Flex
                p="7px"
                position="absolute"
                borderRadius="10px"
                alignItems={"center"}
              >
                <Box>
                  <RiAttachment2
                    fontSize={"1.2em"}
                    color="green"
                    cursor="pointer"
                    onClick={handleIconClick}
                  />
                </Box>
                <Input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  multiple
                  onChange={handleFileChange}
                  display={"none"}
                />
              </Flex>
            </InputRightElement>
          </InputGroup>

          {/* Display selected images */}
          <Flex mt={"10px"} gap={"10px"}>
            {selectedImages.map((image, index) => (
              <Box key={index}>
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`Selected ${index}`}
                  width="100px"
                />
              </Box>
            ))}
          </Flex>
        </Box>

        {/* <Box my={"20px"}>
          <FormLabel>Add Video File</FormLabel>
          <InputGroup>
            <Input bg={"#DCDCDC"} />
            <InputRightElement>
              <Flex
                p="7px"
                position="absolute"
                borderRadius="10px"
                alignItems={"center"}
              >
                <Box>
                  <RiAttachment2
                    fontSize={"1.2em"}
                    color="green"
                    cursor="pointer"
                    onClick={handleVideoClick}
                  />
                </Box>
                <Input
                  type="file"
                  accept="image/*, video/*"
                  ref={VideoInputsRef}
                  multiple
                  onChange={handleVideoChange}
                  display={"none"}
                />
              </Flex>
            </InputRightElement>
          </InputGroup>

          Display selected video
          {selectedMedia && (
            <Box mt={"10px"}>
              {mediaType === "image" ? (
                <Image
                  src={URL.createObjectURL(selectedMedia)}
                  alt="Selected"
                  w={"300px"}
                  h={"300px"}
                  objectFit={"cover"}
                />
              ) : (
                <video
                  controls
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                >
                  <source
                    src={URL.createObjectURL(selectedMedia)}
                    type={selectedMedia.type}
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </Box>
          )}
        </Box> */}
        <Box mb={"20px"}>
          <FormLabel>Add Video Link</FormLabel>
          <FormInput type={"url"}  bg={"#DCDCDC"}/>
        </Box>
        

        <Box mb={"20px"}>
          <FormLabel>Service Category</FormLabel>
          <Select bg={"#DCDCDC"}>
            <option value="option1">Category 1</option>
            <option value="option2">Category 2</option>
            <option value="option3">Category 3</option>
          </Select>
        </Box>
        <Box my={"20px"}>
          <FormLabel>Describe your service</FormLabel>
          <Textarea bg={"#DCDCDC"} h={"80px"} />
        </Box>

        {/* <Box>
        <Input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      
      Display selected images
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {selectedImages.map((image, index) => (
          <div key={index}>
            <img 
              src={URL.createObjectURL(image)} 
              alt={`Selected ${index}`} 
              width="100"
            />
          </div>
        ))}
      </div>

        </Box> */}

        <Flex>
          <CustomBtn text={"update"} />
        </Flex>
      </Box>
    </Box>
  );
};

export default ServiceDescription;
