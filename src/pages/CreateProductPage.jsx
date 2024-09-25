import AddProduct from "../components/shared/AddProduct";
import { Container, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const CreatePostPage = () => {
  const { t } = useTranslation();
  return (
    <Container maxW={"660px"} py={5}>
      {/* Заголовок, выровненный по левому краю */}
      <Heading as="h1" size="lg" textAlign="left" mb={4}>
        {t("add-product")}
      </Heading>

      {/* Контент */}
      <AddProduct />
    </Container>
  );
};

export default CreatePostPage;
