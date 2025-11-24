import { useEffect, useState } from "react";
import useModal from "../../hooks/useModal"

const Dashboard = () => {
    const { modal, abrirModal, cerrarModal } = useModal();
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const obtenerRegistros = async () => {
            try {
                const token = localStorage.getItem('token');
            } catch (error) {
                
            }
        }
        obtenerRegistros()
    }, [])

    return (
        <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-white rounded-lg shadow p-4 md:p-6 border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-xs md:text-sm font-medium">Total Usuarios</p>
                            <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">1,234</p>
                        </div>
                        <i className="fas fa-users text-3xl md:text-4xl text-blue-500 opacity-20"></i>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4 md:p-6 border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-xs md:text-sm font-medium">Usuarios Activos</p>
                            <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">856</p>
                        </div>
                        <i className="fas fa-user-check text-3xl md:text-4xl text-green-500 opacity-20"></i>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4 md:p-6 border-l-4 border-yellow-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-xs md:text-sm font-medium">Total Locales</p>
                            <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">24</p>
                        </div>
                        <i className="fas fa-store text-3xl md:text-4xl text-yellow-500 opacity-20"></i>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4 md:p-6 border-l-4 border-purple-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-xs md:text-sm font-medium">Este Mes</p>
                            <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">142</p>
                        </div>
                        <i className="fas fa-calendar-alt text-3xl md:text-4xl text-purple-500 opacity-20"></i>
                    </div>
                </div>
            </div>

            {/* <!-- Filters and Table --> */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                {/* <!-- Table Header with Filters --> */}
                <div className="p-4 md:p-6 border-b border-gray-200">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg md:text-xl font-bold text-gray-800">Lista de Usuarios</h2>

                        {/* <!-- Date Filter responsive: stacked on mobile, inline on larger screens --> */}
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                            {/* <!-- Added max-w-md to make filters narrower --> */}
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Desde</label>
                                <input type="date"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Hasta</label>
                                <input type="date"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
                            </div>
                            <div className="flex items-end">
                                <button
                                    className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm">
                                    <i className="fas fa-search mr-2"></i>Filtrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Table wrapper with horizontal scroll on mobile --> */}
                <div className="overflow-x-auto">
                    <table className="w-full min-w-max">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th
                                    className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700">
                                    Nombre</th>
                                <th
                                    className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700">
                                    Apellido</th>
                                {/* <!-- Removed Email column --> */}
                                <th
                                    className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700">
                                    Nº Boleta</th>
                                <th
                                    className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700">
                                    Fecha Registro</th>
                                <th
                                    className="px-4 md:px-6 py-3 md:py-4 text-center text-xs md:text-sm font-semibold text-gray-700">
                                    Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {/* <!-- Row 1 --> */}
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 md:px-6 py-3 md:py-4 text-sm text-gray-800">Juan</td>
                                <td className="px-4 md:px-6 py-3 md:py-4 text-sm text-gray-800">Pérez</td>
                                {/* <!-- Removed Email cell --> */}
                                <td className="px-4 md:px-6 py-3 md:py-4 text-sm text-gray-800">BOL-2024-001</td>
                                <td className="px-4 md:px-6 py-3 md:py-4 text-sm text-gray-600">15/11/2024</td>
                                <td className="px-4 md:px-6 py-3 md:py-4 text-center">
                                    {/* <!-- Only eye icon button now, removed edit and delete buttons --> */}
                                    <button
                                        onClick={abrirModal}
                                        className="text-green-600 hover:text-green-800" title="Ver detalles">
                                        <i className="fas fa-eye"></i>
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>

            {/* Modal */}
            <div id="userModal" className={`${!modal && 'hidden'} fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4`}>
                <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-96 overflow-y-auto">
                    {/* Modal Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-800">Detalles del Usuario</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            <i className="fas fa-times" />
                        </button>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6">
                        {/* User Image (shown only if provided) */}
                        <div id="userImageContainer" className="mb-4">
                            <img
                                id="userImage"
                                src="/placeholder.svg"
                                alt="Foto del usuario"
                                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100"
                            />
                        </div>
                        {/* User Details */}
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase">
                                    Nombre
                                </p>
                                <p className="text-gray-800 font-medium"></p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase">
                                    Apellido
                                </p>
                                <p id="modalApellido" className="text-gray-800 font-medium" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase">Email</p>
                                <p id="modalEmail" className="text-gray-800 font-medium break-all" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase">
                                    Teléfono
                                </p>
                                <p id="modalTelefono" className="text-gray-800 font-medium" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase">
                                    Número de Boleta
                                </p>
                                <p id="modalBoleta" className="text-gray-800 font-medium" />
                            </div>
                        </div>
                        {/* Close Button */}
                        <button
                            className="w-full mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard