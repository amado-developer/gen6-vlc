const select = {
  baseStyle: {
    fontWeight: "bold",
  },
  variants: {
    filled: {
      field: {
        bg: "white",
        borderColor: "brand.500",
        _focus: {
          borderColor: "brand.500",
          bg: "brand.50",
        },
        _hover: {
          bg: "brand.100",
        },
      },
    },
  },
};

export default select;
