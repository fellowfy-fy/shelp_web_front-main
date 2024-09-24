import { Box, Image, Text, Flex, IconButton } from "@chakra-ui/react";
import { FaHeart, FaRegBookmark, FaTimes } from "react-icons/fa";

const CardView = ({ card, onDelete, showDeleteButton }) => {
  return (
    <Box
      borderRadius="16px"
      overflow="hidden"
      position="relative"
      width="100%"
      bg="white"
    >
      {/* Условно рендерим кнопку удаления */}
      {showDeleteButton && (
        <IconButton
          icon={<FaTimes />}
          size="sm"
          position="absolute"
          top="8px"
          right="8px"
          bg="white"
          borderRadius="50%"
          boxShadow="md"
          aria-label="Close"
          onClick={() => onDelete(card.id)}
        />
      )}

      {/* Image */}
      <Image
        src={card.imageUrl}
        alt={card.title}
        width="100%"
        height="auto"
        maxW={"200px"}
        borderRadius="16px"
      />

      {/* Info Section */}
      <Box p="8px">
        {/* Icons Row */}
        <Flex justify="space-between" align="center">
          {/* Bookmark and Like Icons with Counts */}
          <Flex align="center" gap={3}>
            <div className="flex items-center">
              <FaRegBookmark />
              <Text ml="4px" fontSize="sm">
                {card.savesNum}
              </Text>
            </div>
            <div className="flex items-center">
              <FaHeart ml="8px" color="red" />
              <Text ml="4px" fontSize="sm">
                {card.likesNum}
              </Text>
            </div>
          </Flex>
        </Flex>

        {/* Title */}
        <Text mt="8px" fontSize="sm" isTruncated>
          {card.title}
        </Text>
      </Box>
    </Box>
  );
};

export default CardView;
