import {
  Box,
  Flex,
  Image,
  Avatar,
  Button,
  Text,
  HStack,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart, FaBookmark, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CardForPost from "./CardForPost";
import Comments from "../ui/Comments";
import GoBackButton from "../ui/GoBackButton";
import { useTranslation } from "react-i18next";

// Статичные данные, которые легко заменить на данные из API
const productData = {
  imageUrl:
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDQ1MTZ8MHwxfGFsbHwyfHx8fHx8fHwxNjU4NDA3MTc0&ixlib=rb-1.2.1&q=80&w=1080",
  title: "Nike Air Jordan Red Sneakers",
  likes: 997200,
  saves: 997200,
  author: {
    username: "hemo_قمو",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  description:
    "My specialty lies in creating colorful creations, amazing designs, and high-quality website artworks that have the potential to capture the attention while making a very positive first impression on the visitor.",
  tags: ["pink", "dress", "summer"],
  collectionPosts: [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDQ1MTZ8MHwxfGFsbHwyfHx8fHx8fHwxNjU4NDA3MTc0&ixlib=rb-1.2.1&q=80&w=1080",
      title: "Million Parrots in India Like a Family",
      likesNum: 997200,
      savesNum: 997200,
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDQ1MTZ8MHwxfGFsbHwyfHx8fHx8fHwxNjU4NDA3MTc0&ixlib=rb-1.2.1&q=80&w=1080",
      title: "Million Parrots in India Like a Family",
      likesNum: 997200,
      savesNum: 997200,
    },
  ],
};

// Кастомная левая стрелка
const PrevArrow = ({ onClick }) => (
  <IconButton
    icon={<FaArrowLeft />}
    position="absolute"
    left="10px"
    top="50%"
    transform="translateY(-50%)"
    bg="white"
    borderRadius="full"
    boxShadow="md"
    aria-label="Previous Slide"
    onClick={onClick}
    zIndex={1}
  />
);

// Кастомная правая стрелка
const NextArrow = ({ onClick }) => (
  <IconButton
    icon={<FaArrowRight />}
    position="absolute"
    right="10px"
    top="50%"
    transform="translateY(-50%)"
    bg="white"
    borderRadius="full"
    boxShadow="md"
    aria-label="Next Slide"
    onClick={onClick}
    zIndex={1}
  />
);

const ProductDetails = () => {
  const { t } = useTranslation();
  const product = productData;
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("products");
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate(`/${product.author.username}`);
  };

  const handleLike = () => setLiked(!liked);
  const handleSave = () => setSaved(!saved);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Flex
      direction={{ base: "column", xl: "row" }}
      gap={10}
      maxW="1200px"
      mx="auto"
      my={6}
    >
      {/* Левая часть с каруселью изображений */}
      <Box
        width={{ base: "100%", xl: "60%" }} // 60% на экранах XL и выше
        position="relative"
      >
      <GoBackButton />

        <Slider {...settings}>
          <Box>
            <Image
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDQ1MTZ8MHwxfGFsbHwyfHx8fHx8fHwxNjU4NDA3MTc0&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Product Image 1"
              maxW="100%"
              objectFit="cover"
              borderRadius="15px"
            />
          </Box>
          <Box>
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDQ1MTZ8MHwxfGFsbHwyfHx8fHx8fHwxNjU4NDA3MTc0&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Product Image 2"
              maxW="100%"
              objectFit="cover"
              borderRadius="15px"
            />
          </Box>
        </Slider>
      </Box>

      {/* Правая часть */}
      <Box width={{ base: "100%", xl: "40%" }} flex="1" my={5}>
        {/* Кнопки лайк и сейв */}
        <HStack spacing={4} mb={4} justify={"space-between"}>
          <Box>
            <Button
              onClick={handleLike}
              leftIcon={liked ? <FaHeart color="red" /> : <FaHeart />}
              variant="ghost"
            >
              {liked ? product.likes + 1 : product.likes}
            </Button>

            <Button
              onClick={handleSave}
              leftIcon={saved ? <FaBookmark color="green" /> : <FaBookmark />}
              variant="ghost"
            >
              {saved ? product.saves + 1 : product.saves}
            </Button>
          </Box>
          <Box>
            <Button
              variant="outline"
              position="relative"
              border="none"
              borderRadius="full"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "full",
                padding: "2px",
                bgGradient: "linear(to-r, #25A9EF, #01D6B8)",
                zIndex: -1,
              }}
              _hover={{ bg: "#faf7fa" }}
              _after={{
                content: '""',
                position: "absolute",
                top: "2px",
                left: "2px",
                right: "2px",
                bottom: "2px",
                background: "#ffffff",
                borderRadius: "full",
                zIndex: -1,
              }}
            >
              {t("save")}
            </Button>

            {/* Три точки */}
            <Button variant="ghost" ml={2}>
              <Image src="/dots.svg" alt="More" />
            </Button>
          </Box>
        </HStack>

        {/* Название продукта */}
        <Text fontSize="32px" fontWeight="semibold" mt={4}>
          {product.title}
        </Text>

        {/* Аватарка пользователя и никнейм с редиректом */}
        <HStack spacing={3} mt={4} onClick={handleUserClick} cursor="pointer">
          <Avatar src={product.author.avatarUrl} size="md" />
          <Box>
            <Text fontSize="16px">{product.author.username}</Text>
          </Box>
        </HStack>

        {/* Описание продукта */}
        <Text fontSize="16px" mt={4}>
          {product.description}
        </Text>

        {/* Теги */}
        <Box mt={4}>
          <label>#xbox #dogs</label>
        </Box>

        {/* Вкладки */}
        <HStack mt={6} spacing={4}>
          <Button
            onClick={() => setActiveTab("products")}
            variant="ghost"
            fontWeight={activeTab === "products" ? "bold" : "normal"}
            color={activeTab === "products" ? "black" : "gray.500"}
          >
            {t("products-in-posts")}
          </Button>
          <Button
            onClick={() => setActiveTab("comments")}
            variant="ghost"
            fontWeight={activeTab === "comments" ? "bold" : "normal"}
            color={activeTab === "comments" ? "black" : "gray.500"}
          >
            {t("comments")}
          </Button>
        </HStack>
        <Divider />

        {/* Контент вкладок */}
        <Box mt={6}>
          {activeTab === "products" ? (
            <CardForPost
              collectionPosts={product.collectionPosts}
              handleDeleteCard={() => {}}
              showDeleteButton={false}
            />
          ) : (
            <Comments />
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default ProductDetails;
