import React from 'react';
import { Tilt } from 'react-tilt';
import { useSpring, animated } from 'react-spring';
import git from '../assets/git.png';
import mongodb from '../assets/mongodb.png';
import nodejs from '../assets/nodejs.png';
import reactjs from '../assets/reactjs.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import '../App.css';
import {motion} from 'framer-motion';


const Skills = () => {
    const styles = useSpring({
        loop: true,
        to: [
            { opacity: 1, y: 0 },
            { opacity: 0.5, y: -20 },
            { opacity: 1, y: 0 }
        ],
        from: { opacity: 1, y: 0 },
        config: { duration: 2000 },
    });



    const bounce = {
        whileHover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } }
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
        <>
        <div className='p-20 lg:p-0 sm:p-0 sm:pt-20'></div>
        <div className='p-20 lg:p-0 sm:p-0'></div>
        <div className='p-20 lg:p-0 sm:p-0'></div>
            <section className= "p-20 sm:p-0">
              <motion.div className = "pt-20 lg:pt-0" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <h1 className="pt-20 sm:pt-0 text-6xl font-bold text-white text-center">
                  My
                  <span> </span>
                  <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                    Skills
                  </span>
                </h1>
          
                <div className="flex justify-center">
                  <p className="pt-8 text-2xl text-white text-center place-content-center max-w-4xl">
                    These are some skills that I've learned from working in previous <span></span>
                    <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                      engineering internships
                    </span> <span></span>
                    and producing <span></span>
                    <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                      technical side projects
                    </span>.
                  </p>
                </div>
              </motion.div>
            </section>
    
            <section className='mb-[-3]'>
                <div className="sm:pt-20 lg:pt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 justify-items-center bg-primary">
                    {[git, mongodb, nodejs, reactjs, html, css].map((src, i) => (
                        <motion.div
                        key={i} 
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
                            <animated.img style={styles} className="skill-img w-24 h-24 object-contain z-0" src={src} alt="" />
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
    
}

export default Skills
