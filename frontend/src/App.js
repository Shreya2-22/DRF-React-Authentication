import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./routes/login";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Menu from "./routes/menu";
import { AuthProvider } from "./contexts/useAuth";
import PrivateRoute from "./components/private_route";
import Register from "./routes/register";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path='/register' element={<Register/>} />
            <Route path="/" element={<PrivateRoute><Menu /></PrivateRoute>} />
          </Routes>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
