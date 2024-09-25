import { Button, Container, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <Container maxW={"container.lg"} my={4}>
      <Flex
        w={"full"}
        justifyContent={{ base: "center", sm: "space-between" }}
        alignItems={"center"}
      >
        <Image
          src="/logo.png"
          h={20}
          display={{ base: "none", sm: "block" }}
          cursor={"pointer"}
        />
        <Flex gap={4}>
          <Link to="/auth">
            <Button colorScheme={"blue"} size={"sm"}>
              {t("login")}
            </Button>
          </Link>
          <Link to="/auth">
            <Button variant={"outline"} size={"sm"}>
              {t("sign-up")}
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
