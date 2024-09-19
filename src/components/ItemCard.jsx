import React from "react";
import { Box, Image, Text, Flex, IconButton, Avatar } from "@chakra-ui/react";

const Like = "/Like.svg";
const Favorite = "/Favorite.svg";
const Comment = "/Comment.svg";
const Send = "/Send.svg";
const Dots = "/dots.svg";

const ItemCard = ({ imageUrl, title, publishDate, likesNum, author }) => {
  const handleImageClick = () => {
    // Define what happens when the image is clicked (e.g., navigate to another page)
    console.log("Image clicked!");
  };

  return (
    <Box
      width="300px"
      backgroundColor="white"
      border="1px solid #F0F6FD"
      boxShadow="0px 10px 40px rgba(222, 230, 237, 0.4)"
      borderRadius="12px"
      overflow="hidden"
      position="relative"
      height="auto"
    >
      {/* Card Header */}
      <Flex p="4" align="center">
        <Avatar src={author.profilePicURL} size="sm" mr="3" />
        <Box>
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
          transform="rotate(90deg)" // Rotate dots to horizontal
        />
      </Flex>

      {/* Clickable Image */}
      <Box as="button" onClick={handleImageClick} width="100%">
        <Image
          src={imageUrl}
          alt="Card Image"
          width="100%"
          objectFit="cover"
          className="aspect-auto"
        />
      </Box>

      {/* Card Footer */}
      <Box p="4">
        {/* Action Icons */}
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

        {/* Likes Text */}
        <Text fontSize="12px" fontWeight="600" color="#1B1D28" mb="2">
          Liked by <span className="font-bold">Jessica</span> and {likesNum}{" "}
          others
        </Text>

        {/* Caption */}
        <Text fontSize="12px" fontWeight="400" color="#1B1D28" mb="2">
          &#8220; {title}... <button>(More)</button>
        </Text>

        {/* Date */}
        <Text fontSize="10px" fontWeight="400" color="#76777E">
          {publishDate}
        </Text>
      </Box>
    </Box>
  );
};

export default ItemCard;
