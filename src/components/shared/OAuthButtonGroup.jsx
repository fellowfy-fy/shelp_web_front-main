import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { GitHubIcon, GoogleIcon, TwitterIcon } from "../ui/ProviderIcons";

const providers = [
  { name: "Google", icon: <GoogleIcon /> },
  { name: "Twitter", icon: <TwitterIcon /> },
];

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="secondary" spacing="4">
    {providers.map(({ name, icon }) => (
      <Button
        key={name}
        flexGrow={1}
        colorScheme="teal"
        color="#D8DADC"
        variant="outline"
      >
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);
