import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {

    // const [isLoggedIn, setIsLoginIn] = useState(false);

    return (


        <nav className='w-full h-[12%] py-6 bg-[#081D06] text-white flex justify-between items-center px-20'>
            <div className="">
                <Link to="/"><h1 className='font-bold text-5xl sm:text-4xl italic cursor-pointer  tracking-tighter'> <span className='text-green-500 '>Green</span>India</h1> </Link>
            </div>
            <ul className='hidden sm:flex gap-6 text-xl font-semibold'>
                <Link to="/" className='cursor-pointer py-2 px-2 border-transparent border-b-2 hover:border-white hover:text-emerald-500 transition duration-500 ease '>Home</Link>
                <Link to="/services" className='cursor-pointer py-2 px-2 border-transparent border-b-2 hover:border-white hover:text-emerald-500 transition duration-500 ease '>Services</Link>
                <Link to="/" className='cursor-pointer py-2 px-2 border-transparent border-b-2 hover:border-white hover:text-emerald-500 transition duration-500 ease '>About</Link>
                <Link to="/contact" className='cursor-pointer py-2 px-2 border-transparent border-b-2 hover:border-white hover:text-emerald-500 transition duration-500 ease '>Contact</Link>
            </ul>
            <div>
                <Link to="/login"  className='px-8 py-3 bg-emerald-600 rounded-lg text-xl sm:text-base font-semibold hover:bg-emerald-700 transition duration-300 ease'>Login/SignUp</Link>
            </div>
        </nav>

    )
}

export default MainNav