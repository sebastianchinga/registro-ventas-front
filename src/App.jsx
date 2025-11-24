import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrimeLayout from './layouts/PrimeLayout'
import Registro from './pages/Registro'
import Login from './pages/Login'
import AdminLayout from './layouts/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import Locales from './pages/admin/Locales'
import { AuthProvider } from './context/AuthContext'
function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<PrimeLayout />}>
            <Route index element={<Registro />} />
          </Route>

          <Route path='/login' element={<Login />} />

          <Route element={<AdminLayout />}>
            <Route path='admin' element={<Dashboard />} />
            <Route path='locales' element={<Locales />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
