import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GoBackButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Button
      my={5}
      color="black"
      leftIcon={<FaArrowLeft />}
      variant="link"
      onClick={() => navigate(-1)}
    >
      {t("go-back")}
    </Button>
  );
};

export default GoBackButton;
