import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '' || role === '') {
      setError('Please fill in all fields.');
    } else if (password.length < 5) {
      setError('Password must be at least 5 characters long.');
    } else {
      setError('');
      if (role === 'User') {
        navigate('/user/dashboard', { replace: true });
      } else if (role === 'Admin') {
        navigate('/admin/dashboard', { replace: true });
      } else if (role === 'Instructor') {
        navigate('/instructor/dashboard', { replace: true });
      } else {
        setError('Invalid role selected.');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'role':
        setRole(value);
        break;
      default:
        break;
    }
    setError('');
  };

  return (
    <div>
      <div className="h-screen flex">
        <div className="w-1/2 h-full bg-no-repeat bg-left bg-cover" style={{ backgroundImage: `url('https://ik.imagekit.io/sns3305/SDPPRO/pexels-pixabay-267885.jpg?updatedAt=1723265486773')` }}>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center p-8">
          <img 
            src="https://ik.imagekit.io/sns3305/SDPPRO/916ab313-26c3-445c-8cc8-23619e755280-1527074242569-school-pic.png?updatedAt=1723047549513"
            style={{ width: '80px', height: 'auto' }} 
          />
          <div className="w-full max-w-md p-8 space-y-6 shadow-md rounded-lg dark:bg-slate-700 bg-white">
            <h2 className="text-2xl font-bold text-center dark:text-white">LOGIN</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium dark:text-white">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium dark:text-white">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium dark:text-white">Role</label>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select Role</option>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  <option value="Instructor">Instructor</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember_me" name="remember_me" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <label htmlFor="remember_me" className="block ml-2 text-sm dark:text-white">Remember me</label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
                </div>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div>
                <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
