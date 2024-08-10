import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GridPattern } from "./components/magicui/animated-grid-pattern"
import RetroGrid from "./components/magicui/retro-grid"
import { ModeToggle } from "./components/mode-toggle"

export default function App() {
  return (
    <>
      <ModeToggle />
      {/* <div className="h-screen flex justify-center items-center"> */}
      <div >
        <GridPattern />
        <RetroGrid />
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-500 hover:text-white">Login</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Login</DialogTitle>
              <DialogDescription>
                Login with an existing profile
              </DialogDescription>
            </DialogHeader>
            <form>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Username"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                  Password
                  </Label>
                  <Input
                    id="Password"
                    defaultValue="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
            </form>
            <DialogFooter>
              <Button type="submit" className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-500 hover:text-white">Forgot Password</Button>
            </DialogFooter>
            <DialogFooter>
              <Button type="submit" className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-500 hover:text-white">Submit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-500 hover:text-white">Register</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Register</DialogTitle>
              <DialogDescription>
               Create an Account
              </DialogDescription>
            </DialogHeader>
            <form>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    // defaultValue="Siva Nithiya Sree"
                    // className="col-span-3" required
                     placeholder="Enter your Name"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    // defaultValue="@xxxx"
                    placeholder="Enter your username"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-right">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="confirmPassword" className="text-right">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Enter your password"
                    className="col-span-3"
                  />
                </div>
              </div>
            </form>
            <DialogFooter>
              <Button type="submit" className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:text-white">Register</Button>
            </DialogFooter>
            <DialogFooter>
              <Button type="submit" className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:text-white">Login</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
