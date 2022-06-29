import { createContext } from 'react';
import { TokenData } from "util/auth";

export type AuthContextData = {
    authenticated: boolean;
    tokenData?: TokenData;
};

export type AutContextType = {
    authContextData: AuthContextData;
    setAuthContextData: (authContextData: AuthContextData) => void;
};

export const AuthContext = createContext<AutContextType>({
    authContextData:{
        authenticated: false,
    },
    setAuthContextData: () => null,
});