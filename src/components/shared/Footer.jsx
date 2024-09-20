import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Center,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const LogoImage = "/logo_b.png";
  return (
    <Center
      m={0}
      h="auto"
      minH={70}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Box>
          {" "}
          <img
            class="mt-1 mb-1 mx-auto h-12 w-auto text-center"
            src={LogoImage}
            alt="Shelp"
          />
        </Box>
        <Text>© 2024 Shelp. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"LinkedIn"} href={"#"}>
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Center>
  );
};

export default Footer;

const SocialButton = (data) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={data.href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{data.label}</VisuallyHidden>
      {data.children}
    </chakra.button>
  );
};
