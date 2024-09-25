import {
  Tag,
  TagCloseButton,
  Input,
  Avatar,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ProductTags = () => {
  const { t } = useTranslation();
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
        },
      ]);
      setNewProductTag("");
    }
  };

  return (
    <div>
      <label className="text-xl font-semibold" htmlFor="product-tags">
        {t("save-to-collections")}
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
            display="flex"
            key={tag.id}
            width={"auto"}
          >
            <Avatar
              size="sm"
              name={tag.name}
              src={tag.image}
              borderRadius="full"
              ml={"-12px"}
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
