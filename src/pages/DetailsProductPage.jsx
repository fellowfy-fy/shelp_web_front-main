import CreateProduct from "../components/shared/CreateProduct";
import { Container } from "@chakra-ui/react";

const CreatePostPage = () => {
  return (
    <Container maxW="container.xl" py={5} centerContent>
      <CreateProduct />
    </Container>
  );
};

export default CreatePostPage;
