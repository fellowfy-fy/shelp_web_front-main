import { Box, Image, Text, Button, Link } from "@chakra-ui/react";
import AvatarWithUsername from "../ui/AvatarWithUsername";
import ActionButtons from "../ui/ActionButtons";

const ProductDetails = ({ product }) => (
  <Box>
    <Image
      src={product.imageURL}
      alt={product.title}
      borderRadius="lg"
      objectFit="cover"
    />
    <AvatarWithUsername
      username={product.author.username}
      profilePicURL={product.author.profilePicURL}
    />
    <Text fontSize={18} fontWeight={500} mb={3} mt={1}>
      {product.title}
    </Text>
    <ActionButtons likes={product.likesNum} saves={product.savesNum} />
    <Link href={product.purchaseLink} isExternal>
      <Button variant="outline" colorScheme="blue" mt={3}>
        Buy for {product.price}
      </Button>
    </Link>
  </Box>
);

export default ProductDetails;
