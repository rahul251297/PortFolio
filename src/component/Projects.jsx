import React from 'react'
import reactLogo from "../../public/image/reactLogo.png"

const Projects = () => {

    const cardItem = [
        {
            id:1,
            logo:reactLogo,
            name:"Java"
        },
        {
            id:2,
            logo:reactLogo,
            name:"Java"
        },
        {
            id:3,
            logo:reactLogo,
            name:"Java"
        },
        {
            id:4,
            logo:reactLogo,
            name:"Java"
        },
        {
            id:5,
            logo:reactLogo,
            name:"Java"
        },
    ]

  return (
   <>
        <div name="Project" className='mx-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Projects</h1>
                <span className='underline font-semibold'>Fetured Project</span>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-4 gap-4 my-5'>
               {
                cardItem.map(({id, logo, name}) =>(
                    <div key={id} className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-2 cursor-pointer hover:scale-110 duration-300'>
                        <img src={logo} className=' w-[120px] h-[120px] p-2 rounded-full border-[2px]'/>
                        <h1 className=' px-2 font-bold text-xl mb-2'>{name}</h1>
                        <p className=' text-gray-700 px-2'>This is very very best project....click to explor this</p>
                        <div className='px-4 py-2 space-x-3 justify-around'>
                            <button className='bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-2 rounded'>Live Preview</button>
                            <button className='bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-2 rounded'>Source Code</button>
                        </div>
                    </div>
                ))
               }
            </div>
        </div>
   </>
  )
}

export default Projects
