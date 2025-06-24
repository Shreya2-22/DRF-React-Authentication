import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './routes/login';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import Menu from './routes/menu';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Menu/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;