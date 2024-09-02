import React from "react";
import layer from '../assets/Layer 1.png'
import derlin from '../assets/Derlin.png'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaPinterestSquare, FaQuora } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import star from '../assets/star.png'
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

function Derlin() {
    return (
        <div className="  w-full flex flex-col justify-center items-center">

            <div className="w-[22rem] h-[22rem] md:w-[40rem] md:h-[40rem] lg:w-[50rem] lg:h-[50rem]   bg-transparent  relative  flex  justify-baseline items-center rotate-[180deg] shadow-white rounded-full ">
                <div className="w-[22rem] h-[22rem] md:w-[40rem] md:h-[40rem] lg:w-[50rem] lg:h-[50rem] rotate-animated  bg-opacity-40  bg-black shadow-xl   flex flex-col justify-baseline items-center rotate-[45deg] shadow-white rounded-full " >  </div>
                <img src={star} alt="" className="  absolute  lg:left-[-7%] md:left-[-9%] left-[-16%] bottom-[32%] md:bottom-[40%] lg:bottom-[42%] z-[999]  blinking-dot  shadow-white rounded-full" />

            </div>


            <img src={layer} className="object-cover w-screen object-center fixed z-40 h-[100vh] " alt="" />
            <div className="flex flex-col z-50 text-white justify-center items-center absolute top-[40%] md:top-[38%] lg:top-[30%]">
                <img src={derlin} alt="" className=" md:w-[8rem] w-[6rem] lg:w-[10rem]" />
                <h2 className="text-2xl  md:text-3xl lg:text-4xl font-semibold font-[cinzel] mt-2">Coming Soon</h2>
                <p className="text-sm md:text-base lg:text-lg font-[cinzel]">Catch Your stars</p>
                <p></p>
                <form action="" className="  w-[75%] md:flex-row flex-col md:w-2/3 lg:w-1/3 bg-transparent md:px-2 px-1 mt-6 lg:mt-12 py-2  flex rounded-lg gap-2 justify-center items-center">
                    <input type="text" placeholder="Enter your Email-Id" className="md:text-sm text-xs text-center md:text-left lg:text-base py-2 backdrop-blur lg:py-3 px-2 lg:px-3 w-[90%] placeholder:text-white outline-none hover:bg-opacity-50  bg-black bg-opacity-30 text-white rounded-lg md:rounded-l-md" />
                    <button className=" px-3 py-2  lg:py-3 w-[30%] md:w-[30%] rounded-lg md:rounded-r-md backdrop-blur font-semibold lg:text-base text-xs md:text-sm  bg-blue-900 bg-opacity-50 hover:bg-opacity-30  "> Subscribe</button>

                </form>
                <div className="my-2 flex md:gap-4 gap-2  flex-col lg:gap-4 flex-wrap justify-center items-center w-screen   text-white  ">
                    <p className="md:text-base text-sm lg:text-base font-[cinzel] ">@derrlinstudios</p>
                    <div className="flex text-lg md:text-xl lg:text-2xl gap-4">
                        <a href="https://www.facebook.com/" target="_blank" className="cursor-pointer hover:text-blue-900 hover:scale-150" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://www.instagram.com/" target="_blank" className="cursor-pointer hover:text-blue-900 hover:scale-150" rel="noopener noreferrer"><FaInstagramSquare /></a>
                        <a href="https://www.youtube.com/" target="_blank" className="cursor-pointer hover:text-blue-900 hover:scale-150" rel="noopener noreferrer"><IoLogoYoutube /></a>
                        <a href="https://linkedin.com/company/doeeyeds" target="_blank" className="cursor-pointer hover:text-blue-900 hover:scale-150" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://twitter.com/" target="_blank" className="cursor-pointer hover:text-blue-900 hover:scale-150" rel="noopener noreferrer"><FaSquareXTwitter /></a>
                        <a href="https://www.pinterest.com/" target="_blank" className="cursor-pointer hover:text-blue-900 hover:scale-150" rel="noopener noreferrer"><FaPinterestSquare /></a>
                        <a href="https://www.pinterest.com/" target="_blank" className="cursor-pointer hover:text-blue-900 hover:scale-150" rel="noopener noreferrer"><FaQuora /></a>
                        <a href="https://www.pinterest.com/" target="_blank" className="cursor-pointer hover:text-blue-900 hover:scale-150" rel="noopener noreferrer"><SiGooglemaps /></a>
                    </div>
                </div>
            </div>
            <div className="w-screen  flex justify-center  items-center text-white  z-50 bg-cover f bg-center bg-no-repeat bg-transparent  rounded-2xl"  >

            </div>


        </div>

    )
}
export default Derlin