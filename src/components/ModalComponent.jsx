import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Flex,
  Avatar,
  Text,
  VStack,
  Box,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import LoadMoreButton from "./NavButtons/LoadMoreButton"; // Import Load More Button component

const ModalComponent = ({ isOpen, onClose, type, data }) => {
  const headers = {
    followers: "Followers",
    following: "Following",
    products: "Products",
  };

  // State to handle the displayed data and pagination
  const [visibleData, setVisibleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Number of users to load per page
  const usersPerPage = 20;

  // Load initial data when the modal opens
  useEffect(() => {
    if (isOpen) {
      setVisibleData(data.slice(0, usersPerPage)); // Load first 20 users
      setCurrentPage(1); // Reset page counter
    }
  }, [isOpen, data]);

  // Function to load more users
  const loadMoreUsers = () => {
    const nextPage = currentPage + 1;
    const newVisibleData = data.slice(0, nextPage * usersPerPage);
    setVisibleData(newVisibleData);
    setCurrentPage(nextPage);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent
        width="627px"
        height="761px"
        background="#FFFFFF"
        border="1px solid rgba(0, 0, 0, 0.1)"
        borderRadius="15px"
        position="relative"
      >
        {/* Close Button */}
        <ModalCloseButton />

        {/* Header */}
        <ModalHeader
          fontFamily="'Inter', sans-serif"
          fontWeight="700"
          fontSize="30px"
          lineHeight="36px"
          textAlign="center"
          color="#000000"
          position="relative"
          top="24px"
        >
          {headers[type]}
        </ModalHeader>

        {/* Search Bar (Sticky header) */}
        <Box
          position="sticky"
          top="0"
          zIndex="1"
          background="#fff"
          padding="20px"
          borderBottom="1px solid rgba(0, 0, 0, 0.1)"
        >
          <Input placeholder={`Search ${headers[type]}`} />
        </Box>

        {/* Body Content */}
        <ModalBody
          overflowY="auto"
          px={6}
          pt="20px" // Adjusted for spacing
        >
          <VStack alignItems="stretch" spacing={4}>
            {visibleData.map((item, index) => (
              <Flex
                key={index}
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Flex alignItems="center">
                  {type === "products" ? (
                    <Box
                      height="50px"
                      width="50px"
                      background="gray.200"
                      borderRadius="lg"
                    />
                  ) : (
                    <Avatar name={item.username} src={item.avatar} />
                  )}
                  <Text ml={4} fontWeight="600">
                    {type === "products" ? item.productName : item.username}
                  </Text>
                </Flex>

                {/* Follow/Unfollow Button */}
                <Button
                  size="sm"
                  width="64px"
                  height="32px"
                  background={item.isFollowing ? "#000000" : "transparent"}
                  color={item.isFollowing ? "#FFFFFF" : "#000000"}
                  border="1px solid #1B1D28"
                  borderRadius="5px"
                  _hover={{
                    background: item.isFollowing ? "#1B1D28" : "black",
                    color: "#FFFFFF",
                  }}
                >
                  {item.isFollowing ? "Unfollow" : "Follow"}
                </Button>
              </Flex>
            ))}
          </VStack>

          {/* Load More Button */}
          {visibleData.length < data.length && (
            <Box mt={4} textAlign="center">
              <LoadMoreButton onClick={loadMoreUsers} />
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
