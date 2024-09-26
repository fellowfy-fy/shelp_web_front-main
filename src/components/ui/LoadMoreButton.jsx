import React from "react";
import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const LoadMoreButton = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <Button
      border="1px"
      px={20}
      borderRadius={10}
      borderColor="black"
      backgroundColor="black" // черный фон
      color="white" // белый текст
      onClick={onClick}
    >
      {t("load-more")}
    </Button>
  );
};

export default LoadMoreButton;
