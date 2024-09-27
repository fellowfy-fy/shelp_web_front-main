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
            borderRadius="full"
            display="flex"
            alignItems="center"
            key={tag.id}
            px={3}
            pr={1}
            width={"auto"}
            position="relative"
            borderColor="black" // Ensure the border is black, no gray
            borderWidth="1px" // Ensure the width is what you want
            backgroundColor="white" // Set background to white to avoid gray
          >
            <Avatar
              size="sm"
              name={tag.name}
              src={tag.image}
              borderRadius="full"
              border="1px solid black" // Ensure the avatar border is consistent
              ml="-14px" // Slight negative margin to overlap the tag border
              zIndex={1}
            />
            <Flex alignItems="center" ml={2}>
              <Text fontSize="md" fontWeight="medium" isTruncated>
                {tag.name}
              </Text>
            </Flex>
            <TagCloseButton m={1} onClick={() => removeProductTag(tag)} />
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default ProductTags;
