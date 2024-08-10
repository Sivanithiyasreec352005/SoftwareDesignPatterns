import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        setIsRegistered(true);
        setError(null);
        alert('Registration successful!');
      } else {
        setError('Passwords do not match');
        setIsRegistered(false);
      }
    } else {
      setError('Please fill in all the fields');
      setIsRegistered(false);
    }
  };

  const handleSignIn = () => {
    navigate('/login');
  };

  const handleGoogleSignUp = () => {
    window.location.href = 'https://www.gmail.com';
  };

  const handleGithubSignUp = () => {
    window.location.href = 'https://www.github.com';
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Register</h5>
              <form className="form-signin" onSubmit={handleSubmit}>
                <div className="form-label-group">
                  <input 
                    type="text" 
                    id="inputUsername" 
                    className="form-control" 
                    placeholder="Username" 
                    required 
                    autoFocus 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                  />
                  <label htmlFor="inputUsername">Username</label>
                </div>

                <div className="form-label-group">
                  <input 
                    type="email" 
                    id="inputEmail" 
                    className="form-control" 
                    placeholder="Email address" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>

                <hr />

                <div className="form-label-group">
                  <input 
                    type="password" 
                    id="inputPassword" 
                    className="form-control" 
                    placeholder="Password" 
                    required 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>

                <div className="form-label-group">
                  <input 
                    type="password" 
                    id="inputConfirmPassword" 
                    className="form-control" 
                    placeholder="Confirm Password" 
                    required 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                  />
                  <label htmlFor="inputConfirmPassword">Confirm password</label>
                </div>

                <button className="btn btn-lg btn-primary btn-block text-uppercase gap-2" type="submit">Register</button>
                {isRegistered && (
                  <div className="alert alert-success mt-2" role="alert">
                    Registered successfully!
                  </div>
                )}
                {error && (
                  <div className="alert alert-danger mt-4" role="alert">
                    {error}
                  </div>
                )}
                <button className="d-block text-center mt-8 small" onClick={handleSignIn}>Sign In</button>
                <hr className="my-4" />
                <div className="mt-4"> {/* add a div with some margin top */}
                  <button 
                    className="btn btn-lg btn-google btn-block text-uppercase" 
                    type="button" 
                    onClick={handleGoogleSignUp}
                  >
                    <i className="fab fa-google mr-2"></i> Sign up with Google
                  </button>
                  <button 
                    className="btn btn-lg btn-facebook btn-block text-uppercase mt-2" 
                    type="button" 
                    onClick={handleGithubSignUp}
                  >
                    <i className="fab fa-github-f mr-2"></i> Sign up with Github
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
