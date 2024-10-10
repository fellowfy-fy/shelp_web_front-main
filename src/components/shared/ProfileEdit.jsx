import { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  IconButton,
  Input,
  Button,
  Textarea,
  Switch,
  Text,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import Tags from "./Tags";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ProfileEdit = () => {
  const { t } = useTranslation();
  const [tags, setTags] = useState(["Summer", "Dresses"]);
  const [newTag, setNewTag] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("https://via.placeholder.com/100"); 
  const [isDragging, setIsDragging] = useState(false);

   // Обработчик загрузки изображения
   const handleAvatarChange = (file) => {
    const imageUrl = URL.createObjectURL(file); // Создаем временный URL для отображения
    setAvatarUrl(imageUrl); // Обновляем URL аватара
  };

  // Обработчик удаления аватара
  const handleRemoveAvatar = () => {
    setAvatarUrl("https://via.placeholder.com/100"); // Возвращаем плейсхолдер
  };

  // Обработчик начала перетаскивания
  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragging(true); // Активируем состояние перетаскивания
  };

  // Обработчик завершения перетаскивания
  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false); // Деактивируем состояние перетаскивания
  };

  // Обработчик перетаскивания файлов
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false); // Деактивируем состояние перетаскивания

    const file = event.dataTransfer.files[0];
    if (file) {
      handleAvatarChange(file); // Обработка загрузки файла
    }
  };

  return (
    <Box p={8} maxWidth="1000px" mx="auto" bg="white" borderRadius="10px">
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        {t("edit-profile")}
      </Text>

      
      {/* Avatar Section */}
      <Flex align="center" mb={6} width="100%">
        {/* Аватар в круге с поддержкой Drag and Drop */}
        <Box
          position="relative"
          onDragEnter={handleDragEnter}
          onDragOver={(event) => event.preventDefault()} // Останавливаем действие по умолчанию при перетаскивании
          onDragLeave={handleDragLeave}
          onDrop={handleDrop} // Обработчик Drop для файлов
          p={isDragging ? 2 : 0}
          border={isDragging ? "2px dashed #3182CE" : "none"} // Изменяем стиль при перетаскивании
          borderRadius="full"
        >
          <Avatar size="xl" name="Profile Image" src={avatarUrl} />
          <IconButton
            icon={<FaTimes />}
            size="sm"
            position="absolute"
            top="0"
            right="0"
            bg="white"
            borderRadius="full"
            boxShadow="md"
            aria-label="Remove avatar"
            onClick={handleRemoveAvatar} // Обработчик удаления аватара
          />
        </Box>
        <Box ml={6} width="100%">
          {/* Input для загрузки изображения */}
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => handleAvatarChange(e.target.files[0])} // Обработчик выбора файла
            style={{ display: "none" }}
            id="avatar-upload"
          />
          <Button
            as="label"
            htmlFor="avatar-upload"
            cursor="pointer"
            bg="black"
            color="white"
            _hover={{ bg: "blackAlpha.800" }}
          >
            {t("upload-avatar")}
          </Button>
        </Box>
      </Flex>

      {/* Full name input */}
      <Text fontWeight="bold" mb={2}>
        {t("full-name")}
      </Text>
      <Input placeholder="Full name" defaultValue="Summer looks" mb={4} />

      {/* Email input */}
      <Text fontWeight="bold" mb={2}>
        {t("email")}
      </Text>
      <Input placeholder="example@mail.com" mb={4} />

      {/* Description */}
      <Text fontWeight="bold" mb={2}>
        {t("description")}
      </Text>
      <Textarea
        placeholder="Write something about yourself..."
        defaultValue="My specialty lies in creating colorful creations, amazing designs, and high-quality website artworks that have the ext"
        mb={4}
      />

      {/* Tags Section */}
      <Tags initialTags={tags} />

      {/* Private Profile Switch */}
      <Flex align="center" my={4}>
        <Switch
          id="private-profile"
          isChecked={isPrivate}
          onChange={() => setIsPrivate(!isPrivate)}
        />
        <Text ml={2}>Private profile</Text>
      </Flex>

      {/* Update and Cancel Buttons */}
      <Flex direction="column" align="center" w="100%">
        {/* Кнопки Update и Cancel */}
        <Flex align="center" justify="center" gap="30px" mb={4} w="100%">
          <Button
            bg="black"
            color="white"
            _hover={{ bg: "blackAlpha.800" }}
            w={{ base: "100%", sm: "190px" }} // 100% ширины на мобильных устройствах
            h="50px"
            borderRadius="10px"
          >
            {t("update")}
          </Button>
          <Button
            variant="outline"
            colorScheme="gray"
            w={{ base: "100%", sm: "190px" }} // 100% ширины на мобильных устройствах
            h="50px"
            borderRadius="10px"
            background="#E9E9E9"
          >
            {t("cancel")}
          </Button>
        </Flex>

        {/* Кнопка Change Password */}
        <ChakraLink href="/profile/password" w="100%">
          <Flex justify="center">
            <Button
              variant="outline"
              colorScheme="gray"
              w="410px" // Ширина кнопки на больших экранах
              h="50px"
              borderRadius="10px"
              maxW="100%" // Ограничиваем максимальную ширину кнопки
            >
              {t("change-password")}
            </Button>
          </Flex>
        </ChakraLink>
      </Flex>
    </Box>
  );
};

export default ProfileEdit;
