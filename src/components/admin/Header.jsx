import useAuth from "../../hooks/useAuth"
import extraerIniciales from "../../helpers/extraerIniciales";

const Header = () => {
    const { auth, cerrarSesion } = useAuth();   
    
    return (
        <header className="bg-white shadow-md border-b border-gray-200">
            <div className="px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 md:gap-3">
                    {/* <!-- Mobile menu icon for future mobile navigation --> */}
                    <button className="md:hidden text-gray-600 hover:text-gray-800">
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                    <h1 className="text-lg md:text-2xl font-bold text-gray-800">Panel de Control</h1>
                </div>

                {/* <!-- User Profile with Dropdown Menu --> */}
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="relative group">
                        {/* <!-- User Avatar Button --> */}
                        <button
                            className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base hover:shadow-lg transition-shadow cursor-pointer">
                            {auth?.id && extraerIniciales(auth.nombre)}
                        </button>

                        {/* <!-- Dropdown Menu --> */}
                        <div
                            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="px-4 py-3 border-b border-gray-200">
                                <p className="text-sm font-semibold text-gray-800">{auth?.nombre}</p>
                                <p className="text-xs text-gray-500">Administrador</p>
                            </div>
                            <a href="#perfil"
                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors text-sm">
                                <i className="fas fa-user-circle"></i>
                                <span>Mi Perfil</span>
                            </a>
                            <a href="#configuracion"
                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors text-sm border-b border-gray-200">
                                <i className="fas fa-cog"></i>
                                <span>Configuración</span>
                            </a>
                            <button
                                onClick={cerrarSesion}
                                className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors text-sm font-medium">
                                <i className="fas fa-sign-out-alt"></i>
                                <span>Cerrar Sesión</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header