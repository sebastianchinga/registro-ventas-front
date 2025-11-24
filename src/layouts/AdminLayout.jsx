import { Navigate, Outlet } from "react-router-dom"
import Aside from "../components/admin/Aside"
import Header from "../components/admin/Header"
import useAuth from "../hooks/useAuth"

const AdminLayout = () => {
    const { auth, cargando } = useAuth();

    if (cargando) return 'cargando'

    return (
        <div className="bg-gray-50">
            <div className="flex h-screen">
                {/* Sidebar */}
                <Aside />

                {/* Main Content */}
                <div className="flex-1 md:ml-64 flex flex-col h-screen">
                    {/* Header */}
                    <Header />

                    {/* Content Area */}
                    <main className="flex-1 overflow-auto p-4 md:p-8">
                        {auth?.id ? <Outlet /> : <Navigate to="/login" />}
                    </main>
                </div>

            </div>

        </div>
    )
}

export default AdminLayout