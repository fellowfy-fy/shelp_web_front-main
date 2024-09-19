import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      my={5}
      color="black"
      leftIcon={<FaArrowLeft />}
      variant="link"
      onClick={() => navigate(-1)}
    >
      Go back
    </Button>
  );
};

export default GoBackButton;
