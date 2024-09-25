import { Alert, AlertIcon, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const AuthMessage = ({ error, passwordsMatch }) => {
  const { t } = useTranslation();
  return (
    <>
      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error}
        </Alert>
      )}
      {!passwordsMatch && (
        <Text color="red.500" fontSize="sm" mt={2}>
          {t("passwords-do-not-match")}
        </Text>
      )}
    </>
  );
};

export default AuthMessage;
