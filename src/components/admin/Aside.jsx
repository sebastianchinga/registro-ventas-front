import { Link, useLocation } from "react-router-dom"

const Aside = () => {
    const { pathname } = useLocation();

    return (
        <aside className="hidden md:flex md:w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white shadow-xl fixed h-full overflow-y-auto flex-col">
            {/* <!-- Logo --> */}
            <div className="p-6 border-b border-blue-700">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                        <i className="fas fa-chart-bar text-white text-lg"></i>
                    </div>
                    <span className="text-xl font-bold">GestHub</span>
                </div>
            </div>

            {/* <!-- Navigation Menu --> */}
            <nav className="p-4 mt-4">
                <div className="space-y-2">
                    {/* <!-- Usuarios --> */}
                    <Link to="/admin" className={`flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === '/admin' ? 'bg-blue-700 hover:bg-blue-600' : 'hover:bg-blue-700'} transition-colors cursor-pointer`}>
                        <i className="fas fa-users text-lg"></i>
                        <span className="font-medium">Usuarios</span>
                    </Link>

                    {/* <!-- Locales --> */}
                    <Link to='/locales' className={`flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === '/locales' ? 'bg-blue-700 hover:bg-blue-600' : 'hover:bg-blue-700'} transition-colors cursor-pointer`}>
                        <i className="fas fa-store text-lg"></i>
                        <span className="font-medium">Locales</span>
                    </Link>

                    {/* <!-- Reportes --> */}
                    <a href="#reportes"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                        <i className="fas fa-file-chart-line text-lg"></i>
                        <span className="font-medium">Reportes</span>
                    </a>

                    {/* <!-- Configuración --> */}
                    <a href="#configuracion"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                        <i className="fas fa-gear text-lg"></i>
                        <span className="font-medium">Configuración</span>
                    </a>
                </div>
            </nav>
        </aside>
    )
}

export default Aside