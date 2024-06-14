import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Alert,
  AlertIcon,
  Text,
  Link,
} from "@chakra-ui/react";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error before trying to log in
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in");
      navigate("/"); // Redirect to home after login
    } catch (error: any) {
      console.error("Error logging in: ", error);
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        setError(
          "Nu există un cont cu aceste date. Vă rugăm să verificați emailul și parola și să încercați din nou."
        );
      } else if (error.code === "auth/invalid-email") {
        setError("Email invalid. Vă rugăm să introduceți un email valid.");
      } else if (error.code === "auth/user-disabled") {
        setError(
          "Acest cont a fost dezactivat. Vă rugăm să contactați suportul pentru ajutor."
        );
      } else if (error.code === "auth/too-many-requests") {
        setError(
          "Prea multe încercări de conectare. Vă rugăm să încercați din nou mai târziu."
        );
      } else if (error.code === "auth/invalid-credential") {
        setError(
          "Credențiale invalide. Vă rugăm să verificați datele de autentificare și să încercați din nou."
        );
      } else {
        setError(
          "A apărut o eroare neașteptată. Vă rugăm să încercați din nou."
        );
      }
    }
  };

  return (
    <Box
      w="100%"
      h="100vh"
      bgGradient="linear(to-r, blue.800, blue.600, blue.900)"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={4}
    >
      <Box
        w="100%"
        maxW="400px"
        bg="white"
        p={6}
        borderRadius="md"
        boxShadow="xl"
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <Heading as="h2" size="lg" textAlign="center" color="teal.600">
              Login
            </Heading>
            <Text textAlign="center" color="gray.600">
              Welcome back! Please log in to your account.
            </Text>
            {error && (
              <Alert
                borderRadius={10}
                status="error"
                bg="red.600"
                color="white"
              >
                <AlertIcon />
                {error}
              </Alert>
            )}
            <FormControl id="email" isRequired>
              <FormLabel color="gray.700">Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                color="black"
                borderColor="gray.300"
                _placeholder={{ color: "gray.400" }}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel color="gray.700">Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                color="black"
                bg="gray.50"
                borderColor="gray.300"
                _placeholder={{ color: "gray.400" }}
              />
            </FormControl>
            <Button colorScheme="teal" type="submit" width="full">
              Login
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/signup")}
              width="full"
              borderColor="teal.500"
              color="teal.500"
              _hover={{ bg: "teal.500", color: "white" }}
            >
              Sign Up
            </Button>
            <Link onClick={() => navigate("/forgotpassword")} color="teal.500">
              Forgot Password?
            </Link>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
