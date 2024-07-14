import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import  * as yup from "yup";
import { yupResolver  } from '@hookform/resolvers/yup';


const Login = () => {

  const schema = yup.object().shape({
    email: yup.string()
       .email('Invalid email address')
       .required('Email is required'),
    password: yup.string()
       .min(6, 'Password must be at least 6 characters')
       .max(10, 'Password must not exceed 10 characters')
       .required('Password is required'),
 });

  const { register, handleSubmit , formState:{errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log( data );
  }

  return (
    <>
      <div className="form-container w-[30%] border-none">
        <h2 className="text-2xl mb-3 font-semibold text-green-600">Login</h2>
        <form action="login" method="post" className='shadow-2xl' onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email" className="text-black">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Email"
              {...register("email")}
              
              className="focus:outline-none px-3 py-2 border rounded-md w-full"
            />
            {<span className='text-sm text-red-400'>{errors.email?.message} </span> }
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-black">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              {...register("password")}
            
              className="focus:outline-none px-3 py-2 border rounded-md w-full"
            />  
            {<span className='text-sm text-red-400'>{errors.password?.message} </span> }
            <br />
            <a href="#" className="text-sm text-red-400 text-right w-full ">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="submit-btn font-semibold hover:bg-green-900 text-white px-4 py-2 rounded-md"
          >
            Login
          </button>
          <p className="text-zinc-700">
            Don't have an account?{' '}
            <Link to="/signup" className="text-red-500">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
