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
import ModalComponent from "./ModalComponent"; // Импортируем модальное окно

const Like = "/Like.svg";
const Favorite = "/Favorite.svg";
const Comment = "/Comment.svg";
const Send = "/Send.svg";
const Dots = "/dots.svg";

const ItemCard = ({
  imageUrl,
  title,
  publishDate,
  likesNum,
  author,
  isAuthenticated,
}) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure(); // Для управления модальным окном

  const handleImageClick = () => navigate("/testcontent");
  const handleUserClick = () => navigate(`/${author.username}`);

  // Использование хука для изменения размера в зависимости от брейкпоинта
  const cardWidth = useBreakpointValue({ base: "165px", sm: "300px" });

  return (
    <>
      {/* Карточка */}
      <Box
        width={cardWidth}
        backgroundColor="white"
        border="1px solid #F0F6FD"
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
          />
        </Box>

        <Box p="4">
          <Flex mb="2" justifyContent="space-between" alignItems="center">
            <Flex>
              <IconButton
                icon={<Image src={Like} alt="Like" />}
                variant="ghost"
                aria-label="Like"
              />
              <IconButton
                icon={<Image src={Comment} alt="Comment" />}
                variant="ghost"
                aria-label="Comment"
              />
              <IconButton
                icon={<Image src={Send} alt="Send" />}
                variant="ghost"
                aria-label="Send"
              />
            </Flex>
            <IconButton
              icon={<Image src={Favorite} alt="Save" />}
              variant="ghost"
              aria-label="Save"
            />
          </Flex>
          <Text fontSize="12px" fontWeight="600" color="#1B1D28" mb="2">
            Liked by{" "}
            <Text
              as="button"
              onClick={handleUserClick}
              cursor="pointer"
              fontWeight="bold"
              display="inline"
            >
              Jessica
            </Text>{" "}
            and {likesNum} others
          </Text>
          <Text fontSize="12px" fontWeight="400" color="#1B1D28" mb="2">
            &#8220; {title}... <button>(More)</button>
          </Text>
          <Text fontSize="10px" fontWeight="400" color="#76777E">
            {publishDate}
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
