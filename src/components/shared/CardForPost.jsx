import { Flex } from "@chakra-ui/react";
import CardView from "./CardView";

const CardForPost = ({ collectionPosts, handleDeleteCard }) => {
  return (
    <Flex direction={{ base: "column", md: "row" }} gap={2}>
      {collectionPosts?.map((card, index) => (
        <div key={index}>
          <CardView card={card} onDelete={handleDeleteCard} />
        </div>
      ))}
    </Flex>
  );
};

export default CardForPost;
