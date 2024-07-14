import React, { useState } from 'react'

import { Link } from 'react-router-dom';

const Navbar = () => {

    const [rS, setrS] = useState(false);

    const menu = [ "Home", "Services", "About", "Contact"];

    return (

        <div className='h-[200vh] sm:h-screen w-[200vw] sm:w-full bg-[require("./image5-1.jpg").default] bg-cover bg-center'>

            {/* <nav className='w-full h-[12%] bg-zinc-800 bg-opacity-50 text-white flex justify-between items-center px-20'>
                <div className="">
                    <h1 className='font-bold text-5xl sm:text-4xl italic cursor-pointer  tracking-tighter'> <span className='text-green-500 '>Green</span>India</h1>
                </div>
                <ul className='hidden sm:flex gap-6 text-xl font-semibold'>
                    <li className='cursor-pointer py-2 px-2 border-transparent border-b-2 hover:border-white hover:text-emerald-500 transition duration-500 ease '>Home</li>
                    <li className='cursor-pointer py-2 px-2 border-transparent border-b-2 hover:border-white hover:text-emerald-500 transition duration-500 ease '>Services</li>
                    <li className='cursor-pointer py-2 px-2 border-transparent border-b-2 hover:border-white hover:text-emerald-500 transition duration-500 ease '>About</li>
                    <li className='cursor-pointer py-2 px-2 border-transparent border-b-2 hover:border-white hover:text-emerald-500 transition duration-500 ease '>Contact</li>
                </ul>
                <div>
                    <button className='px-8 py-3 bg-emerald-600 rounded-lg text-xl sm:text-base font-semibold hover:bg-emerald-700 transition duration-300 ease'>Login/SignUp</button>
                </div>
            </nav> */}


            <main className='w-full h-full text-white bg-zinc-800 bg-opacity-50 flex items-center justify-center '>
                <div className=' flex flex-col items-start w-[80%] sm:w-[60%] gap-6'>
                    <div>
                        <p className='text-xl text-emerald-400 tracking-wide italic  font-semibold'>what's your waste problem?</p>
                        <h1 className='text-7xl font-bold '>Commercial Waste Management Services</h1>
                    </div>
                    <h6 className='text-xl text-zinc-100'>We help make your business more sustainable With an industry-leading 80% recycling rate, we can help you transform your business’ waste management.</h6>
                    <Link to="/form" className='px-10 py-3 hover:bg-white hover:text-green-600 transition-all duration-500 ease-in-out bg-green-600 font-semibold text-lg'> Make a Request</Link>
                </div>
            </main>

        </div>
    )
}

export default Navbar