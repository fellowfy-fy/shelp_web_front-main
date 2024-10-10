import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const CustomModal = ({ isOpen, onClose, header, children, ...rest }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered {...rest}>
      <ModalOverlay />
      <ModalContent
        width="627px"
        height="auto"
        maxH="70%"
        minH={220}
        background="#FFFFFF"
        border="1px solid rgba(0, 0, 0, 0.1)"
        borderRadius="15px"
        position="relative"
      >
        {/* Кнопка закрытия */}
        <ModalCloseButton
          size="lg" // Увеличиваем размер кнопки
          position="absolute" // Позиционируем явно
          top="10px" // Настраиваем отступ сверху
          right="10px" // Настраиваем отступ справа
          zIndex="1" // Устанавливаем приоритет з-индекса
          _hover={{ bg: "gray.200" }} // Добавляем эффект hover для кнопки
        />

        {/* Заголовок */}
        <ModalHeader
          fontFamily="'Inter', sans-serif"
          fontWeight="700"
          fontSize="30px"
          lineHeight="36px"
          textAlign="center"
          color="#000000"
          mt={10} // Добавляем отступ сверху
        >
          {header}
        </ModalHeader>

        {/* Контент */}
        <ModalBody overflowY="auto" px={6} pt="20px">
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
