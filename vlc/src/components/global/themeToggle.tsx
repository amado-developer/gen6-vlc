import { Button, Flex } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex align="center" justify="flex-end" mr={"12%"} mt={8}>
      <Button onClick={() => toggleColorMode()}>
        {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Flex>
  );
};

export default ThemeToggle;
