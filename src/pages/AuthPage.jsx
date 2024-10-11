import {
  Flex,
  Container,
  Stack,
  Box,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { OAuthButtonGroup } from "../components/shared/OAuthButtonGroup";
import AuthFormContent from "../components/shared/AuthFormContent";
import VerificationForm from "../components/shared/VerificationForm";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation();
  const { isOpen, onToggle } = useDisclosure();
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const inputRef = useRef(null);

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Container maxW="lg" px={{ base: "2", sm: "8" }}>
        <Stack spacing="8">
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "white", sm: "bg.surface" }}
            boxShadow={{ base: "xl", sm: "xl" }}
            borderRadius={{ base: "m", sm: "xl" }}
            border="2px"
            borderColor="#eeeeee"
          >
            <Stack spacing={3}>
              <img
                className="mt-2 mb-2 mx-auto h-16 w-auto text-center"
                src="/logo_b.png"
                alt="Shelp"
              />
              <Heading fontWeight={500} size="md" textAlign="center">
                {t("login-to-your-account")}
              </Heading>
              <AuthFormContent
                isLogin={true}
                inputs={inputs}
                setInputs={setInputs}
                onClickReveal={onClickReveal}
                isOpen={isOpen}
              />
              <OAuthButtonGroup />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

const SignupPage = () => {
  const { t } = useTranslation();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleSignUp = () => {
    // Trigger verification
  };

  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Container maxW="lg" px={{ base: "2", sm: "8" }}>
        <Stack spacing="8">
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "white", sm: "bg.surface" }}
            boxShadow={{ base: "xl", sm: "xl" }}
            borderRadius={{ base: "m", sm: "xl" }}
            border="2px"
            borderColor="#eeeeee"
          >
            <Stack spacing={3}>
              <img
                className="mt-2 mb-2 mx-auto h-16 w-auto text-center"
                src="/logo_b.png"
                alt="Shelp"
              />
              <Heading fontWeight={500} size="md" textAlign="center">
                {t("create-your-account")}
              </Heading>
              <AuthFormContent
                isLogin={false}
                inputs={inputs}
                setInputs={setInputs}
                handleSubmit={handleSignUp}
              />
              <OAuthButtonGroup />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

const VerificationPage = ({ username, email }) => {
  const handleVerificationSubmit = () => {
    console.log("Code confirmed");
  };

  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Container maxW="lg" px={{ base: "2", sm: "8" }}>
        <Stack spacing="8">
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "white", sm: "bg.surface" }}
            boxShadow={{ base: "xl", sm: "xl" }}
            borderRadius={{ base: "m", sm: "xl" }}
            border="2px"
            borderColor="#eeeeee"
          >
            <Stack spacing={3}>
              <Heading fontWeight={500} size="md" textAlign="center">
                Verification
              </Heading>
              <VerificationForm
                username={username || "user"}
                email={email || "email@example.com"}
                onSubmitVerification={handleVerificationSubmit}
              />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

export { LoginPage, SignupPage, VerificationPage };
