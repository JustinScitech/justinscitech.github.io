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

    return (
        <section>
            <div className="pt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center bg-primary">
                {[git, mongodb, nodejs, reactjs, html, css].map((src, i) => (
                    <Tilt className="m-4" options={{
                        reverse: false,  // reverse the tilt direction
                        max: 35,     // max tilt rotation (degrees)
                        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
                        scale: 1.01,    // 2 = 200%, 1.5 = 150%, etc..
                        speed: 2000,   // Speed of the enter/exit transition
                        transition: true,   // Set a transition on enter/exit.
                        axis: null,   // What axis should be disabled. Can be X or Y.
                        reset: true,    // If the tilt effect has to be reset on exit.
                        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
                    }} key={i}>
                        <animated.img style={styles} className="skill-img w-24 h-24 object-contain z-0" src={src} alt="" />
                    </Tilt>
                ))}
            </div>
        </section>
    );
}

export default Skills
