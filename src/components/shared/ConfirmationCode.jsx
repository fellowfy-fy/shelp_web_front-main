import { Logo } from "./Logo";
import { Flex, Container, Stack, Box, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ConfirmationCode = () => {
  const { t } = useTranslation();
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
                {t("space-for-your-shipping-ideas")}
              </Heading>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

export default ConfirmationCode;
