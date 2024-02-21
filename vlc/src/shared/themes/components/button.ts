const button = {
  baseStyle: {
    fontWeight: "bold",
  },

  variants: {
    solid: {
      bg: "brand.500",
      color: "white",

      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
        boxShadow: "none",
      },

      _hover: {
        bg: "brand.600",
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
          boxShadow: "none",
        },
      },
    },
  },
};

export default button;
