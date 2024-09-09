import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { forwardRef, useRef } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useMergeRefs } from "../../utils/useMergeRefs"; // Adjust the path as needed

const InputFormField = forwardRef(
  (
    {
      id,
      label,
      type,
      value,
      onChange,
      icon,
      isPassword,
      isOpen,
      onClickReveal,
      placeholder,
    },
    ref
  ) => {
    const inputRef = useRef(null);
    const mergeRef = useMergeRefs(inputRef, ref);

    return (
      <FormControl>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
          {isPassword && (
            <InputRightElement>
              <IconButton
                variant="text"
                aria-label={isOpen ? "Mask password" : "Reveal password"}
                icon={isOpen ? <HiEyeOff /> : <HiEye />}
                onClick={onClickReveal}
              />
            </InputRightElement>
          )}
          <Input
            id={id}
            ref={mergeRef}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...(isPassword ? { type: isOpen ? "text" : "password" } : {})}
          />
        </InputGroup>
      </FormControl>
    );
  }
);

InputFormField.displayName = "InputFormField";

export default InputFormField;
