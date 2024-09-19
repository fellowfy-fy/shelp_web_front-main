import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import ModalComponent from "../ModalComponent";

const ProfileActions = ({ isOwnProfile, isFollowing, isUpdating }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState(null); // To track which modal to show
  const dots = "/dots.svg";

  const handleOpenModal = (type) => {
    setModalType(type);
    onOpen();
  };
  return (
    <Flex gap={4}>
      {isOwnProfile ? (
        <>
          <Button
            width="80px"
            height="32px"
            background="transparent"
            borderRadius="5px"
            border="2px solid black" // Add black border here
            fontFamily="'Assistant'"
            fontWeight="700"
            fontSize="14px"
            lineHeight="18px"
            color="black"
          >
            Share
          </Button>

          <Button
            width="80px"
            height="32px"
            background="#1B1D28"
            borderRadius="5px"
            fontFamily="'Assistant'"
            fontWeight="700"
            fontSize="14px"
            lineHeight="18px"
            color="white"
          >
            Follow
          </Button>
          <Button
            width="10px"
            height="32px"
            background="transparent"
            borderRadius="5px"
            fontFamily="'Assistant'"
            fontWeight="700"
            fontSize="14px"
            lineHeight="18px"
            color="white"
            onClick={() => handleOpenModal("more")}
          >
            <img src={dots} alt="dots" />
          </Button>
        </>
      ) : (
        <Button
          bg={"blue.500"}
          color={"white"}
          _hover={{ bg: "blue.600" }}
          size={{ base: "xs", md: "sm" }}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
      {modalType && (
        <ModalComponent
          isOpen={isOpen}
          onClose={onClose}
          type={modalType}
          data={[]} // Pass an empty array if there's no specific data
        />
      )}
    </Flex>
  );
};

export default ProfileActions;
