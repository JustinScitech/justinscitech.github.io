import React, { useRef } from 'react';
import { Element } from 'react-scroll';
import { useEffect, useState } from 'react';

const Contact = () => {
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <Element name="contact">
            <section className="relative w-full mx-auto bg-primary rounded" style={{ margin: 0, padding: 0 }}>

                <div >
                    <div className="items-center justify-center">
                        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white z-0 bg-transparent text-center">Feel free to <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent z-0">
                            reach out!
                        </span></h1>
                        <div className="flex justify-center">
                            <p className="pt-4 text-2xl text-white text-center place-content-center max-w-4xl">
                                I'm always looking for new ways to apply my learning and challenge my own abilities. Feel free to send me an email and I'll respond as soon as possible.
                            </p>
                        </div>
                        <div className="flex justify-center items-center mt-8">
                            <a
                                href="mailto:lau.c.justin@gmail.com"
                                className="px-6 py-3 text-white font-bold text-xl bg-blue-500 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
                            >
                                Contact Me

                            </a>

                        </div>
                        <div className="pt-20">
                        </div>
                    </div>
                </div>
            </section >
        </Element >
    );
}

export default Contact;
