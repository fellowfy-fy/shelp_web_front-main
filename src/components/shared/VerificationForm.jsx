import {
  Box,
  Heading,
  Text,
  HStack,
  PinInput,
  PinInputField,
  Button,
  VStack,
} from "@chakra-ui/react";

const VerificationForm = ({ onSubmitVerification, username, email }) => {
  return (
    <VStack spacing={4} align="center">
      <Text fontSize="lg" fontWeight="bold">
        Enter the code, @{username}
      </Text>
      <center>
        <Text>
          We've sent a message with an activation code to your email {email}
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
