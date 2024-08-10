import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && roll && email && password) {
      setIsRegistered(true);
      setError(null);
      console.log('Registration successful');
    } else {
      setError('Please fill in all the fields');
    }
  };

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Card className="w-1/4">
        <CardHeader className="space-y-5">
          <CardTitle className="text-2xl">Create an account</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-5">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="roll">Rollnumber</Label>
              <Input id="roll" type="text" value={roll} onChange={(e) => setRoll(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="user@iamneo.ai" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && (
              <p className="text-red-500">{error}</p>
            )}
            <div className="mt-10"> {/* Add margin top of 1 inch (16px) */}
              <CardFooter>
                <Button className="w-full" type="submit">Create account</Button>
              </CardFooter>
            </div>
          </form>
        </CardContent>
      </Card>
      {isRegistered && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <p className="text-green-500">Successfully registered!</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsRegistered(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Register;