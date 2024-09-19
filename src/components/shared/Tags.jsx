import { Tag, TagLabel, TagCloseButton, Input, Button } from "@chakra-ui/react";

const Tags = ({ tags }) => {
  return (
    <div>
      <label className="text-xl font-semibold" htmlFor="tags">
        Tags
      </label>
      <div className="flex gap-2">
        <Input placeholder="Editor username" id="tags" />
        <Button
          variant="outline"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: "md",
            padding: "2px",
            bgGradient: "linear(to-r, #25A9EF, #01D6B8)",
            zIndex: -1,
          }}
          _hover={{ bg: "#faf7fa" }}
          _after={{
            content: '""',
            position: "absolute",
            top: "2px",
            left: "2px",
            right: "2px",
            bottom: "2px",
            background: "#ffffff",
            borderRadius: "md",
            zIndex: -1,
          }}
        >
          Add Tag
        </Button>
      </div>
      <div className="mt-2 gap-1 flex">
        {tags.map((tag) => {
          return (
            <Tag size="lg" variant="outline" borderRadius="full">
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton />
            </Tag>
          );
        })}
      </div>
    </div>
  );
};
export default Tags;
