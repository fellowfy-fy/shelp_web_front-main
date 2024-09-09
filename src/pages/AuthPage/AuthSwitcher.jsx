import { Text, Link } from "@chakra-ui/react";

const AuthSwitcher = ({ isLogin, setIsLogin }) => (
  <Text color="fg.muted">
    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
    <Link color="#53abe9" fontWeight={600} onClick={() => setIsLogin(!isLogin)}>
      {isLogin ? "Sign up" : "Login"}
    </Link>
  </Text>
);

export default AuthSwitcher;
