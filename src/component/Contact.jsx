import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"    
import toast from 'react-hot-toast'

const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo ={
            name:data.fullname,
            email:data.email,
            message:data.message
        }
        try{
            await axios.post("https://getform.io/f/pamqjpya", userInfo)
            toast.success("your message has been send")
        } catch{
            console.log(errors)
            toast.error("something went wrong")
        }
      }

  return (
    <>
        <div name="Contact" className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <h1 className='text-3xl font-bold mb-5'>Contact me</h1>
            <p>Please fill out the form below to contact me</p>
            <div className='flex flex-col items-center justify-center'>
                <form 
                onSubmit={handleSubmit(onSubmit)}
                // action='https://getform.io/f/pamqjpya' 
                // method='POST'
                className=' bg-slate-200 w-96 px-10 py-6 rounded-lg'>
                    <h1 className='text-xl font-semibold pb-5'>Send Your Message</h1>
                    <div className='flex flex-col mb-4'>
                        <label className=' text-gray-700'>Full Name</label>
                        <input 
                        {...register("fullname", { required: true })}
                        name='fullname' type='text' placeholder='Enter your fullname' className=' rounded-lg shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                        {errors.fullname && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className=' text-gray-700'>Email Address</label>
                        <input 
                        {...register("email", { required: true })}
                        name='email' type='email' placeholder='Enter your email address' className=' rounded-lg shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className=' text-gray-700'>Message</label>
                        <textarea
                         {...register("message", { required: true })}
                         name='message' type='text' placeholder='Enter your query' className=' rounded-lg shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                         {errors.message && <span>This field is required</span>}
                    </div>
                    <button type='submit' className=' bg-black text-white px-4 py-2 font-semibold rounded-xl hover:bg-slate-700 duration-300'>Send</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact
