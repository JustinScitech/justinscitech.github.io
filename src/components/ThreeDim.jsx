import React, { Suspense, useEffect, useState, useRef} from 'react';
//import { Canvas, useThree } from '@react-three/fiber';
//import { OrbitControls, useGLTF } from '@react-three/drei';
import { styles } from '../styles';
//import Model from './Model'
import {motion, useAnimation, useTransform, useScroll} from 'framer-motion';
import animebg from '../assets/animebg.png';
import animebgtrees from '../assets/animebgtrees.png';
import AnimatedText from './AnimatedText';
import { FaArrowDown } from 'react-icons/fa';
const ThreeDim = () => {
    const [isMobile, setIsMobile] = useState(false);
    const roles = ["Computer Engineering student", "Software developer", "Youtuber", "Animator", "Video editor"];
    const[currentRole, setCurrentRole] = useState(0);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    const textVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };
    const controls = useAnimation();
    const floatVariants = {
        floatUp: {
            y: -10,
            opacity: 0
        },
        floatDown: {
            y: 10,
            opacity: 1
        }
    };
    
      
    
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, [])

    useEffect(() => {
      const interval = setInterval(()=> {
        setCurrentRole((prevIndex) => (prevIndex + 1) % roles.length);
      }, 3000);
      return () => {
        clearInterval(interval);
      }
    }, [])
    
    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        // , bacgkroundPosition:'center -50px' , backgroundSize: '100%', backgroundRepeat: 'no-repeat'
        <section className="relative w-full h-screen bg-center bg-cover" style={{ backgroundImage: `url(${animebg})`}}> 
        {/* <div 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${animebgtrees})`,
                zIndex: 1,
                backgroundSize: 'cover',
            }}>
        </div> */}

            <div className={`${styles.paddingX} absolute inset-0 mt-70 sm:mt-70 md:mt-120 lg:mt-120 mx-auto flex flex-col items-center gap-1`}>

   
                    <AnimatedText sentence = "Hello, I'm Justin!" styling = "text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold gradient bg-gradient-to-t from-white to-gray-300 bg-clip-text text-transparent"/>

                    <AnimatedText sentence={`I'm an aspiring`} styling = "p-1 text-4xl font-medium text-white mt-10 text-center"/>
                    <motion.span 
            key={currentRole}
            className='text-4xl font-medium text-white text-center'
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={textVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {roles[currentRole]}
        </motion.span>
        <motion.div 
    variants={floatVariants}
    initial="floatUp"
    animate="floatDown"
    exit="floatUp"
    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", repeatType: 'reverse' }}
    className="mt-4"
>
    <FaArrowDown size={40} /> 
</motion.div>
                {/* <div className="flex flex-col justify-center items-center mt-5" style={{ width: dimensions.width/2, height: dimensions.height/2, margin: '0', zIndex: 2}}>

                    <Canvas shadows camera={{ position: [50, 3, 5], fov: 40 }} gl={{ preserveDrawingBuffer: true }}>
                        <OrbitControls
                            enableZoom={false}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 2}
                        />
                        <Model url='/little_chestnut/chestnut.gltf' isMobile={isMobile} />
                    </Canvas>

                </div>
                 */}
            </div>

        </section>
    );
}

export default ThreeDim;
