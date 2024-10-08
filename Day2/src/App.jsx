
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './layout/AdminLayout'
import HomeLayout from './layout/HomeLayout'
import UserLayout from './layout/UserLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import Business from './pages/Shared/Business'
import Home from './pages/Shared/Home'
import Itdevelopment from './pages/Shared/Itdevelopment'
import Login from './pages/Shared/Login'
import NotFound from './pages/Shared/NotFound'
import Register from './pages/Shared/Register'
import UserDashboard from './pages/User/UserDashboard'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/business' element={<Business />} />
                        <Route path='*' element={<Itdevelopment/>} />
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/dashboard' element={<UserDashboard />} />
                    </Route>
                    <Route element={<Business/>}>
                    </Route>
                    
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App