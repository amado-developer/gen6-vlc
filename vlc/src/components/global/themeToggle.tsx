import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={() => toggleColorMode()}>
      {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeToggle;
