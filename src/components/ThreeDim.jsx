import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { styles } from '../styles';
import Model from './Model'

const ThreeDim = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

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

    return (
        <section className="relative w-full h-screen mx-auto bg-transparent" style={{ margin: 0, padding: 0 }}>

            <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-col items-center gap-5`}>
                <h1 className="text-8xl font-bold text-white">
                    Hello, I'm
                    <span> </span>
                    <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                        Justin!
                    </span>
                </h1>
                <h2 className="text-4xl font-medium text-white mt-10">
                    I'm an aspiring Computer Engineering student
                </h2>
                <div className="flex flex-col justify-center items-center mt-5" style={{ width: dimensions.width, height: dimensions.height, margin: '0' }}>
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
