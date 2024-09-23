import {
  Box,
  Container,
  Text,
  Center,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import Buttons from "../ui/Buttons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const buttonOptions = [
    { value: t("footer-about"), icon: "/DiscoverIcon.svg" },
    { value: t("footer-contact"), icon: "/HomeIcon.svg" },
  ];
  const LogoImage = "/logo_b.png";
  return (
    <Center
      m={0}
      h="auto"
      minH={70}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={10}
    >
      <Container
        as={Flex}
        maxW={"6xl"}
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        position="relative"
        py={4}
      >
        {/* Логотип */}
        <Box position={{ md: "absolute" }} left={0}>
          <img
            className="mt-1 mb-1 mx-auto h-12 w-auto text-center"
            src={LogoImage}
            alt="Shelp"
          />
        </Box>

        {/* Текст */}
        <Text textAlign="center">{t("footer-rights")}</Text>

        {/* Кнопки */}
        <Flex position={{ md: "absolute" }} right={0} gap={2}>
          {buttonOptions.map(({ value, icon }) => (
            <Buttons key={value} value={value} icon={icon} />
          ))}
        </Flex>
      </Container>
    </Center>
  );
};

export default Footer;
