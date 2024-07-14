import React from 'react'
import "./style.css"
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { Link } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';

const SignUp = () => {

   const schema = yup.object().shape({
      name: yup.string().required('Name is required'),
      phone: yup.string()
         .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
         .required('Phone number is required'),
      email: yup.string()
         .email('Invalid email address')
         .required('Email is required'),
      password: yup.string()
         .min(6, 'Password must be at least 6 characters')
         .max(10, 'Password must not exceed 10 characters')
         .required('Password is required'),
   });

   const { register, handleSubmit, formState:{errors} } = useForm(
      {
         resolver: yupResolver(schema),
      }
   );

   const onSubmit = (data) => {
      console.log(data)
   }

   return (

      <>

         <div className="form-container  border-none w-[30%]">
            <h2 className="text-2xl mb-3 font-semibold text-green-600">Sign Up</h2>
            <form action="signup" method="post"  className='shadow-2xl' onSubmit={handleSubmit(onSubmit)} >
               <div className="form-group">
                  <label for="name" className="text-black">Name:</label>
                  <input type="text" id="name" name="username" {...register("name")} placeholder="Enter Name" autocomplete="off" />
                  {<span className='text-sm text-red-400 '>{errors.name?.message} </span> }
               </div>
               <div className="form-group">
                  <label for="phone" className="text-black">Phone Number:</label>
                  <input type="tel" id="phone" name="phone" {...register("phone")} placeholder="Enter Phone Number" autocomplete="off" />
                  {<span className='text-sm text-red-400'>{errors.phone?.message} </span> }
               </div>
               <div className="form-group">
                  <label for="email" className="text-black">Email:</label>
                  <input type="text" id="email" name="email" {...register("email")} placeholder="Enter Email" autocomplete="off" />
                  {<span className='text-sm text-red-400'>{errors.email?.message} </span> }
               </div>
               <div className="form-group">
                  <label for="password" className="text-black">Password:</label>
                  <input type="password" id="password" name="password" {...register("password")} placeholder="Enter Password" />
                  {<span className='text-sm text-red-400'>{errors.password?.message} </span> }
               </div>
               <button type="submit" className="submit-btn font-semibold hover:bg-green-900 text-white px-4 py-2 rounded-md">Signup</button>

            <Link to="/login" className='text-sm text-black underline'>Back to login</Link>
            </form>
         </div>

      </>

   )
}

export default SignUp