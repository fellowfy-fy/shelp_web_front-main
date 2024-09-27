import { Box } from "@chakra-ui/react";
import CardView from "./CardView";

const CardForPost = ({
  collectionPosts,
  handleDeleteCard,
  showDeleteButton,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {collectionPosts?.map((card, index) => (
        <Box key={index} mb={4}>
          <CardView
            card={card}
            onDelete={handleDeleteCard}
            showDeleteButton={showDeleteButton}
          />
        </Box>
      ))}
    </div>
  );
};

export default CardForPost;
