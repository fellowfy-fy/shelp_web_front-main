import { Flex, Text, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import ModalComponent from "../ModalComponent"; // Import your modal component

const UserInfo = ({ posts, products, followers, following }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState(null); // To track which modal to show

  const handleOpenModal = (type) => {
    setModalType(type);
    onOpen();
  };

  return (
    <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
      <Text fontSize={{ base: "xs", md: "sm" }}>
        <Text as="span" fontWeight={"bold"} mr={1}>
          {posts?.length || 0}
        </Text>
        Posts
      </Text>

      <Button
        fontSize={{ base: "xs", md: "sm" }}
        background="transparent"
        _hover={{ background: "rgba(0, 0, 0, 0.05)" }}
        _focus={{ boxShadow: "none" }}
        onClick={() => handleOpenModal("products")}
      >
        <Text as="span" fontWeight={"bold"} mr={1}>
          {products?.length || 0}
        </Text>
        Products
      </Button>

      <Button
        fontSize={{ base: "xs", md: "sm" }}
        background="transparent"
        _hover={{ background: "rgba(0, 0, 0, 0.05)" }}
        _focus={{ boxShadow: "none" }}
        onClick={() => handleOpenModal("followers")}
      >
        <Text as="span" fontWeight={"bold"} mr={1}>
          {followers?.length || 0}
        </Text>
        Followers
      </Button>

      <Button
        fontSize={{ base: "xs", md: "sm" }}
        background="transparent"
        _hover={{ background: "rgba(0, 0, 0, 0.05)" }}
        _focus={{ boxShadow: "none" }}
        onClick={() => handleOpenModal("following")}
      >
        <Text as="span" fontWeight={"bold"} mr={1}>
          {following?.length || 0}
        </Text>
        Following
      </Button>

      {/* Modal */}
      {modalType && (
        <ModalComponent
          isOpen={isOpen}
          onClose={onClose}
          type={modalType}
          data={
            modalType === "followers"
              ? followers
              : modalType === "following"
              ? following
              : products
          }
        />
      )}
    </Flex>
  );
};

export default UserInfo;
