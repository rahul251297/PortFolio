import React from 'react'
import { useState } from 'react';
import pic from "../../public/image/21004063.jpg"
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { Link } from 'react-scroll';
const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const navItem = [
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Project"
        },
        {
            id:4,
            text:"Contact"
        }
    ]

  return (
    <>
        <div className=' mx-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
            <div className='flex justify-between items-center h-16'>
                <div className='flex space-x-2'>
                    <img src={pic} className=' h-12 w-12 rounded-full' alt=''/>
                    <h1 className=' font-semibold text-xl cursor-pointer'>Rahu<span className=' text-green-500 text-2xl'>l</span>
                    <p className='text-sm'>Front End Developer</p>
                    </h1>
                </div>

                {/* Desktop Device */}

                <div>
                    <ul className=' hidden md:flex space-x-8'>
                        {
                            navItem.map(({id,text})=>(
                                <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                <Link
                                to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'
                                >
                                {text}
                                </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                       {menu ? <GrFormClose size={24} />  : <GiHamburgerMenu size={24}/>}
                    </div>
                </div>
            </div>

            {/*Mobile Navbar*/}

            {
                menu && (
                    <div className=' bg-white'>
                    <ul className=' md:hidden flex flex-col h-screen justify-center items-center space-y-3'>
                        {
                            navItem.map(({id,text})=>(
                                <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>
                                <Link
                                onClick={()=>setMenu(!menu)}
                                to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'
                                >
                                    {text}
                                </Link>
                                </li>
                            ))
                        }
                    </ul>
            </div>
                )
            }
            
            
        </div>
    </>
  )
}

export default Navbar
