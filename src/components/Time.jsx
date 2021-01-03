import React from "react";
import scan from './Search.jsx';
import TimelineItem from "./Timeitem";
const src = "./assets/warehouse.svg"
const dest = "./assets/destination.svg"
const Timeline = () =>
    scan.length > 0 && (
        <div>
            <div className="CircleBackground"><img src={dest} className='Image destinationImage' alt='some'/></div>
        <div className="timeline-container">
            {scan.map((scan, idx) => (
                <TimelineItem scan={scan} key={idx} />
            ))}
        </div>
            <div className="CircleBackground"><img src={src} className='Image sourceImage' alt='oops'/></div>
        </div>
    );
export default Timeline;