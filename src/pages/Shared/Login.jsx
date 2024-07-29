import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Facebook, Twitter, YoutubeIcon } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Please fill in all fields');
    } else if (username === 'csivanithiyasree@gmail.com' && password === '1234') {
      navigate('/admin/dashboard', { replace: true });
    } else {
      setError('Invalid username or password');
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'email') {
      setUsername(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
    setError(null);
  };

  return (
    <>
      <div className="wrapper">
        <div className="sct brand">
          <BookOpen size={100} />
        </div>
        <div className="sct login">
          <form onSubmit={handleSubmit}>
            <h3>Member Login</h3>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={username}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="forgot-remember">
              <label className="control control-checkbox">
                Remember me
                <input type="checkbox" />
                <div className="control_indicator"></div>
              </label>
              <div className="forgot">
                <a href="#">Forgot Password?</a>
              </div>
            </div>
            <input type="submit" name="send" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;