import { Outlet } from 'react-router-dom'

const PrimeLayout = () => {
    return (
        <div className='bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen py-8 px-4'>
            <div className='max-w-2xl mx-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default PrimeLayout