import { useState } from "react";

export interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

const AUTH_KEY = import.meta.env.VITE_AUTH_KEY;

export function useAuthStore(): AuthState {
    const [token, setToken] = useState<string | null>(() => {
        return localStorage.getItem(AUTH_KEY);
    });

    const isAuthenticated = !!token;

    const login = (newToken: string) => {
        localStorage.setItem(AUTH_KEY, newToken);
        setToken(newToken);
        window.location.href = "/dashboard";
    };

    const logout = () => {
        localStorage.removeItem(AUTH_KEY);
        setToken(null);
        window.location.href = "/";
    };

    return {
        isAuthenticated,
        token,
        login,
        logout,
    };
}