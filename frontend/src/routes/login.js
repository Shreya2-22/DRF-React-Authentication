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
import {login} from '../endpoints/api';
import { useAuth } from "../contexts/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {login_user} = useAuth();
  const handleLogin = () => {login_user(username, password)}
  const nav = useNavigate();

  const handleRegisterRedirect = () => {
    nav('/register');
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
                Welcome Back
              </Heading>
              <Text color="gray.500" mt={2}>
                Sign in to your account
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

              <Button
                type="submit"
                width="100%"
                size="lg"
                colorScheme="blue"
                mt={4}
                _hover={{ transform: "translateY(-1px)", shadow: "md" }}
                onClick = {handleLogin}
              >
                Login
              </Button>
            </VStack>

            <Box textAlign="center">
              <Text color="gray.500" fontSize="sm">
                Don't have an account?
                <Text as="span" color="blue.500" cursor="pointer" ml={1} onClick={handleRegisterRedirect}>
                  Sign up
                </Text>
              </Text>
            </Box>
          </VStack>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default Login;
