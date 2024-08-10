import { NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { BookOpen } from "lucide-react";
const Navbar = () => {
    const LinksData = [
        {
        title:'Home',
        link:'/'
    },

        {
        title:'Login',
        link:'/login'
    },

        {
        title:'Register',
        link:'/register'
    },
        
        {
        title:'CourseEnroll',
        link:'/courseEnroll'
        
        }
    ,  {
        title:'Enroll',
        link:'/enroll'
        
    }
    ,  {
        title:'UserLogin',
        link:'/ulogin'
        
    }
    ,  {
        title:'Rating',
        link:'/rating'
        
    }
]
  return (
    <div className='w-full h-[8vh] flex flex-row justify-center items-center bg-primary/5 '>
    <div className='h-full w-1/4 flex flex-row justify-center items-center text-1xl font-bold text-primary'>
    <BookOpen gap={2}/>
    NLEARN
    </div>
    <div className='h-full w-3/4 flex flex-row justify-end items-center text-1xl font-bold gap-6 ml-10'>
    {
     LinksData.map((data ,index ) => (
        <li key={index} className="list-none">
            <NavLink to={data.link}>
                {data.title}
            </NavLink>

        </li>

    ))
    }
    <ModeToggle/>
    </div>
    </div>
)
}

export default Navbar;