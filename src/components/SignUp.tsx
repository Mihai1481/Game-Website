import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
} from "@chakra-ui/react";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error before trying to sign up
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered");
      navigate("/login"); // Redirect to login after signup
    } catch (error) {
      console.error("Error signing up: ", error);
      setError("Failed to sign up. Please check your details and try again.");
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
              Sign Up
            </Heading>
            <Text textAlign="center" color="gray.600">
              Create a new account by filling the form below.
            </Text>
            {error && (
              <Alert status="error">
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
                bg="gray.50"
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
                bg="gray.50"
                color="black"
                borderColor="gray.300"
                _placeholder={{ color: "gray.400" }}
              />
            </FormControl>
            <Button colorScheme="teal" type="submit" width="full">
              Sign Up
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/login")}
              width="full"
              borderColor="teal.500"
              color="teal.500"
              _hover={{ bg: "teal.500", color: "white" }}
            >
              Back to Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
