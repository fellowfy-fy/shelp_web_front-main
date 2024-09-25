import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import ModalComponent from "./ModalComponent";
import { useTranslation } from "react-i18next";

const CollectionActions = ({ isOwnProfile, isFollowing, isUpdating }) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState(null);

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
            width={{ base: "70px", md: "80px" }} // Адаптивная ширина кнопки
            height="32px"
            background="#1B1D28"
            borderRadius="5px"
            fontWeight="700"
            fontSize={{ base: "12px", md: "14px" }} // Адаптивный шрифт
            lineHeight="18px"
            color="white"
          >
            {t("follow")}
          </Button>
          <Button
            width={{ base: "8px", md: "10px" }} // Адаптивная ширина
            height="32px"
            background="transparent"
            borderRadius="5px"
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
          size={{ base: "xs", md: "sm" }} // Адаптивный размер кнопки
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}

      {/* Modal */}
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

export default CollectionActions;
