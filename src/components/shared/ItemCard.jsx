import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  IconButton,
  Avatar,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegBookmark } from "react-icons/fa";
import ModalComponent from "./ModalComponent";
import { timeAgo } from "../../utils/timeAgo"; // Импортируем функцию timeAgo

const Like = "/Like.svg";
const Favorite = "/Favorite.svg";
const Comment = "/Comment.svg";
const Send = "/Send.svg";
const Dots = "/dots.svg";

const ItemCard = ({
  imageUrl,
  title,
  author,
  isAuthenticated,
  initialLikes = 123, // начальное значение лайков
  initialBookmarks = 123, // начальное значение закладок
}) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure(); // Для управления модальным окном

  const [isExpanded, setIsExpanded] = useState(false); // Состояние для управления раскрытием текста
  const [likes, setLikes] = useState(initialLikes); // Состояние для лайков
  const [bookmarks, setBookmarks] = useState(initialBookmarks); // Состояние для закладок
  const [liked, setLiked] = useState(false); // Состояние для кнопки лайков
  const [bookmarked, setBookmarked] = useState(false); // Состояние для кнопки закладок

  const handleImageClick = () => navigate("/testcontent");
  const handleUserClick = () => navigate(`/${author.username}`);

  // Использование хука для изменения размера в зависимости от брейкпоинта
  const cardWidth = useBreakpointValue({ base: "100%", sm: "300px" });

  // Функция для обрезки текста до 20 символов
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) : text;
  };

  // Обработчик для переключения раскрытия текста
  const handleToggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldShowMore = title.length > 45; // Если текст больше 45 символов

  // Обработчик нажатия на лайк
  const handleLike = () => {
    if (liked) {
      setLikes((prevLikes) => prevLikes - 1); // Уменьшаем, если уже лайкнуто
    } else {
      setLikes((prevLikes) => prevLikes + 1); // Увеличиваем на 1
    }
    setLiked(!liked); // Переключаем состояние
  };

  // Обработчик нажатия на закладку
  const handleBookmark = () => {
    if (bookmarked) {
      setBookmarks((prevBookmarks) => prevBookmarks - 1); // Уменьшаем, если уже добавлено в закладки
    } else {
      setBookmarks((prevBookmarks) => prevBookmarks + 1); // Увеличиваем на 1
    }
    setBookmarked(!bookmarked); // Переключаем состояние
  };

  // Статичная дата публикации (например, 5 дней назад)
  const publishDate = new Date();
  publishDate.setDate(publishDate.getDate() - 5); // Установим дату 5 дней назад

  return (
    <>
      <Box
        width={cardWidth}
        boxShadow="0px 10px 40px rgba(222, 230, 237, 0.4)"
        borderRadius="12px"
        overflow="hidden"
        position="relative"
        height="auto"
      >
        <Flex p="4" align="center">
          <Avatar
            src={author.profilePicURL}
            size="sm"
            mr="3"
            cursor="pointer"
            onClick={handleUserClick}
          />
          <Box onClick={handleUserClick} cursor="pointer">
            <Text fontSize="14px" fontWeight="400" color="#1B1D28">
              {author.username}
            </Text>
            <Text fontSize="10px" fontWeight="400" color="#76777E">
              {author.location}
            </Text>
          </Box>
          <IconButton
            icon={<Image src={Dots} alt="dots" />}
            variant="ghost"
            size="sm"
            ml="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
            transform="rotate(90deg)"
            onClick={onOpen} // Открываем модальное окно при клике
          />
        </Flex>

        <Box as="button" onClick={handleImageClick} width="100%">
          <Image
            src={imageUrl}
            alt="Card Image"
            width="100%"
            objectFit="cover"
            className="aspect-auto"
            borderRadius="15px"
          />
        </Box>

        <Box p="4">
          <Flex justify="space-between" align="center">
            {/* Используем timeAgo для отображения времени публикации */}
            <Text fontSize="10px" fontWeight="400" color="#76777E">
              {timeAgo(publishDate)} {/* Например, "5 days ago" */}
            </Text>
            <Flex align="center" gap={3} justifyContent={"right"}>
              {/* Кнопка закладок */}
              <button className="flex items-center" onClick={handleBookmark}>
                <FaRegBookmark color={bookmarked ? "green" : "black"} />
                <Text ml="4px" fontSize="sm">
                  {bookmarks}
                </Text>
              </button>
              {/* Кнопка лайков */}
              <button className="flex items-center" onClick={handleLike}>
                <FaHeart color={liked ? "red" : "black"} />
                <Text ml="4px" fontSize="sm">
                  {likes}
                </Text>
              </button>
            </Flex>
          </Flex>

          {/* Если текст больше 45 символов, добавляем кнопку "More", иначе показываем текст целиком */}
          <Text
            fontSize="12px"
            fontWeight="400"
            color="#1B1D28"
            my="2"
            noOfLines={!isExpanded && shouldShowMore ? 1 : null}
          >
            {isExpanded || !shouldShowMore ? title : truncateText(title, 45)}{" "}
            {shouldShowMore && !isExpanded ? "..." : ""}
            {shouldShowMore && (
              <>
                <button
                  onClick={handleToggleText}
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  ({isExpanded ? "Less" : "More"})
                </button>
              </>
            )}
          </Text>
        </Box>
      </Box>

      {/* Модальное окно */}
      <ModalComponent
        isOpen={isOpen}
        onClose={onClose}
        type="more" // Передаем тип "more" для кнопок Share/Delete
        data={[]} // Можно передать дополнительные данные, если потребуется
        isAuthenticated={isAuthenticated} // Для показа кнопки "Delete" если пользователь авторизован
      />
    </>
  );
};

export default ItemCard;
