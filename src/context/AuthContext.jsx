import { createContext, useEffect, useState } from "react";
import axiosURL from "../config/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setCargando(false);
                return;
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const {data} = await axiosURL('usuarios/perfil', config);
                setAuth(data);
            } catch (error) {
                setAuth({})
            }

            setCargando(false)
        }

        autenticarUsuario()
    }, [])

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        setAuth({});
    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                cargando,
                setAuth,
                cerrarSesion
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;