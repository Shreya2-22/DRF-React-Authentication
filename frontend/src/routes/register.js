import {
  VStack,
  Field,
  Input,
  Button,
  Box,
  Heading,
  Text,
  Card,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth.js";

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
 
  const navigate = useNavigate();

  const {register_user} = useAuth();

  const handleRegister = () => {
    register_user(username, email, password, confirmPassword)
  }

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      p={4}
    >
      <Card.Root maxWidth="400px" width="100%" p={8} shadow="lg">
        <Card.Body>
          <VStack gap={6}>
            <Box textAlign="center">
              <Heading size="lg" color="gray.700">
                Create Account
              </Heading>
              <Text color="gray.500" mt={2}>
                Sign up for a new account
              </Text>
            </Box>

            <VStack gap={4} width="100%">
              <Field.Root>
                <Field.Label color="gray.600">Username</Field.Label>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  size="lg"
                  borderColor="gray.300"
                  _focus={{
                    borderColor: "blue.500",
                    boxShadow: "0 0 0 1px #3182ce",
                  }}
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </Field.Root>

              <Field.Root>
                <Field.Label color="gray.600">Email</Field.Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  size="lg"
                  borderColor="gray.300"
                  _focus={{
                    borderColor: "blue.500",
                    boxShadow: "0 0 0 1px #3182ce",
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Field.Root>

              <Field.Root>
                <Field.Label color="gray.600">Password</Field.Label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  size="lg"
                  borderColor="gray.300"
                  _focus={{
                    borderColor: "blue.500",
                    boxShadow: "0 0 0 1px #3182ce",
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Field.Root>

              <Field.Root>
                <Field.Label color="gray.600">Confirm Password</Field.Label>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  size="lg"
                  borderColor="gray.300"
                  _focus={{
                    borderColor: "blue.500",
                    boxShadow: "0 0 0 1px #3182ce",
                  }}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
              </Field.Root>

              <Button
                type="submit"
                width="100%"
                size="lg"
                color="white"
                mt={4}
                _hover={{ 
                  transform: "translateY(-1px)", 
                  shadow: "md",
                  bg: "green.600"
                }}
                onClick={handleRegister}
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Register"}
              </Button>
            </VStack>

            <Box textAlign="center">
              <Text color="gray.500" fontSize="sm">
                Already have an account?
                <Text 
                  as="span" 
                  color="blue.500" 
                  cursor="pointer" 
                  ml={1}
                  onClick={handleLoginRedirect}
                >
                  Sign in
                </Text>
              </Text>
            </Box>
          </VStack>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default Register;