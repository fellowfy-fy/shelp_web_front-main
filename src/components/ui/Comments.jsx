import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Comments = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Text>{t("no-comments")}</Text>
    </Box>
  );
};

export default Comments;
