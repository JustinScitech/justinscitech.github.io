import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import { Element } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import project1 from '../assets/intellipaint.png';
import project2 from '../assets/facelock.jpg';
import project3 from '../assets/readright.png';
import project4 from '../assets/jjk.png';
import '../App.css';



const Projects = () => {
    const animation = useSpring({
        from: { opacity: 0.5, marginTop: 0 },
        to: async (next) => {
            while (0.05) {
                await next({ opacity: 1 });
                await next({ opacity: 0.7 });
                await next({ opacity: 1 });
            }
        },
        config: { duration: 2000 },
    });
    const bounce = {
        whileHover: { scale: 1.025, transition: { type: 'spring', stiffness: 300 } }
      };

      const slideInFromBottom = {
        hidden: { y: 100, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: 30,
            damping: 20
          }
        }
      };

    return (
        <Element name="projects" className='relative lg:-top-20'>
            <h1 className="sm:pt-10 lg:pt-0 text-6xl font-bold text-white text-center ">
                See some of my
                <span> </span>
                <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                    projects!
                </span><> </>
                Come take a look!
            </h1>
            <div className="flex justify-center">
                <p className="pt-4 text-2xl text-white text-center place-content-center max-w-4xl">
                    Applying innovation to imagination.
                </p>
            </div>
            <div className="pt-13 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-x-0 justify-items-center mx-auto max-w-screen-lg">

            <motion.div
          
                    m={4} 
                    p={4} 
                    borderRadius="lg" 
                    overflow="hidden" 
                    boxShadow="lg"
                    initial="hidden"
                    animate="visible"
                    align="center"
                    variants={slideInFromBottom}
                    {...bounce}
                >
                    <div className="mt-6 w-full md:w-96 block rounded-lg shadow-lg overflow-hidden mx-0">
                        <a href="https://github.com/JustinScitech/IntelliPaint" target="_blank" rel="noopener noreferrer">
                            <div className="relative h-56">
                                <img src={project1} alt="IntelliPaint" className="object-cover w-full h-full" />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">IntelliPaint</div>
                                <p className="text-gray-700 text-base">
                                    IntelliPaint is an AI art generation site using the OpenAI API to make art from text prompts.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded">
                                    Read More
                                </button>
                            </div>
                        </a>
                    </div>
                </motion.div>
                <motion.div
          
                    m={4} 
                    p={4} 
                    borderRadius="lg" 
                    overflow="hidden" 
                    boxShadow="lg"
                    initial="hidden"
                    animate="visible"
                    align="center"
                    variants={slideInFromBottom}
                    {...bounce}
                >

                    <div className="mt-6 w-full md:w-96 block rounded-lg shadow-lg overflow-hidden mx-0">
                        <a href="https://github.com/Nadish-Madadi/FaceLock" target="_blank" rel="noopener noreferrer">
                            <div className="relative h-56">
                                <img src={project2} alt="FaceLock" className="object-cover w-full h-full" />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">FaceLock</div>
                                <p className="text-gray-700 text-base">
                                    FaceLock uses OpenCV and machine learning for password management using face recognition.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded">
                                    Read More
                                </button>
                            </div>
                        </a>
                    </div>
                    </motion.div>
                    <motion.div
  
                    m={4} 
                    p={4} 
                    borderRadius="lg" 
                    overflow="hidden" 
                    boxShadow="lg"
                    initial="hidden"
                    animate="visible"
                    align="center"
                    variants={slideInFromBottom}
                    {...bounce}
                >
                
                    <div className="mt-6 w-full md:w-96 block rounded-lg shadow-lg overflow-hidden mx-0">
                        <a href="https://github.com/JustinScitech/ReadRight" target="_blank" rel="noopener noreferrer">
                            <div className="relative h-56">
                                <img src={project3} alt="ReadRight" className="object-cover w-full h-full" />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">ReadRight</div>
                                <p className="text-gray-700 text-base">
                                    ReadRight aims to help people with dyslexia and reading disabilities to read more effectively. This won best the project award for Hack the 6ix 2023!
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded">
                                    Read More
                                </button>
                            </div>
                        </a>
                    </div></motion.div>
                    <motion.div

                    m={4} 
                    p={4} 
                    borderRadius="lg" 
                    overflow="hidden" 
                    boxShadow="lg"
                    initial="hidden"
                    animate="visible"
                    align="center"
                    variants={slideInFromBottom}
                    {...bounce}
                >
                    <div className="mt-6 w-full md:w-96 block rounded-lg shadow-lg overflow-hidden mx-0">
                        <a href="https://www.linkedin.com/company/legionstudios/" target="_blank" rel="noopener noreferrer">
                            <div className="relative h-56">
                                <img src={project4} alt="IntelliPaint" className="object-cover w-full h-full" />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">JJK King Of Curses</div>
                                <p className="text-gray-700 text-base">
                                    JJK is a combat style 3D game that allows players to enjoy an immersive mystical adventure world set in Japan. This has 100k+ plays and 1000+ sales!
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded">
                                    Read More
                                </button>
                            </div>
                        </a>
                    </div>
                    </motion.div>
            </div>
        </Element>
    );
};

export default Projects;

