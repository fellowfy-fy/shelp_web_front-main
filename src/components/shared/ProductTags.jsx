import {
  Tag,
  TagLabel,
  TagCloseButton,
  Input,
  Avatar,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const ProductTags = () => {
  // Хардкодированные данные для тегов
  const initialProductTags = [
    { id: 1, name: "Summer", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Winter", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Spring", image: "https://via.placeholder.com/150" },
  ];

  const [productTags, setProductTags] = useState(initialProductTags);
  const [newProductTag, setNewProductTag] = useState("");

  const removeProductTag = (tagToRemove) => {
    setProductTags((prevTags) =>
      prevTags.filter((tag) => tag.id !== tagToRemove.id)
    );
  };

  const addProductTag = () => {
    if (
      newProductTag &&
      !productTags.some((tag) => tag.name === newProductTag)
    ) {
      setProductTags((prevTags) => [
        ...prevTags,
        {
          id: Date.now(),
          name: newProductTag,
          image: "https://via.placeholder.com/150",
        }, // Создаем новый тег с временным изображением
      ]);
      setNewProductTag("");
    }
  };

  return (
    <div>
      <label className="text-xl font-semibold" htmlFor="product-tags">
        Save to collections
      </label>
      <div className="flex gap-2 mt-2">
        <Input
          placeholder="Select collection..."
          id="product-tags"
          value={newProductTag}
          onChange={(e) => setNewProductTag(e.target.value)}
        />
      </div>
      <div className="mt-2 gap-2 flex flex-wrap">
        {productTags?.map((tag) => (
          <Tag
            size="lg"
            variant="outline"
            borderRadius="full"
            padding="4px 12px"
            display="flex"
            alignItems="center"
            key={tag.id}
            maxW="200px"
            minW="150px"
          >
            <Avatar
              size="xs" // Уменьшил размер аватара
              name={tag.name}
              src={tag.image} // Используем изображение из данных
              borderRadius="full"
              marginRight="8px"
            />
            <Flex alignItems="center" ml={1} isTruncated>
              <Text fontSize="md" fontWeight="medium" isTruncated>
                {tag.name}
              </Text>
            </Flex>
            <TagCloseButton onClick={() => removeProductTag(tag)} />
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default ProductTags;
