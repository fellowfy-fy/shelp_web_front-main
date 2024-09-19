import { Button, Divider } from "@chakra-ui/react";
import CardView from "./CardView";

const ProductsInCollection = ({ collectionPosts }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold">Products in Collection</h1>
        <Button
          variant="outline"
          borderColor="black"
          color="black"
          borderRadius="full"
          size="sm"
        >
          Add collection
        </Button>
      </div>
      <Divider />
      <div className="flex gap-2">
        {collectionPosts?.map((card, index) => (
          <div key={index}>
            <CardView card={card} />
          </div>
        ))}
      </div>
      <Button
        bg="black"
        color="white"
        maxW="200px"
        _hover={{ bg: "blackAlpha.800" }}
      >
        Create collection
      </Button>
    </div>
  );
};
export default ProductsInCollection;
