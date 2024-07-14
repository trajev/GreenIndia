import React from 'react'

import { SocialIcon } from 'react-social-icons'

import { Link } from 'react-router-dom'


const Footer = () => {

  const socialMediaHandlesLinks = {
    gitHub: 'https://github.com/#',
    instagram: 'https://www.instagram.com/#',
    linkedin: 'https://www.linkedin.com/in/#',
    twitter: 'https://twitter.com/#'
  }

  return (

    <>

      <div className='w-full bg-[#081d06] py-[6vh] px-[6vh] flex  items-center justify-evenly text-white'>


        <ul className="social-handle-list flex flex-col gap-2 ">
          <li className="social-handle-item ">
            <SocialIcon url={socialMediaHandlesLinks.gitHub} />
          </li>

          <li className="social-handle-item">
            <SocialIcon url={socialMediaHandlesLinks.linkedin} />
          </li>

          <li className="social-handle-item">
            <SocialIcon url={socialMediaHandlesLinks.instagram} />
          </li>

          <li className="social-handle-item">
            <SocialIcon url={socialMediaHandlesLinks.twitter} />
          </li>
        </ul>


        <div className="flex flex-col gap-4 w-[40%] ">
          <h1 className='font-bold text-5xl italic cursor-pointer  tracking-tighter'> <span className='text-green-500 '>Green</span>India</h1>
          <p className='text-md text-justify'>We are a reliable and fast-growing outsourcing call center company  that works with clients from all over the world, providing the professional services of a data enrichment, direct email marketing,  lead generation, market research.</p>
          <ul className='flex items-center justify-start gap-6 text-xl'>
            <li className='hover:text-emerald-500 cursor-pointer transition duration-400 ease '>Home</li>
            <li className='hover:text-emerald-500 cursor-pointer transition duration-400 ease '>Services</li>
            <li className='hover:text-emerald-500 cursor-pointer transition duration-400 ease '>About</li>
            <li className='hover:text-emerald-500 cursor-pointer transition duration-400 ease '>Contact</li>
          </ul>
        </div>




        <div className="flex flex-col items-start gap-3 w-[30%]">
          <h1 className=' text-xl capitalize my-3'> <span className='text-green-500 text-3xl font-semibold '>Subscribe</span>  for more updates </h1>
          <input type="text" className='w-full px-4 py-2 rounded-md outline-none text-xl placeholder:text-lg text-black' placeholder='Your Email Here..' />
          <button className='px-10 py-2 rounded-md hover:bg-white hover:text-green-600 transition-all duration-500 ease-in-out bg-green-600 font-semibold text-lg'>Subscribe</button>
        </div>

      </div>






    </>



  )
}

export default Footer