import Leftbar from '@/components/Admin/Leftbar'
import Topbar from '@/components/Admin/Topbar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  const Navigate = useNavigate()
    const [username, setUsername] = useState(null)
    const checkAuth = async () => {
        if (!authService.isLoggedIn() || authService.getUserRole() !== "Admin") {
            Navigate('/login');
        }
        else {
            const usernameData = async () => {
                const data = await User.getUsername()
                return setUsername(data);
            };
            usernameData()
        }
    };
    useEffect(() => {
        checkAuth();
    }, [Navigate]);
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
      <Leftbar />
      <div className='w-5/6 flex justify-center items-center flex-col'>
        <Topbar />
        <div className='h-[92vh] w-full'>
        <Outlet />
        </div>
      </div>
    </div>
  )
}
export default AdminLayout