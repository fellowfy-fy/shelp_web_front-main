import {
  Tag,
  Avatar,
  TagLabel,
  TagCloseButton,
  Input,
  Button,
} from "@chakra-ui/react";

const Editors = ({ editors }) => {
  return (
    <div>
      <label className="text-xl font-semibold" htmlFor="editors">
        Editors
      </label>
      <div className="flex gap-2">
        <Input placeholder="Editor username" id="editors" />
        <Button
          variant="outline"
          borderColor="black"
          _hover={{ bg: "#faf7fa" }}
          minW="80px"
        >
          Add
        </Button>
      </div>
      <div className="mt-2 flex gap-1">
        {editors.map((editor) => {
          return (
            <Tag size="lg" variant="outline" borderRadius="full">
              <Avatar
                src={editor.imageUrl}
                size="xs"
                name="Segun Adebayo"
                ml={-1}
                mr={2}
              />
              <TagLabel>{editor.name}</TagLabel>
              <TagCloseButton />
            </Tag>
          );
        })}
      </div>
    </div>
  );
};
export default Editors;
