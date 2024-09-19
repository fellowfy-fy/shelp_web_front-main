import CreatePost from "../tempComponents/CreatePost";
import { Container } from "@chakra-ui/react";

const CreatePostPage = () => {
  return (
    <Container maxW="container.xl" py={5} centerContent>
      <CreatePost />
    </Container>
  );
};

export default CreatePostPage;
