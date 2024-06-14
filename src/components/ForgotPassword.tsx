import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
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

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [resetEmailSent, setResetEmailSent] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error before trying to reset password
    setResetEmailSent(false); // Reset password reset message
    try {
      await sendPasswordResetEmail(auth, email);
      setResetEmailSent(true); // Show success message
    } catch (error) {
      console.error("Error sending password reset email: ", error);
      setError("Failed to send password reset email. Please try again.");
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
              Reset Password
            </Heading>
            <Text textAlign="center" color="gray.600">
              Enter your email to reset your password.
            </Text>
            {error && (
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            )}
            {resetEmailSent && (
              <Alert status="success">
                <AlertIcon />
                Password reset email sent! Check your inbox.
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
                bg="gray.50"
                borderColor="gray.300"
                _placeholder={{ color: "gray.400" }}
              />
            </FormControl>
            <Button colorScheme="teal" type="submit" width="full">
              Reset Password
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

export default ForgotPassword;
