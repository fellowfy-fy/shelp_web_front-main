import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const UserDescription = ({ bioText, maxBioLength = 230 }) => {
  const [showFullBio, setShowFullBio] = useState(false);
  const toggleBio = () => setShowFullBio((prev) => !prev);

  const isLongBio = bioText.length > maxBioLength;

  return (
    <Text fontSize={"sm"}>
      {isLongBio && !showFullBio
        ? `${bioText.substring(0, maxBioLength)}...`
        : bioText}
      {isLongBio && (
        <Button
          variant="link"
          color="blue.500"
          onClick={toggleBio}
          size="sm"
          ml={2}
        >
          {showFullBio ? "Show Less" : "Read More"}
        </Button>
      )}
    </Text>
  );
};

export default UserDescription;
