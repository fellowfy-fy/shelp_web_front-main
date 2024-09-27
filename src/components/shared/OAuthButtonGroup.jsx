import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { GoogleIcon, TwitterIcon } from "../ui/ProviderIcons";
import { useTranslation } from "react-i18next";

const providers = [
  { name: "Google", icon: <GoogleIcon /> },
  { name: "Twitter", icon: <TwitterIcon /> },
];

export const OAuthButtonGroup = () => {
  const { t } = useTranslation();
  return (
    <ButtonGroup variant="secondary" spacing="4">
      {providers.map(({ name, icon }) => (
        <Button
          key={name}
          flexGrow={1}
          colorScheme="teal"
          color="#D8DADC"
          variant="outline"
        >
          <VisuallyHidden>
            {t("sign-in-with")} {name}
          </VisuallyHidden>
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  );
};
