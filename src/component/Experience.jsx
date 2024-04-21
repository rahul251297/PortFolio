import React from 'react'
import logo from '../../public/image/reactLogo.png';

const Experience = () => {

    const mylogo = [
        {
            id:1,
            img:logo
        },
        {
            id:2,
            img:logo
        },
        {
            id:3,
            img:logo
        },
        {
            id:4,
            img:logo
        },
        {
            id:5,
            img:logo
        },
        {
            id:6,
            img:logo
        },
        {
            id:7,
            img:logo
        },
    ]

  return (
    <>
        <div className='mx-w-screen-2xl container mx-auto px-4 md:px-20 mt-20'>
            <h1 className='text-3xl font-bold mb-5'>Experience</h1>
            <span className=''>I have more than 2 year experience in below tech</span>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-4 my-6 '>
                {
                    mylogo.map(({id, img})=>(
                        <div key={id} className=' hover:scale-110 duration-100'>
                            <img src={img} className='w-[150px] h-[150px] border-[2px] rounded-full'/>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Experience;