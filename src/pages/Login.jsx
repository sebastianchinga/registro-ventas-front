import FormLogin from "../components/main/FormLogin"

const Login = () => {
    return (
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Contenedor principal */}
                <div className="bg-white rounded-lg shadow-2xl p-8 space-y-8">
                    {/* Encabezado */}
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-slate-900">Bienvenido</h1>
                        <p className="text-slate-500 mt-2">Inicia sesión en tu cuenta</p>
                    </div>
                    {/* Formulario */}
                    <FormLogin />

                    {/* Pie de página */}
                    <p className="text-center text-sm text-slate-600">
                        ¿No tienes cuenta?{' '}
                        <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                            Regístrate aquí
                        </a>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Login