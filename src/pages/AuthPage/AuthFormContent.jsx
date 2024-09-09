import { Stack, HStack, Divider, Button, Text } from "@chakra-ui/react";
import {
  HiOutlineAtSymbol,
  HiOutlineUserCircle,
  HiOutlineKey,
} from "react-icons/hi";
import InputFormField from "./InputFormField";
import AuthMessage from "./AuthMessage";

const AuthFormContent = ({
  isLogin,
  inputs,
  setInputs,
  handleSubmit,
  loading,
  error,
  passwordsMatch,
  onClickReveal,
  isOpen,
}) => (
  <Stack spacing="6">
    <InputFormField
      id="email"
      label="Email"
      type="email"
      value={inputs.email}
      onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      icon={<HiOutlineAtSymbol color="#53abe9" />}
    />
    {!isLogin && (
      <InputFormField
        id="fname"
        label="Username"
        type="text"
        value={inputs.fname}
        onChange={(e) => setInputs({ ...inputs, fname: e.target.value })}
        icon={<HiOutlineUserCircle color="#53abe9" />}
      />
    )}
    <InputFormField
      id="password"
      label="Password"
      type="password"
      value={inputs.password}
      onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      icon={<HiOutlineKey color="#53abe9" />}
      isPassword
      isOpen={isOpen}
      onClickReveal={onClickReveal}
    />
    {!isLogin && (
      <InputFormField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        value={inputs.confirmPassword}
        onChange={(e) =>
          setInputs({ ...inputs, confirmPassword: e.target.value })
        }
        icon={<HiOutlineKey color="#53abe9" />}
        isPassword
        isOpen={isOpen}
        onClickReveal={onClickReveal}
      />
    )}
    <AuthMessage error={error} passwordsMatch={passwordsMatch} />
    <Stack spacing="6">
      <Button
        isLoading={loading}
        onClick={handleSubmit}
        _hover={{
          transform: "scale(1.05)",
          transitionDuration: "0.2s",
          transitionTimingFunction: "ease-in-out",
        }}
        color={"white"}
        bgGradient="linear(to-r, #68eecc, #53abe9)"
      >
        {isLogin ? "LOGIN" : "SIGN UP"}
      </Button>
      <HStack>
        <Divider />
        <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
          {isLogin ? "Or login with" : "Or register with"}
        </Text>
        <Divider />
      </HStack>
    </Stack>
  </Stack>
);

export default AuthFormContent;
