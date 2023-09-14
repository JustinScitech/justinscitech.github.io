import React, { Suspense, useEffect, useState, useRef} from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { styles } from '../styles';
import Model from './Model'
import {motion, useAnimation, useTransform, useScroll} from 'framer-motion';
import animebg from '../assets/animebg.png';
import animebgtrees from '../assets/animebgtrees.png';

const ThreeDim = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    const controls = useAnimation();

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

    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ["start start", "end start"],
    });


    const textY = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);

    return (
        <section ref={ref} className="relative w-full h-screen bg-center bg-cover" style={{ backgroundImage: `url(${animebg})` }}>
        <div 
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
        </div>

            <div className={`${styles.paddingX} absolute inset-0 mt-70 sm:mt-70 md:mt-120 lg:mt-120 mx-auto flex flex-col items-center gap-5`}>

            <motion.div
  animate={{ opacity: 1 }}
  transition={{ delay: 1, from: 0}}>
                <motion.h1 style = {{y: textY}} className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
                    <span className="gradient bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Hello, I'm Justin!
                    </span>
                </motion.h1>
                </motion.div>
                <motion.div
  animate={{ opacity: 1 }}
  transition={{ delay: 2, from: 0}}>
                <motion.h2 style = {{y: textY}} className="text-4xl font-medium text-white mt-10 text-center">
                    I'm an aspiring Computer Engineering student
                </motion.h2>
                </motion.div>
                <div className="flex flex-col justify-center items-center mt-5" style={{ width: dimensions.width/2, height: dimensions.height/2, margin: '0', zIndex: 2}}>

                    <Canvas shadows camera={{ position: [50, 3, 5], fov: 40 }} gl={{ preserveDrawingBuffer: true }}>
                        <OrbitControls
                            enableZoom={false}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 2}
                        />
                        <Model url='/little_chestnut/chestnut.gltf' isMobile={isMobile} />
                    </Canvas>

                </div>
                
            </div>

        </section>
    );
}

export default ThreeDim;
