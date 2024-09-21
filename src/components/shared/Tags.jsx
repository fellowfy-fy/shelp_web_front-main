import { Tag, TagLabel, TagCloseButton, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Tags = ({ initialTags }) => {
  const [tags, setTags] = useState(initialTags || []);
  const [newTag, setNewTag] = useState("");

  const removeTag = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags((prevTags) => [...prevTags, newTag]);
      setNewTag("");
    }
  };

  return (
    <div>
      <label className="text-xl font-semibold" htmlFor="tags">
        Tags
      </label>
      <div className="flex gap-2">
        <Input
          placeholder="Vibe chill"
          id="tags"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          mt={2}
        />
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
          onClick={addTag}
        >
          Add Tag
        </Button>
      </div>
      <div className="mt-2 gap-1 flex">
        {tags?.map((tag) => {
          return (
            <Tag size="lg" variant="outline" borderRadius="full">
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton onClick={() => removeTag(tag)} />
            </Tag>
          );
        })}
      </div>
    </div>
  );
};
export default Tags;
