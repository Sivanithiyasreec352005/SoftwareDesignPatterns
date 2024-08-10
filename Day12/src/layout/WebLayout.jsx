
import InstructorDashboard from '@/pages/Instructor/InstructorDashboard'
import { Outlet } from 'react-router-dom'
import InstructorTopBar from '../components/Instructor/InstructorTopbar'

const WebLayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
      <InstructorTopBar />
      <div className='w-5/6 flex justify-center items-center flex-col'>
        <div className='h-[92vh] w-full'>
        <InstructorDashboard/>
        <Outlet />
        </div>
      </div>
    </div>
  )
}
export default WebLayout