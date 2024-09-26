import {
  Textarea,
  Input,
  Button,
  Switch,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import Tags from "./Tags";
import ProductTags from "./ProductTags";
import { useTranslation } from "react-i18next";

const DetailsProduct = ({ tags }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <label className="text-xl font-semibold" htmlFor="name">
          {t("post-title")}
        </label>
        <Input
          placeholder="Summer looks"
          id="name"
          width={{ base: "100%", md: "500px" }}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xl font-semibold" htmlFor="link">
          {t("link")}
        </label>
        <Input
          placeholder="https://"
          id="link"
          width={{ base: "100%", md: "500px" }}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xl font-semibold" htmlFor="description">
          {t("description")}
        </label>
        <Textarea
          placeholder="Post My specialty lies in creating colorful creations, amazing designs, and high-quality website artworks that have the ext"
          id="description"
          resize="vertical"
          minW="auto"
          width={{ base: "100%", md: "500px" }}
        />
      </div>

      <ProductTags />
      <Tags initialTags={tags} />

      {/* Свитч и кнопка сохранения */}
      <div className="mt-4">
        <FormControl display="flex" alignItems="center" mb={4}>
          <FormLabel htmlFor="private-product" mb="0">
            {t("private-product")}
          </FormLabel>
          <Switch id="private-product" />
        </FormControl>
      </div>

      <Button
        background="black"
        textColor="white"
        width="100%"
        height="50px"
        fontWeight="bold"
        mt={4}
        _hover={{ bg: "gray.800" }}
      >
        {t("save-product")}
      </Button>
    </div>
  );
};

export default DetailsProduct;
