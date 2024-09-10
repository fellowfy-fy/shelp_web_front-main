import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Flex,
  Avatar,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";

const ModalComponent = ({ isOpen, onClose, type, data }) => {
  // Dynamic headers for different modal types
  const headers = {
    followers: "Followers",
    following: "Following",
    products: "Products",
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent maxH="80vh" overflow="hidden">
        {" "}
        {/* Set max height for modal */}
        <ModalHeader>{headers[type]}</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY="auto" px={6}>
          {" "}
          {/* Enable scrolling in the modal body */}
          <Input placeholder={`Search ${headers[type]}`} mb={4} />
          {/* Display the modal content */}
          <VStack alignItems="stretch" spacing={4}>
            {data.map((item, index) => (
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
                  <Text ml={4}>
                    {type === "products" ? item.productName : item.username}
                  </Text>
                </Flex>
                <Button size="sm">
                  {type === "followers" || type === "following"
                    ? item.isFollowing
                      ? "Unfollow"
                      : "Follow"
                    : "View"}
                </Button>
              </Flex>
            ))}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
