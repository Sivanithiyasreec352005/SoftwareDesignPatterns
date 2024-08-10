import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            alert('Please fill in all fields');
        } else if (username === 'csivanithiyasree@gmail.com' && password === '1234') {
            navigate('/admin/dashboard', { replace: true });
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div>
            <div className="body1">
                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="user-box">
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                               
                            />
                            <label>Username</label>
                        </div>
                        <div className="user-box">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                             
                            />
                            <label>Password</label>
                        </div>
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;