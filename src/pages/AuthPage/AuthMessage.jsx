import { Alert, AlertIcon, Text } from "@chakra-ui/react";

const AuthMessage = ({ error, passwordsMatch }) => (
  <>
    {error && (
      <Alert status="error" fontSize={13} p={2} borderRadius={4}>
        <AlertIcon fontSize={12} />
        {error}
      </Alert>
    )}
    {!passwordsMatch && (
      <Text color="red.500" fontSize="sm" mt={2}>
        Passwords do not match
      </Text>
    )}
  </>
);

export default AuthMessage;
