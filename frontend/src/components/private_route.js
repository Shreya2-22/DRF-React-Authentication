import {Heading} from '@chakra-ui/react'
import { useAuth } from '../contexts/useAuth';
const PrivateRoute = ({children}) => {
    const {isAuthenticated, loading} = useAuth();
    
}


export default PrivateRoute;