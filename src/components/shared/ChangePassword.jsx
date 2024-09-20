import { useState } from "react";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const ChangePassword = ({ username }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordToggle = () => setShowPassword(!showPassword);
  const handleConfirmPasswordToggle = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <Box p={8} maxWidth="500px" mx="auto" bg="white" borderRadius="10px">
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Change {username} password
      </Text>

      {/* Create Password Input */}
      <FormControl mb={4}>
        <FormLabel>Create a password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="must be 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement>
            <Button
              variant="ghost"
              onClick={handlePasswordToggle}
              size="sm"
              mr={1}
            >
              {showPassword ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* Confirm Password Input */}
      <FormControl mb={6}>
        <FormLabel>Confirm password</FormLabel>
        <InputGroup>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="repeat password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement>
            <Button
              variant="ghost"
              onClick={handleConfirmPasswordToggle}
              size="sm"
              mr={1}
            >
              {showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* Update and Cancel Buttons */}
      <Box display="flex" justifyContent="space-between">
        <Button bg="black" color="white" _hover={{ bg: "blackAlpha.800" }}>
          Update
        </Button>
        <Button variant="outline" colorScheme="gray">
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default ChangePassword;
