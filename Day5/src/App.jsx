import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import AdminUsers from './pages/Admin/AdminUsers'
import UserUsers from './pages/User/UserUsers'
import Enroll from './pages/Shared/Enroll'
import Business from './pages/Shared/Business'
import CourseEnroll from './pages/Shared/CourseEnroll'
import UserLearning from './pages/User/UserLearning'
import UserLogin from './pages/Shared/UserLogin'
 import Rating from './pages/Shared/Rating'
// import Stories from './pages/Shared/Stories'




const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/enroll' element={<Enroll/>} />
                        <Route path='/courseEnroll' element={<CourseEnroll/>} />
                        <Route path='/ulogin'element={<UserLogin/>} />
                        {/* <Route path='/rating' element={<Rating  />}/> */}
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='user/dashboard' element={<UserDashboard />} />
                        <Route path='user/users' element={<UserUsers />} />
                        <Route path='user/lear' element={<UserLearning/>} />
                    </Route>

                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App