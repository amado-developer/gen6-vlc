import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const table = {
  variants: {
    simple: (props: StyleFunctionProps) => {
      const color: string = props.colorMode === "dark" ? "white" : "brand.800";

      return {
        table: {
          color,
        },
        caption: {
          color,
        },
        thead: {
          color: "white",
          bg: "brand.500",
          th: {
            color: "white",
          },
        },
        tbody: {
          tr: {
            bg: props.colorMode === "dark" ? "#2a2a2a" : "white",
            _hover: {
              bg: "brand.400",
            },
          },
        },
      };
    },
  },
};

export default table;
