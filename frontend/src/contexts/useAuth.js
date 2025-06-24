import {createContext, useContext, useState, useEffect} from 'react';
import { is_authenticated } from '../endpoints/api';
import { login, register } from '../endpoints/api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const nav = useNavigate()

    const get_authenticated = async () =>{
        try{
            const success = await is_authenticated();
            setIsAuthenticated(success)
        }catch{
            setIsAuthenticated(false)
        }finally{
            setLoading(false)
        }
    }

    const login_user = async(username, password)=>{
        const success = await login(username, password)
        if(success){
            setIsAuthenticated(true)
            nav('/')
        }
    }

    const register_user = async(username, email, password, confirmPassword) => {    
        if(password === confirmPassword){
            try{
                await register(username, email, password);
                alert('User registered successfully')
                nav('/login');
            }catch{
                alert('error registering user')
            }
        }else{
            console.error("Passwords do not match");
        }
    }

    useEffect (() => {
        get_authenticated();
    }, [window.location.pathname])

    return (
        <AuthContext.Provider value={{isAuthenticated, loading, login_user, register_user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);