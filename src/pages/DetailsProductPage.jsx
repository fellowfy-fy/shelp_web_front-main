import CreateProduct from "../components/shared/CreateProduct";
import { Container } from "@chakra-ui/react";

const CreatePostPage = () => {
  return (
    <Container maxW="container.xl" pb={5}>
      <CreateProduct />
    </Container>
  );
};

export default CreatePostPage;
