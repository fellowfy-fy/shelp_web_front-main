import React, { useState } from "react";
import {
  Tag,
  Avatar,
  TagLabel,
  TagCloseButton,
  Input,
  Button,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Editors = ({ initialEditors }) => {
  const { t } = useTranslation();
  const [editors, setEditors] = useState(initialEditors);

  // Функция для удаления редактора
  const handleRemoveEditor = (name) => {
    setEditors((prevEditors) =>
      prevEditors.filter((editor) => editor.name !== name)
    );
  };

  return (
    <div>
      <label className="text-xl font-semibold" htmlFor="editors">
        {t("editors")}
      </label>
      <div className="flex gap-2">
        <Input placeholder="Editor username" id="editors" />
        <Button
          variant="outline"
          borderColor="black"
          _hover={{ bg: "#faf7fa" }}
          minW="80px"
        >
          {t("add")}
        </Button>
      </div>
      <div className="mt-2 flex gap-1">
        {editors.map((editor) => {
          return (
            <Tag size="lg" variant="outline" borderRadius="full" key={editor.name}>
              <Avatar
                src={editor.imageUrl}
                size="xs"
                name={editor.name}
                ml={-1}
                mr={2}
              />
              <TagLabel>{editor.name}</TagLabel>
              <TagCloseButton onClick={() => handleRemoveEditor(editor.name)} />
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

export default Editors;
