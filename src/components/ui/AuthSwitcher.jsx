import { Text, Link, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const AuthSwitcher = ({ isLogin, setIsLogin }) => {
  const { t } = useTranslation();
  return (
    <Box textAlign="center">
      <Text color="fg.muted">
        {isLogin ? t("dont-have-an-account") : t("already-have-an-account")}
        <Link
          color="#53abe9"
          fontWeight={600}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? t("sign-up") : t("login")}
        </Link>
      </Text>
    </Box>
  );
};

export default AuthSwitcher;
