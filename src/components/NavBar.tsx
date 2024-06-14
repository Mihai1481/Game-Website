import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { HStack, Image, Button, useToast, Spacer } from "@chakra-ui/react";
import logo from "../assets/9555205.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Logged out successfully.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Error logging out.",
        description: (error as Error).message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.error("Error logging out: ", error);
    }
  };

  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
      <Spacer />
      <Button
        colorScheme="gray.600"
        variant="outline"
        onClick={handleLogout}
        border={0}
      >
        Logout
      </Button>
    </HStack>
  );
};

export default NavBar;
