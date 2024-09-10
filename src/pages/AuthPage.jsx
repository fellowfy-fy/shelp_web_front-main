import {
  Flex,
  Container,
  Stack,
  Box,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { Logo } from "../components/Logo";
import { OAuthButtonGroup } from "../components/Authorize/OAuthButtonGroup";
import AuthFormContent from "../components/Authorize/AuthFormContent";
import AuthSwitcher from "../components/Authorize/AuthSwitcher";
import useLogin from "../hooks/useLogin";

const AuthPage = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isLogin, setIsLogin] = useState(true); // Управляет режимом логина/регистрации
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    fname: "",
  });
  const inputRef = useRef(null);
  const { loading, error, login } = useLogin();
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  const handleSubmit = () => {
    if (isLogin) {
      login(inputs);
    } else {
      if (inputs.password !== inputs.confirmPassword) {
        setPasswordsMatch(false);
      } else {
        setPasswordsMatch(true);
        // Вызов функции для регистрации
      }
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
              <Logo />
              <Heading
                fontWeight={500}
                size={{ base: "md", md: "md" }}
                textAlign="center"
              >
                Space for your shopping ideas
              </Heading>
              <AuthFormContent
                isLogin={isLogin}
                inputs={inputs}
                setInputs={setInputs}
                handleSubmit={handleSubmit}
                loading={loading}
                error={error}
                passwordsMatch={passwordsMatch}
                onClickReveal={onClickReveal}
                isOpen={isOpen}
              />
              <OAuthButtonGroup />
              <AuthSwitcher isLogin={isLogin} setIsLogin={setIsLogin} />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

export default AuthPage;
