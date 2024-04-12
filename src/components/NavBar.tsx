import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/9555205.jpg";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" padding="2px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
