import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaMedal} from "react-icons/fa"

const Awards = () => {
    return (
        <div className="bg-primary">
            <h1 className="text-center text-6xl font-bold text-white">
                Check out some
                <span> </span>
                <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                    awards
                </span>
                <span> </span>
                I've
                <> </>
                <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                    won.
                </span>
            </h1>

            <div className="flex justify-center">
                <p className="pt-8 text-2xl text-white text-center place-content-center max-w-4xl">
                    Accomplishments I've gained along the way
                </p>
            </div>


            <VerticalTimeline layout="2-columns">
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(8, 0, 61)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 0, 61)' }}
                    date="September 2023"
                    iconStyle={{ background: 'rgb(19, 6, 100)', color: '#fff' }}
                icon={<FaMedal  />}
                >
                    <h3 className="vertical-timeline-element-title">Hack the North Winner</h3>
                    <p>
                        Won two award categories for Hack The North, Canada's largest hackathon. We developed DAG, a project to aid ML developers with getting datasets via crowdsourcing.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(8, 0, 61)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 0, 61)' }}
                    date="August 2023"
                    iconStyle={{ background: 'rgb(19, 6, 100)', color: '#fff' }}
                icon={<FaMedal  />}
                >
                    <h3 className="vertical-timeline-element-title">Hack The 6ix Winner</h3>
                    <p>
                        Won Hack The 6ix, Toronto's largest summer hackathon, for developing ReadRight, a project to aid students with dyslexia.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(8, 0, 61)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 0, 61)' }}
                    date="September 2022"
                    iconStyle={{ background: 'rgb(19, 6, 100)', color: '#fff' }}
                icon={<FaMedal  />}
                >
                    <h3 className="vertical-timeline-element-title">Professional Engineers of Ontario Scholarship</h3>
                    <p>
                        One of three students in Ontario awarded the professional engineers of ontario scholarship for excellence in academics and extracurriculars.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(8, 0, 61)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 0, 61)' }}
                    date="May 2022"
                    iconStyle={{ background: 'rgb(19, 6, 100)', color: '#fff' }}
                icon={<FaMedal  />}
                >
                    <h3 className="vertical-timeline-element-title">University of Waterloo Nortel Networks Undergraduate Scholarship</h3>
                    <p>
                    Awarded by the Uwaterloo faculty of ECE for excellence in academics and extracurriculars.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(8, 0, 61)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 0, 61)' }}
                    date="May 2022"
                    iconStyle={{ background: 'rgb(19, 6, 100)', color: '#fff' }}
                icon={<FaMedal  />}
                >
                    <h3 className="vertical-timeline-element-title">University of Waterloo Presidents Distinction Scholarship</h3>
                    <p>
                    Awarded by the Uwaterloo for academic excellence.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(8, 0, 61)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 0, 61)' }}
                    date="May 2021"
                    iconStyle={{ background: 'rgb(19, 6, 100)', color: '#fff' }}
                icon={<FaMedal  />}
                >
                    <h3 className="vertical-timeline-element-title">Duke of Edinburgh Silver Award</h3>
                    <p>
                    Awarded by the Duke of Edinburgh international organization for excellence in community service, academics, and physical activities.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(8, 0, 61)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 0, 61)' }}
                    date="June 2020"
                    iconStyle={{ background: 'rgb(19, 6, 100)', color: '#fff' }}
                icon={<FaMedal  />}
                >
                    <h3 className="vertical-timeline-element-title">Duke of Edinburgh Bronze Award</h3>
                    <p>
                    Awarded by the Duke of Edinburgh international organization for excellence in community service, academics, and physical activities.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(8, 0, 61)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 0, 61)' }}
                    date="May 2020"
                    iconStyle={{ background: 'rgb(19, 6, 100)', color: '#fff' }}
                icon={<FaMedal  />}
                >
                    <h3 className="vertical-timeline-element-title">University of Waterloo Avogadro Chemistry Contest Distinction</h3>
                    <p>
                    Placed in the top 10 percentile for the avogadro chemistry contest hosted by the University of Waterloo.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(8, 0, 61)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(8, 0, 61)' }}
                    date="October 2019"
                    iconStyle={{ background: 'rgb(19, 6, 100)', color: '#fff' }}
                icon={<FaMedal  />}
                >
                    <h3 className="vertical-timeline-element-title">PCHacks Organizer</h3>
                    <p>
                    Mississauga's largest 2019 hackathon recognized by the Mississauga MP Iqra Khalid
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Awards;
