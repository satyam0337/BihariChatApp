import React from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import satyamimage from "../assets/satyamimage2.png"
import resume from "../assets/resume.pdf"
import line from "../assets/line.png"
import Contact from "./Contact";
const Home = () => {
  return (
    <>
    <div  
      name="home"
      className="h-screen w-full  bg-sky-600 home"
    >
      <div style={{height:"100"}} className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden mt-10 mx-10">
          <img
            src={satyamimage}
            alt="profile"
            className="rounded-full mx-auto w-2/3 md:w-full filter: brightness(300);"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm  <span className="text-black" >Satyam Kumar</span> <p className="">Full Stack Web Developer</p>
          </h2>
          <p className="text-black	 font-bold text-xl  py-4 max-w-md">
            I love to build websites and desgining software.
            I love to work on web application using technologies like
            React, and Redux.
          </p>
          
        

              <a
                href={Contact}
                smooth
                duration={500}
                className="group text-white  w-fit px-6 py-3 my-2 flex items-center rounded-md m-auto  bg-black cursor-pointer">
              Contact Me
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
                </a>

           
        
       
        </div>
        <div className="big-screen">
          <img 
            src={satyamimage}
            alt="profile"
            className="p-10 w-100 h-90 rounded-full"
          />
        </div>
        
      </div>
      

    </div>
    </>
  );
};

export default Home;
