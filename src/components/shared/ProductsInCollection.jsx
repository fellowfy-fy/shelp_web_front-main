import { useState } from "react";
import { Button, Divider, Flex } from "@chakra-ui/react";
import CardView from "./CardView";
import AddProductModal from "./AddProductModal"; // Импортируем новый компонент
import { t } from "i18next";

const ProductsInCollection = ({ initialCollectionPosts }) => {
  const [collectionPosts, setCollectionPosts] = useState(
    initialCollectionPosts || []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleDeleteCard = (id) => {
    setCollectionPosts((prevPosts) =>
      prevPosts.filter((post) => post.id !== id)
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold">{t("product-in-collection")}</h1>
        <Button
          variant="outline"
          borderColor="black"
          color="black"
          borderRadius="full"
          size="sm"
          onClick={openModal}
        >
          {t("add-collection")}
        </Button>
      </div>
      <Divider />
      {/* Используем Flex и меняем направление в зависимости от экрана */}
      <Flex direction={{ base: "column", md: "row" }} gap={2}>
        {collectionPosts?.map((card, index) => (
          <div key={index} className="max-w-[200px]">
            <CardView card={card} onDelete={handleDeleteCard} />
          </div>
        ))}
      </Flex>
      <Button
        bg="black"
        color="white"
        maxW="200px"
        _hover={{ bg: "blackAlpha.800" }}
      >
        {t("create-collection")}
      </Button>

      <AddProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        collectionPosts={collectionPosts}
        onDelete={handleDeleteCard}
      />
    </div>
  );
};

export default ProductsInCollection;
