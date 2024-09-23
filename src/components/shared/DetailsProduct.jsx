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

const DetailsProduct = ({ tags }) => {
  return (
    <div className="flex flex-col gap-3 mt-6">
      <div>
        <label className="text-xl font-semibold" htmlFor="name">
          Post title
        </label>
        <Input placeholder="Summer looks" id="name" minW="auto" maxW="3000px" />
      </div>
      <div>
        <label className="text-xl font-semibold" htmlFor="link">
          Link
        </label>
        <Input placeholder="https://" id="link" minW="auto" maxW="3000px" />
      </div>
      <div>
        <label className="text-xl font-semibold" htmlFor="description">
          Description
        </label>
        <Textarea
          placeholder="Post My specialty lies in creating colorful creations, amazing designs, and high-quality website artworks that have the ext"
          id="description"
          resize="vertical"
          minW="auto"
          maxW="3000px"
        />
      </div>

      <ProductTags />
      <Tags initialTags={tags} />

      {/* Свитч и кнопка сохранения */}
      <div className="mt-4">
        <FormControl display="flex" alignItems="center" mb={4}>
          <FormLabel htmlFor="private-product" mb="0">
            Private product
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
        Save product
      </Button>
    </div>
  );
};

export default DetailsProduct;
