import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import RandomGameButton from "../components/RandomGameButton";

const Layout = () => {
  return (
    <>
      <NavBar />
      <RandomGameButton />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
