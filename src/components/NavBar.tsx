import React from "react";
import { Link } from "react-router-dom";
import { HStack, Image, Spacer } from "@chakra-ui/react";
import logo from "../assets/home_4520412.png";
import logout from "../assets/power-buttons.png";
import SearchInput from "./SearchInput";

const NavBar: React.FC = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} />
      </Link>
      <SearchInput />
      <Spacer />
      <Link to="/login">
        <Image src={logout} />
      </Link>
    </HStack>
  );
};

export default NavBar;
