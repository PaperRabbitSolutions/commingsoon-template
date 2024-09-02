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
            
            <div className="w-[25rem] h-[25rem] md:w-[40rem] md:h-[40rem] lg:w-[50rem] lg:h-[50rem] rotate-animated  bg-opacity-40 bg-black shadow-xl relative  flex flex-col justify-baseline items-center rotate-[270deg] shadow-white rounded-full " >  </div>
            <img src={star} alt="" className=" absolute left-[86%] lg:left-[64.15%] blinking-dot  shadow-white rounded-full" />

            <div className="w-screen h-[80%] md:h-[50%] flex justify-center md:justify-baseline items-center top-[25%] md:top-[42%] lg:top-[50%]  text-white absolute z-50 bg-cover flex-col bg-center bg-no-repeat bg-transparent  rounded-2xl" style={{ backgroundImage: `url("${layer}")` }} >
                <img src={derlin} alt="" className=" z-50 md:w-[10rem] w-[8rem] lg:w-[14rem] absolute top-[20%] md:top-[-10%] lg:top-[-35%]" />

                <h2 className=" md:text-4xl lg:text-6xl font-semibold font-[cinzel] mt-40 md:mt-2 lg:mt-32">Coming Soon</h2>
                <p className="text-sm md:text-lg lg:text-xl font-[satisfy]">Catch Your stars</p>
                <p></p>
                <form action="" className="  w-[90%] md:w-2/3 lg:w-1/4 bg-transparent px-2 mt-6 lg:mt-12 py-2 backdrop-blur flex rounded-lg gap-2 justify-center items-center">
                    <input type="text" placeholder="Enter your Email-Id" className="py-3 px-3 w-[70%] placeholder:text-white outline-none hover:bg-opacity-50  bg-black bg-opacity-30 text-white- rounded-l-md" />
                    <button className=" px-3 py-3 w-[30%] rounded-r-md  font-semibold  bg-blue-900 bg-opacity-70 hover:bg-opacity-50 "> Subscribe</button>

                </form>
                <div className="my-4 flex md:gap-6 gap-4  flex-col lg:gap-4 flex-wrap justify-center items-center w-screen  text-white  ">
                    <p className="text-lg">@derrlinstudios</p>
                    <div className="flex text-2xl md:text-4xl lg:text-2xl gap-4">
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

    )
}
export default Derlin