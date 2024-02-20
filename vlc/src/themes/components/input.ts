import { StyleFunctionProps } from "@chakra-ui/react";

const input = {
  baseStyle: (props: StyleFunctionProps) => {
    const color: string = props.colorMode === "dark" ? "white" : "brand.800";
    return {
      field: {
        color,
        _focus: {
          borderColor: "brand.500",
          boxShadow: "none",
        },
      },

      defaultProps: {
        focusBorderColor: "brand.500",
      },
      variants: {
        outline: {
          field: {
            _focus: {
              borderColor: "brand.500",
              boxShadow: "none",
            },
          },
        },
      },
    };
  },
};

export default input;
