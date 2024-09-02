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
        <div className=" max-w-[1400px] w-full flex flex-col justify-center items-center">

            <div className="w-[22rem] h-[22rem] md:w-[40rem] md:h-[40rem] lg:w-[50rem] lg:h-[50rem] rotate-animated  bg-opacity-40 bg-black shadow-xl relative  flex flex-col justify-baseline items-center rotate-[270deg] shadow-white rounded-full " >  </div>

            <img src={derlin} alt="" className=" z-50 md:w-[10rem] w-[6rem] lg:w-[14rem] absolute top-[39%] md:top-[35%] lg:top-[25%]" />
            <div className="w-screen h-[80%] md:h-[70%] flex justify-center md:justify-baseline items-center top-[13%] md:top-[20%] lg:top-[28%]  text-white absolute z-50 bg-cover f bg-center bg-no-repeat bg-transparent  rounded-2xl" style={{ backgroundImage: `url("${layer}")` }} >
            <img src={star} alt="" className=" absolute  left-[84.6%] lg:left-[68.85%] blinking-dot  shadow-white rounded-full" />

                <div className="flex flex-col justify-center items-center absolute top-[52%] md:top-[50%] lg:top-[40%]"> 
                <h2 className="text-2xl  md:text-4xl lg:text-6xl font-semibold font-[cinzel] mt-4">Coming Soon</h2>
                <p className="text-sm md:text-base lg:text-xl font-[satisfy]">Catch Your stars</p>
                <p></p>
                <form action="" className="  w-[75%] md:flex-row flex-col md:w-2/3 lg:w-1/4 bg-transparent md:px-2 px-1 mt-6 lg:mt-12 py-2 backdrop-blur flex rounded-lg gap-2 justify-center items-center">
                    <input type="text" placeholder="Enter your Email-Id" className=" py-2  lg:py-3 px-3 w-[95%] placeholder:text-white outline-none hover:bg-opacity-50  bg-black bg-opacity-30 text-white rounded-lg md:rounded-l-md" />
                    <button className=" px-3 py-2  lg:py-3 w-[60%] md:w-[30%] rounded-lg md:rounded-r-md  font-semibold text-sm md:text-base  bg-blue-900 bg-opacity-70 hover:bg-opacity-50 "> Subscribe</button>

                </form>
                <div className="my-2 flex md:gap-4 gap-2  flex-col lg:gap-4 flex-wrap justify-center items-center w-screen  text-white  ">
                    <p className="md:text-base text-sm lg:text-lg ">@derrlinstudios</p>
                    <div className="flex text-lg md:text-4xl lg:text-2xl gap-4">
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
            </div>

        </div>

    )
}
export default Derlin