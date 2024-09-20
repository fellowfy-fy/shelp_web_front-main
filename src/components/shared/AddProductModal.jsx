import { useState } from "react";
import { Button, Flex, Input, Box } from "@chakra-ui/react";
import CustomModal from "./CustomModal"; // Используем компонент CustomModal
import CardView from "./CardView"; // Компонент для отображения карточек

const AddProductModal = ({ isOpen, onClose, collectionPosts, onDelete }) => {
  const [linkInput, setLinkInput] = useState("");
  const [productName, setProductName] = useState("");

  const handleAddProductByLink = () => {
    // Логика для добавления продукта по ссылке
  };

  const handleSearchProduct = () => {
    // Логика для поиска продукта
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} header="Add product">
      {/* Ввод ссылки */}
      <Flex alignItems="center" mb={4}>
        <Box flex="1">
          <Input
            placeholder="market.com/product"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
          />
        </Box>
        <Button
          ml={2}
          bg="black"
          color="white"
          onClick={handleAddProductByLink}
        >
          Add
        </Button>
      </Flex>

      {/* Ввод имени продукта */}
      <Flex alignItems="center" mb={4}>
        <Box flex="1">
          <Input
            placeholder="Product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Box>
        <Button ml={2} bg="black" color="white" onClick={handleSearchProduct}>
          Search
        </Button>
      </Flex>

      {/* Отображение карточек продуктов (если есть) */}
      <Flex flexWrap="wrap" gap={4}>
        {collectionPosts?.map((card, index) => (
          <Box key={index}>
            <CardView card={card} onDelete={onDelete} />
          </Box>
        ))}
      </Flex>
    </CustomModal>
  );
};

export default AddProductModal;
