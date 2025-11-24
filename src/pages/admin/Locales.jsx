import { useEffect, useState } from "react"
import axiosURL from "../../config/axios";
import useModal from "../../hooks/useModal";
import FormLocal from "../../components/admin/FormLocal";

const Locales = () => {
    const [locales, setLocales] = useState([]);
    const { modal, abrirModal, cerrarModal } = useModal();
    const [localEditar, setLocalEditar] = useState({});

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

    const editarLocal = (local) => {
        setLocalEditar(local);
        abrirModal()
    }

    const eliminarLocal = async (local) => {
        try {
            const token = localStorage.getItem('token');

            if (!token) return;
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            await axiosURL.delete(`locales/${local.id}`, config);
            setLocales(prew => prew.filter(p => p.id !== local.id))
        } catch (error) {
            setLocales([]);
        }
    }

    return (
        <>
            {/* Title and button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <h2 className="text-lg lg:text-xl font-bold text-gray-800">
                    Lista de Locales
                </h2>
                <button onClick={abrirModal} className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors font-medium text-sm lg:text-base">
                    <i className="fas fa-plus" />
                    Agregar Local
                </button>
            </div>
            {/* Stats cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-4 lg:p-6 border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-xs lg:text-sm font-medium">
                                Total de Locales
                            </p>
                            <p className="text-2xl lg:text-3xl font-bold text-gray-800 mt-2">
                                24
                            </p>
                        </div>
                        <i className="fas fa-store text-3xl lg:text-4xl text-blue-500 opacity-20" />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 lg:p-6 border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-xs lg:text-sm font-medium">
                                Locales Activos
                            </p>
                            <p className="text-2xl lg:text-3xl font-bold text-gray-800 mt-2">
                                22
                            </p>
                        </div>
                        <i className="fas fa-check-circle text-3xl lg:text-4xl text-green-500 opacity-20" />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 lg:p-6 border-l-4 border-red-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-xs lg:text-sm font-medium">
                                Locales Inactivos
                            </p>
                            <p className="text-2xl lg:text-3xl font-bold text-gray-800 mt-2">2</p>
                        </div>
                        <i className="fas fa-times-circle text-3xl lg:text-4xl text-red-500 opacity-20" />
                    </div>
                </div>
            </div>
            {/* Table Section */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                {/* Simplified table with only direccion, telefono, and action buttons */}
                <div className="overflow-x-auto">
                    <table className="w-full min-w-max lg:min-w-full">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-3 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-semibold text-gray-700">
                                    ID
                                </th>
                                <th className="px-3 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-semibold text-gray-700">
                                    Dirección
                                </th>
                                <th className="px-3 lg:px-6 py-3 lg:py-4 text-center text-xs lg:text-sm font-semibold text-gray-700">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {locales.map(local => (
                                <tr key={local.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-gray-800">
                                        {local.id}
                                    </td>
                                    <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-gray-800">
                                        {local.direccion}
                                    </td>
                                    <td className="px-3 lg:px-6 py-3 lg:py-4 text-center flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => editarLocal(local)}
                                            className="text-blue-600 hover:text-blue-800"
                                            title="Editar"
                                        >
                                            <i className="fas fa-edit text-sm lg:text-base" />
                                        </button>
                                        <button
                                            onClick={() => eliminarLocal(local)}
                                            className="text-red-600 hover:text-red-800"
                                            title="Eliminar"
                                        >
                                            <i className="fas fa-trash text-sm lg:text-base" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
            </div>

            {/* Modal for direccion and telefono */}
            <div id="editModal" className={`${!modal && 'hidden'} fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4`}>
                <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                    {/* Modal Header */}
                    <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800">{localEditar?.id ? 'Editar' : 'Agregar'} Local</h3>
                        <button
                            onClick={cerrarModal}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <i className="fas fa-times text-lg" />
                        </button>
                    </div>
                    {/* Modal Body */}
                    <div className="px-6 py-6">
                        <FormLocal
                            modalEstado={modal}
                            localEditar={localEditar}
                            modificarLocalEditar={setLocalEditar}
                            addLocal={setLocales}
                            closeModal={cerrarModal}
                        />
                    </div>
                </div>
            </div>

        </>


    )
}

export default Locales