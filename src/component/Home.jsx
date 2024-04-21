import pic from "../../public/image/21004063.jpg"

import { ReactTyped } from "react-typed";

import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiReact } from "react-icons/si";

const Home = () => {
    return(
        <>
            <div name="Home" className="mx-w-screen-2xl container mx-auto px-4 md:px-20 py-20">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                        <span>Welcome to My Feed</span>
                        <div className="flex space-x-1 text-2xl md:text-4xl">
                            <h1>Hello I'm a</h1>
                            {/* <span className=" text-red-700 font-bold">Developer</span> */}
                            <ReactTyped
                                className=" text-red-700 font-bold"
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={40}
                                loop={true}
                            />
                        </div>
                        <br/>
                        <p className="text-sm md:text-md text-justify"> 
                            Welcome to Rahul's portfolio website! As a skilled web developer, Rahul combines creativity with technical expertise to craft captivating online experiences. Explore Rahul's showcase of projects, highlighting proficiency in HTML, CSS, JavaScript, and more. With a commitment to innovation and excellence, Rahul delivers high-quality solutions that exceed expectations. Join me on a journey through the world of web development and discover the possibilities of imagination meeting code.
                        </p>
                        <br/>
                        <div className="flex flex-col md:flex-row justify-between space-y-6 items-center text-center">
                            <div className="space-y-2">
                                <h1 className="font-bold">Social Profile</h1>
                                <ul className="flex space-x-5">
                                    <li> <a href="https://www.facebook.com/" target="_blank"><BsLinkedin className="text-2xl cursor-pointer" /></a></li>
                                    <li> <a href="https://www.facebook.com/" target="_blank"><BsTwitterX className="text-2xl cursor-pointer" /></a></li>
                                    <li> <a href="https://www.facebook.com/" target="_blank"><BsFacebook className="text-2xl cursor-pointer" /></a></li>
                                    <li> <a href="https://www.facebook.com/" target="_blank"><BsYoutube className="text-2xl cursor-pointer"/></a></li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h1 className="font-bold">Working On</h1>
                                <ul className="flex space-x-5">
                                    <SiExpress  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full"/>
                                    <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                                    <FaNodeJs  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full"/>
                                    <SiReact  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full"/>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:ml-48 md:mt-20 order-1">
                        <img src={pic} className=" rounded-full md:w-[500px] md:h-[500px]" alt=""></img>
                    </div>
                </div>
            </div>  
            <hr/>
        </>
    )
}
export default Home;