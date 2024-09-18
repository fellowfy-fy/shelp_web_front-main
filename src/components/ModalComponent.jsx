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
import { FaShareAlt, FaTrashAlt } from "react-icons/fa"; // Import icons

const ModalComponent = ({ isOpen, onClose, type, data = [] }) => {
  const headers = {
    followers: "Followers",
    following: "Following",
    products: "Products",
    editors: "Editors",
    more: "Additional",
  };

  // State to handle the displayed data and pagination
  const [visibleData, setVisibleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Number of users to load per page
  const usersPerPage = 20;

  // Load initial data when the modal opens
  useEffect(() => {
    if (isOpen && type !== "more") {
      // Only handle data for types other than "more"
      setVisibleData(data.slice(0, usersPerPage)); // Load first 20 users
      setCurrentPage(1); // Reset page counter
    }
  }, [isOpen, data, type]);

  // Filter data based on the search term
  const filteredData = visibleData.filter((item) => {
    if (type === "products") {
      return item.productName?.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return item.username?.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

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
        height="auto" // Adjusted height for "more" content
        maxH="70%"
        minH={220}
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

        {/* Search Bar */}
        {(type === "followers" ||
          type === "following" ||
          type === "editors" ||
          type === "products") && (
          <Box px={6} mt={4}>
            <Input
              placeholder={`Search ${headers[type]}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Box>
        )}

        {/* Body Content */}
        <ModalBody
          overflowY="auto"
          px={6}
          pt="20px" // Adjusted for spacing
        >
          {type === "more" ? (
            <VStack alignItems="stretch" spacing={4}>
              <Flex
                alignItems="center"
                justifyContent="center"
                width="100%"
                borderTop="1px solid #E2E8F0" // Adds a line
                padding="10px 0"
              >
                <button>
                  <Flex alignItems="center">
                    <FaShareAlt size="20px" />
                    <Text ml={4} fontWeight="600" fontSize={20}>
                      Share
                    </Text>
                  </Flex>
                </button>
              </Flex>
              <Flex
                alignItems="center"
                justifyContent="center"
                width="100%"
                borderTop="1px solid #E2E8F0" // Adds a line
                padding="10px 0"
              >
                <button>
                  <Flex alignItems="center">
                    <FaTrashAlt size="20px" />
                    <Text ml={4} fontWeight="600" fontSize={20}>
                      Delete
                    </Text>
                  </Flex>
                </button>
              </Flex>
            </VStack>
          ) : (
            // Existing content for other types (followers, following, products)
            <VStack alignItems="stretch" spacing={4}>
              {filteredData.map((item, index) => (
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
                    <Box ml={4}>
                      <Text fontWeight="600">
                        {type === "products" ? item.productName : item.username}
                      </Text>
                      {type !== "products" && item.fullName && (
                        <Text fontSize="sm" color="gray.500">
                          {item.fullName}
                        </Text>
                      )}
                    </Box>
                  </Flex>

                  {/* Follow/Unfollow and Remove Buttons */}
                  <Flex>
                    {type !== "products" && (
                      <Button
                        size="sm"
                        width="64px"
                        height="32px"
                        background={
                          item.isFollowing ? "#000000" : "transparent"
                        }
                        color={item.isFollowing ? "#FFFFFF" : "#000000"}
                        border="1px solid #1B1D28"
                        borderRadius="5px"
                        _hover={{
                          background: item.isFollowing ? "#1B1D28" : "black",
                          color: "#FFFFFF",
                        }}
                        onClick={() => {
                          // Add logic to follow/unfollow
                        }}
                      >
                        {item.isFollowing ? "Unfollow" : "Follow"}
                      </Button>
                    )}
                    <Button
                      size="sm"
                      ml={2}
                      background="transparent"
                      color="#FF0000"
                      onClick={() => {
                        // Add logic to remove
                      }}
                    >
                      Remove
                    </Button>
                  </Flex>
                </Flex>
              ))}
            </VStack>
          )}

          {/* Load More Button */}
          {type !== "more" && visibleData.length < data.length && (
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
