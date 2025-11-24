import { useEffect, useState } from "react"
import axiosURL from "../config/axios";

const Registro = () => {
    const [locales, setLocales] = useState([]);

    useEffect(() => {
        const obtenerLocales = async () => {
            try {
                const { data } = await axiosURL('locales/');
                setLocales(data);
            } catch (error) {
                setLocales([]);
            }
        }

        obtenerLocales()
    }, [])

    return (
        <>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-2">
                    Formulario de Registro
                </h1>
                <p className="text-slate-600">
                    Por favor completa todos los campos requeridos
                </p>
            </div>
            {/* Formulario */}
            <form className="bg-white rounded-lg shadow-lg p-8 space-y-6">
                {/* Nombre y Apellido */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="nombre"
                            className="block text-sm font-semibold text-slate-900 mb-2"
                        >
                            Nombre <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            placeholder="Juan"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            required=""
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="apellido"
                            className="block text-sm font-semibold text-slate-900 mb-2"
                        >
                            Apellido <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="apellido"
                            placeholder="Pérez"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            required=""
                        />
                    </div>
                </div>
                {/* Teléfono y Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="telefono"
                            className="block text-sm font-semibold text-slate-900 mb-2"
                        >
                            Teléfono <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="telefono"
                            placeholder="+34 123 456 789"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            required=""
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-slate-900 mb-2"
                        >
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="juan@ejemplo.com"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            required=""
                        />
                    </div>
                </div>
                {/* Select Local y Número de Boleta */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="local"
                            className="block text-sm font-semibold text-slate-900 mb-2"
                        >
                            Selecciona un Local <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="local"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                        >
                            <option value="">-- Elige un local --</option>
                            {locales.map(local => (
                                <option key={local.id} value={local.id}>{local.nombre}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="boleta"
                            className="block text-sm font-semibold text-slate-900 mb-2"
                        >
                            Número de Boleta <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="boleta"
                            placeholder="BOL-2024-001"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            required=""
                        />
                    </div>
                </div>
                {/* Subir Imagen */}
                <div>
                    <label
                        htmlFor="imagen"
                        className="block text-sm font-semibold text-slate-900 mb-2"
                    >
                        Subir Imagen <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type="file"
                            id="imagen"
                            accept="image/*"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition cursor-pointer"
                            required=""
                        />
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                        Formatos permitidos: JPG, PNG, GIF (máx. 5MB)
                    </p>
                </div>
                {/* Botones */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 transform hover:scale-105"
                    >
                        Enviar Formulario
                    </button>
                    <button
                        type="reset"
                        className="flex-1 bg-slate-300 hover:bg-slate-400 text-slate-900 font-semibold py-3 rounded-lg transition duration-200"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
            {/* Footer */}
            <p className="text-center text-slate-600 text-sm mt-6">
                Los campos marcados con <span className="text-red-500">*</span> son
                obligatorios
            </p>
        </>

    )
}

export default Registro