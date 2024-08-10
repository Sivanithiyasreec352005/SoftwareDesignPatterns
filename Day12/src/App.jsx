import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './layout/AdminLayout'
import HomeLayout from './layout/HomeLayout'
import UserLayout from './layout/UserLayout'
import WebLayout from './layout/WebLayout'
import AdminCourses from './pages/Admin/AdminCourses'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminUsers from './pages/Admin/AdminUsers'
import InstructorDashboard from './pages/Instructor/InstructorDashboard'
import CourseEnroll from './pages/Shared/CourseEnroll'
import Enroll from './pages/Shared/Enroll'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import NotFound from './pages/Shared/NotFound'
import Register from './pages/Shared/Register'
import UserLogin from './pages/Shared/UserLogin'
import ViewReport from './pages/Shared/ViewReport'
import UserDashboard from './pages/User/UserDashboard'
import UserLearning from './pages/User/UserLearning'
import UserTest from './pages/User/UserTest'
import UserUsers from './pages/User/UserUsers'
import UserRating from './pages/User/UserRating'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/enroll' element={<Enroll/>} />
                        <Route path='/courseEnroll' element={<CourseEnroll/>} />
                        <Route path='/ulogin'element={<UserLogin/>} />
                        <Route path='/viewreport'element={<ViewReport/>} />
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='user/dashboard' element={<UserDashboard />} />
                        <Route path='user/users' element={<UserUsers />} />
                        <Route path='user/learning' element={<UserLearning/>} />
                        <Route path='user/test' element={<UserTest/>} />
                        <Route path='user/rating' element={<UserRating/>} />
                    </Route>

                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/courses' element={<AdminCourses/>} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                    </Route>
                    <Route element={<WebLayout/>}>
                        <Route path='/instructor/dashboard' element={<InstructorDashboard/>} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </div>
    )
}

export default App