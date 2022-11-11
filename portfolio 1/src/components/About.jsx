// import React from "react";
// import satyamimage2 from "../assets/satyamb.png"
// const About = () => {
//   return (
//     <div
//       name="about"
//       className="w-full h-screen bg-[#ffff] text-white about "
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full bg-black bg-opacity-20">
//         <div className="pb-8 w-full flex justify-center flex-col">
//           <p className="text-center text-4xl font-bold inline border-b-4 border-gray-500 text-black">
//             About Me
//           </p>
//           <p className="mt-10  text-lg text-black"> Why Choose Me?</p>
//         </div>


//         <div className="   flex w-full h-full bg-[#0284c7] ">
//           <div className='h-full w-1/2 hidden md:flex'> <img className="h-full w-full" src={satyamimage2} /> </div>
//           <div className="w-1/2 flex flex-col mb-5"> <p className="m-auto leading-6 text-sm ">A Full stack web developer and well-versed in MERN stack with Redux, along with a knack of building applications with utmost efficiency. As much as I am passionate about coding, I am also a problem solver, a quick learner with a flexible mindset. I would like to work in an organization that offers opportunities to enhance my professional skills and help me grow and develop alongwith it.
//             Here are a Few Highlights:</p>

//             <div className=" text-sm flex flex-col justify-item-start"> <h1 className="mb-1.5  text-base font-bold">Here are a Few Highlights: </h1>
//               <li> Full Stack web develope</li>
//               <li> Interactive Front End as per the design</li>
//               <li> Specialized in MERN stack</li>
//               <li>Redux for State Mnanagement </li>
//               <li>Building REST API</li>
//               <li> Managing database</li>


//             </div>
//              <div className="flex justify-end mr-10" > <button className="bg-[#0ea5e9] px-8 py-4 rounded-full rounded-br-lg border-4 hover:border-indigo-200 hover:border-t-indigo-500"> Hire Me <span></span></button> </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default About;



import React from "react";
import ScreenHeading from "./screenHeading";
import resume from "../assets/resume.pdf"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import "../css/About.css";

const About = (props) => {
 
  const SCREEN_CONSTSANTS = {
    description:
      "A Full stack web developer and well-versed in MERN stack with Redux, along with a knack of building applications with utmost efficiency. As much as I am passionate about coding, I am also a problem solver, a quick learner with a flexible mindset. I would like to work in an organization that offers opportunities to enhance my professional skills and help me grow and develop alongwith it.",
    highlights: {
      bullets: [
        "Full Stack web developer ",
        "Interactive Front End as per the design",
        "Specialized in MERN stack",
        "Redux for State Mnanagement",
        "Building REST API",
        "Managing database",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div 
      className="about-me-container screen-container fade-in  about "
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card mb-2">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
           


              <a href={resume} download>
         

              <div
                to="/"
                smooth
                duration={500}
                className="group text-white  w-fit px-6 py-3 my-2 flex items-center rounded-md m-auto  bg-black cursor-pointer">
                Resume 
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </div>

       
          </a>


           
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;