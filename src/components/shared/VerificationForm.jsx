import {
  Text,
  HStack,
  PinInput,
  PinInputField,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const VerificationForm = ({ onSubmitVerification, username, email }) => {
  const { t } = useTranslation();
  return (
    <VStack spacing={4} align="center">
      <Text fontSize="lg" fontWeight="bold">
        Enter the code, @{username}
      </Text>
      <center>
        <Text>
          {t("verification-message")} {email}
        </Text>
      </center>
      <HStack justifyContent="center">
        <PinInput size="lg">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </VStack>
  );
};

export default VerificationForm;
