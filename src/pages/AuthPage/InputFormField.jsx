import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff, HiOutlineKey } from "react-icons/hi";
import { useRef } from "react";

const InputFormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  icon,
  isPassword = false,
  ...props
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef(null);

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <FormControl>
      <FormLabel mb={0} fontWeight={400} htmlFor={id}>
        {label}
      </FormLabel>
      <InputGroup>
        {icon && <InputLeftElement pointerEvents="none" children={icon} />}
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
          ref={inputRef}
          id={id}
          type={isPassword && !isOpen ? "password" : type}
          value={value}
          onChange={onChange}
          {...props}
        />
      </InputGroup>
    </FormControl>
  );
};

export default InputFormField;
