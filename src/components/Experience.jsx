import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaShip , FaGamepad, FaHospital, FaUser} from "react-icons/fa"

const Experience = () => {
    return (
        <div className="bg-primary">
            <h1 className="text-center text-6xl font-bold text-white">
                Places I've
                <span> </span>
                <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                    learned
                </span>
                <span> </span>
                and
                <> </>
                <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                    worked.
                </span>
            </h1>

            <div className="flex justify-center">
                <p className="pt-8 text-2xl text-white text-center place-content-center max-w-4xl">
                    Acquiring Industry Skills at Impactful Businesses
                </p>
            </div>


            <VerticalTimeline layout="2-columns">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(8, 0, 61)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 0, 61)' }}
                    date="May 2023 - present"
                    iconStyle={{ background: 'rgb(19, 6, 100)', color: '#fff' }}
                icon={<FaShip  />}
                >
                    <h3 className="vertical-timeline-element-title">VR Software Developer</h3>
                    <a target="_blank" href="https://ca.linkedin.com/company/bcs-automation-ltd" className="vertical-timeline-element-subtitle">BCS Automation, Belleville, ON</a>
                    <p>
                        Developed frontend (Lua, VR) and backend (ASP.NET CORE, RESTful APIs, sockets) for Canada's new HoloShip platform aimed at making a digital twin for the OOSV.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(8, 0, 61)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 0, 61)' }}
                    date="Nov 2020 - Jun 2022"
                    iconStyle={{ background: 'rgb(19, 6, 100)', color: '#fff' }}
                icon={<FaGamepad />}
                >
                    <h3 className="vertical-timeline-element-title">Lead Game Developer</h3>
                    <a target="_blank" href="https://www.linkedin.com/company/legionstudios/" className="vertical-timeline-element-subtitle">Legion Studios, Toronto, ON</a>
                    <p>
                        Developed Lua games, coordinated agile scrum standups with 10+ developers, increased playtime by 25% via inventory & quest systems
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(8, 0, 61)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 0, 61)' }}
                    date="Jun 2021 - Aug 2021"
                    iconStyle={{ background: 'rgb(19, 6, 100)', color: '#fff' }}
                icon={<FaHospital />}
                >
                    <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
                    <a target="_blank" href="https://healthsmart.ai" className="vertical-timeline-element-subtitle">HealthSmart.ai, Toronto, ON</a>
                    <p>
                        Developed a secure EMR integration prototype, built 3D patient visualization pages using React & Three.js, designed wireframes, info cards, & icons
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(8, 0, 61)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 0, 61)' }}
                    date="Sep 2020 - Jun 2021"
                    iconStyle={{ background: 'rgb(19, 6, 100)', color: '#fff' }}
                icon={<FaUser />}
                >
                    <h3 className="vertical-timeline-element-title">Lead Organizer</h3>
                    <a target="_blank" href="https://lighthousehacks.ca" className="vertical-timeline-element-subtitle">LighthouseHacks.ca, Mississauga, ON</a>
                    <p>
                        Led a team of 10 executives to organize, promote, and launch an international hackathon with 250+ participants from 10 countries and $40,000+ in sponsorship prizes
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
