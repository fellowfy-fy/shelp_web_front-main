import { Box, Image, Text } from "@chakra-ui/react";

const ProductCard = ({ imageUrl, title }) => (
  <Box>
    <Image src={imageUrl} alt={title} borderRadius="md" />
    <Text>{title}</Text>
  </Box>
);

export default ProductCard;
