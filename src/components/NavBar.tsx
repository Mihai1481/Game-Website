import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/9555205.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="50px" padding="2px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
