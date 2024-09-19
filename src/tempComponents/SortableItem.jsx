import React from "react";
import { Box, Image, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ id, fileObj, handleDelete }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Box
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="border rounded-lg overflow-hidden w-20 h-20 flex items-center justify-center relative"
    >
      <Image
        src={URL.createObjectURL(fileObj.file)}
        alt={`Selected file`}
        objectFit="cover"
        width="100%"
        height="100%"
      />
      <IconButton
        icon={<FaTrash />}
        size="xs"
        position="absolute"
        top="4px"
        right="4px"
        onClick={() => handleDelete(id)}
      />
    </Box>
  );
};

export default SortableItem;
