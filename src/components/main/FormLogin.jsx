import { useState } from "react"
import axiosURL from "../../config/axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const {setAuth} = useAuth();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([email, password].includes(" ")) {
            return;
        }

        try {
            const {data} = await axiosURL.post('usuarios/login', {email, password});
            localStorage.setItem('token', data.token);
            setAuth(data)
            navigate('/admin');
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Campo Email */}
            <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700"
                >
                    Correo Electrónico
                </label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
            </div>
            {/* Campo Password */}
            <div className="space-y-2">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700"
                >
                    Contraseña
                </label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
            </div>
            {/* Recuérdame y Olvidé contraseña */}
            <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-slate-600">Recuérdame</span>
                </label>
                <a
                    href="#"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                    ¿Olvidaste tu contraseña?
                </a>
            </div>
            {/* Botón de envío */}
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200 transform hover:scale-105"
            >
                Iniciar Sesión
            </button>
        </form>
    )
}

export default FormLogin