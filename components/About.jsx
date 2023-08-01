import React from "react";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import '../App.css';
import { Element } from 'react-scroll';
import WebIcon from '@material-ui/icons/Web';
import MemoryIcon from '@material-ui/icons/Memory';
import CodeIcon from '@material-ui/icons/Code';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import resume from '../assets/JustinResume.pdf';
import justin from '../assets/justin.jpg';
function About() {
  const cards = [
    { name: "Web Development", icon: <WebIcon fontSize="large" /> },
    { name: "Hardware development", icon: <MemoryIcon fontSize="large" /> },
    { name: "Backend development", icon: <CodeIcon fontSize="large" /> },
    { name: "Game development", icon: <VideogameAssetIcon fontSize="large" /> }
  ];

  return (
    <Element name="about">
      <section className="px-20 pt-20 bg-primary relative w-full h-screen mx-auto flex md:flex-row flex-col items-center justify-between overflow-auto">


        <div>
          <h1 className="text-6xl font-bold text-white">
            A little bit
            <span> </span>
            <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent z-0">
              about me.
            </span>
          </h1>
          <p className="pt-8 text-2xl text-white whitespace-normal w-full md:w-4/6">
            I am an avid learner studying Computer Engineering at the University of Waterloo. I'm interested in the realm of <></>
            <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              software development
            </span> <></>
            and firmware development. I'm especially excited about virtual reality and the <></>
            <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              metaverse
            </span>. I'm also passionate about learning new languages and frameworks!
          </p>
          <h1 className="pt-8 text-2xl font-light text-white text-left">
            <a href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-white inline-block text-center py-4 px-4 hover:translate-y-[-8px] transition-transform duration-200">
              See my resume
            </a>
          </h1>
        </div>
        <div className="flex-shrink-0 w-2/6">
          <img className="w-full h-auto object-cover project-img-rounded" src={justin} alt="Justin" />
        </div>
      </section>

      <section>
        <h1 className="pt-20 text-6xl font-bold text-white text-center">
          My
          <span> </span>
          <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>
        <div className="flex justify-center">
          <p className="pt-8 text-2xl text-white text-center place-content-center max-w-4xl">
            Have a look at some skills that I've acquired from working in previous <></>
            <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              engineering internships
            </span> <></>
            and <></>
            <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">projects</span>.
          </p>
        </div>

        <div className="pt-10 flex grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 flex-wrap justify-center gap-5">
          {cards.map((card, index) => {
            return (
              <Tilt key={index} className="m-4" options={{
                reverse: false,  // reverse the tilt direction
                max: 35,     // max tilt rotation (degrees)
                perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
                scale: 1.01,    // 2 = 200%, 1.5 = 150%, etc..
                speed: 2000,   // Speed of the enter/exit transition
                transition: true,   // Set a transition on enter/exit.
                axis: null,   // What axis should be disabled. Can be X or Y.
                reset: true,    // If the tilt effect has to be reset on exit.
                easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
              }}>
                <div className="cardContent flex items-center justify-center flex-col">
                  {card.icon}
                  <p className="responsive-text whitespace-normal">{card.name}</p>
                </div>
              </Tilt>
            );
          })}
        </div>
      </section>
    </Element>
  );
}

export default About
