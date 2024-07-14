import React from 'react'
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  return (
    <>

      <div className="h-[90vh] w-full bg-[url('./image2.jpg')] bg-fixed bg-no-repeat bg-cover bg-center relative ">
        <div className='h-[30vh] bg-white'>

        </div>
        <div className='h-[60vh] bg-[#011C0E] bg-opacity-60 flex items-center justify-left px-[10vw] '>
          <div className='text-white w-[60%] '>
            <h1 className='text-6xl font-bold pb-4'>Take the First Step Towards Sustainability</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button className="mt-8 px-10 py-3 hover:bg-white hover:text-green-600 transition-all duration-500 ease-in-out bg-green-600 font-semibold text-lg">Contact Now</button>
          </div>
        </div>

        <img src="human.png" alt="worker.png" className='absolute bottom-0 right-20 w-[30%]' />

      </div>


      

      <div className='h-[11vw] py-[2vw] bg-green-900 text-white flex items-center justify-evenly'>
        <div className='flex gap-5 items-center'>
          <div className='w-20 h-20 text-4xl rounded-full flex items-center justify-center bg-white'>
            <FaPhoneAlt className='text-green-900 text-3xl' />
          </div>
          <div>
            <h6 className='font-semibold text-xl '>Phone:</h6>
            <p className='text-lg italic'>(123) 456-7890 , (123) 456-7890</p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div className='w-20 h-20 text-4xl rounded-full flex items-center justify-center bg-white'>
            <IoLocation className='text-green-900 text-4xl' />
          </div>
          <div>
            <h6 className='font-semibold text-xl '>Address:</h6>
            <p className='text-lg'>4578 XYZ Road, ABC State, India</p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div className='w-20 h-20 text-4xl rounded-full flex items-center justify-center bg-white'>
            <MdEmail className='text-green-900 text-4xl' />
          </div>
          <div>
            <h6 className='font-semibold text-xl '>E-Mail:</h6>
            <p className='text-lg'>
              <a href="mailto:info@greenindia.com"> info@greenindia.com </a>
            </p>
          </div>
        </div>
      </div>

      <div className='w-full h-[50vh]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30765876.295481067!2d61.00507432592222!3d19.729641209667584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1720923192724!5m2!1sen!2sin" className="w-full h-full" loading="lazy"></iframe>
      </div>

    </>
  )
}

export default Contact