import { useEffect, useState } from "react";
import axiosURL from "../../config/axios";

const FormLocal = ({ closeModal, addLocal, localEditar, modificarLocalEditar, modalEstado }) => {
    const [direccion, setDireccion] = useState('');

    useEffect(() => {
        if (!modalEstado) {
            modificarLocalEditar({})
            setDireccion('')
        }
    }, [modalEstado])

    useEffect(() => {
        if (localEditar?.id) {
            setDireccion(localEditar.direccion)
        }
    }, [localEditar])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (direccion === '') return;

        const token = localStorage.getItem('token');

        if (!token) return;

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        if (localEditar?.id) {
            try {
                const {data} = await axiosURL.put(`locales/${localEditar.id}`, {direccion}, config);
                addLocal(prew => prew.map(p => p.id === data.id ? data : p))
            } catch (error) {
                addLocal(prew => [prew])
            }
        } else {
            try {
                const { data } = await axiosURL.post('locales/nuevo', { direccion }, config);
                addLocal(prew => [...prew, data])
            } catch (error) {
                addLocal(prew => [prew])
            }
        }

        setDireccion('');
        closeModal();
    }

    return (
        <form id="editForm" onSubmit={handleSubmit}>
            {/* Direccion field */}
            <div className="mb-4">
                <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 mb-2">
                    Dirección
                </label>
                <input
                    value={direccion}
                    onChange={e => setDireccion(e.target.value)}
                    type="text"
                    id="direccion"
                    name="direccion"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ingrese la dirección"
                />
            </div>
            {/* Modal Buttons */}
            <div className="flex gap-3">
                <button
                    onClick={closeModal}
                    type="button"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                    Guardar
                </button>
            </div>
        </form>
    )
}

export default FormLocal