import { useState, useEffect, createContext } from "react";
import api from "../hooks/useAxios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if a token exists and set auth state
        const token = localStorage.getItem("token");
        if (token) setAuth(true);
        setLoading(false);
    }, []);

    const login = async (id, password) => {
        try {
            const { data } = await api.post("/auth/login", { id, password });
            localStorage.setItem("token", data.data.accessToken);
            setAuth(true);
        } catch (err) {
            console.error("Login error:", err);
            throw new Error("Invalid credentials");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setAuth(false);
    };

    return (
        <AuthContext.Provider value={{ auth, loading, setLoading, login, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
