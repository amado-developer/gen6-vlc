import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const table = {
  variants: {
    striped: (props: StyleFunctionProps) => {
      const color: string = props.colorMode === "dark" ? "white" : "brand.800";

      return {
        table: {
          color,
        },
        caption: {
          color,
        },
        thead: {
          color,
          bg: "brand.500",
          th: {
            color,
          },
        },
        tbody: {
          tr: {
            _even: {
              bg: "brand.100",
            },
            _odd: {
              bg: "brand.200",
            },
          },
        },
      };
    },
  },
};

export default table;
