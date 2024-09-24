import AddProduct from "../components/shared/AddProduct";
import { Container, Heading } from "@chakra-ui/react";

const CreatePostPage = () => {
  return (
    <Container maxW={"660px"} py={5}>
      {/* Заголовок, выровненный по левому краю */}
      <Heading as="h1" size="lg" textAlign="left" mb={4}>
        Add product
      </Heading>

      {/* Контент */}
      <AddProduct />
    </Container>
  );
};

export default CreatePostPage;
