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
import AuthSwitcher from "../components/ui/AuthSwitcher";
import VerificationForm from "../components/shared/VerificationForm";
import { useTranslation } from "react-i18next";

const AuthPage = () => {
  const { t } = useTranslation();
  const { isOpen, onToggle } = useDisclosure();
  const [isLogin, setIsLogin] = useState(true);
  const [isVerification, setIsVerification] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    fname: "",
  });
  const inputRef = useRef(null);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const LogoImage = "/logo_b.png";

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  const handleSignUp = () => {
    setIsVerification(true);
  };

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
              <img
                className="mt-2 mb-2 mx-auto h-16 w-auto text-center"
                src={LogoImage}
                alt="Shelp"
              />
              <Heading
                fontWeight={500}
                size={{ base: "md", md: "md" }}
                textAlign="center"
              >
                {t("space-for-your-shopping-ideas")}
              </Heading>

              {!isVerification ? (
                <>
                  <AuthFormContent
                    isLogin={isLogin}
                    inputs={inputs}
                    setInputs={setInputs}
                    passwordsMatch={passwordsMatch}
                    onClickReveal={onClickReveal}
                    isOpen={isOpen}
                    handleSubmit={isLogin ? null : handleSignUp}
                  />
                  <OAuthButtonGroup />
                  <AuthSwitcher isLogin={isLogin} setIsLogin={setIsLogin} />
                </>
              ) : (
                <VerificationForm
                  username={inputs.username || "user"}
                  email={inputs.email || "email@example.com"}
                  onSubmitVerification={handleVerificationSubmit}
                />
              )}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

export default AuthPage;
