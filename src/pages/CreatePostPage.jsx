import CreatePost from "../components/shared/CreatePost";
import { Container } from "@chakra-ui/react";

const CreatePostPage = () => {
  return (
    <Container maxW="container.xl" pb={5}>
      <CreatePost />
    </Container>
  );
};

export default CreatePostPage;
