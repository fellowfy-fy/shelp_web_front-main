import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ username, displayName, imageUrl }) => {
  const navigate = useNavigate(); // Используем useNavigate для навигации

  const handleUserClick = () => {
    navigate(`/${username}`); // Переход на страницу пользователя
  };

  return (
    <VStack
      as="button" // Сделаем всю карточку кликабельной
      onClick={handleUserClick}
      _hover={{ transform: "scale(1.05)", transition: "all 0.3s ease" }}
    >
      <Box
        boxSize="100px"
        bg="gray.200"
        borderRadius="full"
        overflow="hidden"
        borderWidth="1px"
        borderColor="gray.300"
      >
        <Image
          src={imageUrl}
          alt={`${username}'s avatar`}
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>
      <Text fontWeight="bold">{username}</Text>
      <Text color="gray.500">{displayName}</Text>
    </VStack>
  );
};

export default UserCard;
