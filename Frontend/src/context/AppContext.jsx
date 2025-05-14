
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from "react-router";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit, setCredit] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const navigate = useNavigate()

    const loadCreditsData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/user/credits', {headers: {token}})

            if (data.success) {
                setCredit(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

     const generateImage = async (prompt) => {
    try {
        const { data } = await axios.post(
            backendUrl + '/api/image/generate-image', 
            { prompt }, 
            { headers: { token } }
        );

        if (data.success) {
            loadCreditsData();
            // Return consistent structure that matches what your component expects
            return {
                success: true,
                imageUrl: data.imageUrl,  // Make sure this matches your backend response
                creditBalance: data.creditBalance,
                promptUsed: prompt
            };
        } else {
            loadCreditsData();
            toast.error(data.message);
            
            if (data.creditBalance === 0) {
                navigate('/buy');
            }
            
            // Explicitly return an error object
            return {
                success: false,
                error: data.message
            };
        }
    } catch (error) {
        toast.error(error.message);
        // Return error structure instead of falling through
        return {
            success: false,
            error: error.message
        };
    }
};
 

    const logout = () => {
        localStorage.removeItem('token');
        setToken('')
        setUser(null)
    }

    useEffect(()=> {
        if (token) {
            loadCreditsData()
        }
    },[token])

    const value = {
        user, setUser, showLogin, setShowLogin, backendUrl, token, setToken, credit, setCredit, loadCreditsData, logout, generateImage
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider