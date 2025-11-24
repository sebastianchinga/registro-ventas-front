import { useState } from "react";

const useModal = () => {
    const [modal, setModal] = useState(false);

    const abrirModal = () => setModal(true);
    const cerrarModal = () => setModal(false);

    return {
        modal,
        abrirModal,
        cerrarModal
    }
}

export default useModal