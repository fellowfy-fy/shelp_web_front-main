import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
  Container,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, NavLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Buttons from "../ui/Buttons";
import UserMenu from "./UserMenu";

const PageHeader = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const LogoImage = "/logo_b.png";

  const buttonOptions = [
    { label: t("header-home"), icon: "/homeIcon.svg", to: "/" },
    { label: t("header-discover"), icon: "/discoverIcon.svg", to: "/discover" },
  ];

  if (isAuthenticated) {
    buttonOptions.push(
      {
        label: t("header-collected"),
        icon: "/collectedIcon.svg",
        to: "/collected",
      },
      { label: t("header-create"), icon: "/createIcon.svg", to: "/create/post" }
    );
  }

  // Обработчик logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <Center
        shadow="navBarShadow"
        borderBottom={"1px"}
        borderColor={"gainsboro"}
        h={{ xl: "70px", md: "70px" }}
        bg={useColorModeValue("white", "gray.900")}
      >
        <Container maxW={"container.xl"}>
          <Flex
            maxW={{ base: "container.xl" }}
            mx={2}
            width={"100%"}
            h={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <HStack h={"100%"} spacing={8} alignItems={"center"}>
              <Box>
                <img
                  h={"60%"}
                  className="h-12 w-auto text-center sm:my-2"
                  src={LogoImage}
                  alt="Shelp"
                />
              </Box>
              <HStack
                h={"100%"}
                as={"nav"}
                gap={0}
                display={{ base: "none", md: "flex" }} // Видно только на больших экранах
              >
                {buttonOptions.map(({ label, icon, to }) => (
                  <ChakraLink
                    key={label}
                    h={"100%"}
                    layerStyle={"base"}
                    textStyle={"navButton"}
                    as={ReactRouterLink}
                    to={to}
                  >
                    <Buttons value={label} icon={icon} />
                  </ChakraLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              {/* Гамбургер меню для мобильных устройств */}
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                bg="transparent"
                display={{ base: "block", md: "none" }} // Видно только на мобильных экранах
                onClick={isOpen ? onClose : onOpen}
              />

              {/* Если пользователь не авторизован, показываем кнопки Login и Register */}
              {!isAuthenticated ? (
                <>
                  <Button
                    as={ReactRouterLink}
                    to="/authorize"
                    variant="outline"
                    mr={2}
                  >
                    {t("header-login")}
                  </Button>
                  <Button
                    as={ReactRouterLink}
                    to="/authorize"
                    bg="black"
                    color="white"
                    _hover={{ bg: "gray.700" }}
                  >
                    {t("header-register")}
                  </Button>
                </>
              ) : (
                <>
                  <IconButton
                    background={"transparent"}
                    variant="solid"
                    rounded={"full"}
                    color={"black"}
                    aria-label="Done"
                    fontSize="19px"
                    icon={
                      <Box as="span">
                        <img
                          src="/chatIcon.svg"
                          alt="icon"
                          width="25px"
                          height="25px"
                        />
                      </Box>
                    }
                  />
                  <IconButton
                    background={"transparent"}
                    variant="solid"
                    rounded={"full"}
                    aria-label="Done"
                    fontSize="19px"
                    icon={
                      <Box as="span">
                        <img
                          src="/notificationIcon.svg"
                          alt="icon"
                          width="40px"
                          height="40px"
                        />
                      </Box>
                    }
                  />
                  <UserMenu onLogout={handleLogout} />
                </>
              )}
            </Flex>
          </Flex>

          {/* Мобильное меню - показывается при нажатии гамбургера */}
          {isOpen ? (
            <Box pb={4} display={{ sm: "none" }}>
              {/* Видно только на мобильных экранах */}
              <Stack as={"nav"} spacing={4}>
                {buttonOptions.map(({ label, to }) => (
                  <ChakraLink
                    key={label}
                    as={ReactRouterLink}
                    to={to}
                    onClick={onClose} // Закрываем меню при нажатии
                  >
                    <NavLink to={to} exact activeClassName="active">
                      {label}
                    </NavLink>
                  </ChakraLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Center>
    </>
  );
};

export default PageHeader;
