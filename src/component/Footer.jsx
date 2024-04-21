import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';


const Footer = () => {
  return (
    <>
        <hr/>
        <footer className='py-12  bg-slate-200'>
            <div className='mx-w-screen-2xl container mx-auto px-4 md:px-20'>
            
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex space-x-4'>
                        <FaFacebook size={24}/>
                        <FaSquareTwitter size={24}/>
                        <RiInstagramFill size={24}/>
                        <BsLinkedin size={24}/>
                    </div>
                    <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                        <p className='text-sm'> &copy; 2024 R&R. All rights reserved. </p>
                        <p className='text-sm'> Supportive Partner Rahul Raj </p>
                    </div>
                </div>
            
            </div>
        </footer>
    </>
  )
}

export default Footer
