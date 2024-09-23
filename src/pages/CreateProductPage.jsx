import AddProduct from "../components/shared/AddProduct";
import { Container } from "@chakra-ui/react";

const CreatePostPage = () => {
  return (
    <Container maxW="container.xl" py={5} centerContent>
      <AddProduct />
    </Container>
  );
};

export default CreatePostPage;
