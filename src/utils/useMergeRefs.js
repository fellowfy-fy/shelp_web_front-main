// utils/useMergeRefs.js
export function useMergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref && "current" in ref) {
        ref.current = value;
      }
    });
  };
}

