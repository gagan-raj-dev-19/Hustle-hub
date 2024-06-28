import React from 'react'
import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import Leaf from '../../assets/leaf.png';
import Sand from '../../assets/sand.png'
import Stone from '../../assets/stone.png'
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className='Reasons' id='Reasons'>  
        <div className='left-r'>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
    </div>

        <div className='right-r'>
            <span>Some reasons</span>
            <div>
            <span className='stroke-text'>Why</span>
            <span> Choose us?</span>
            </div>

        <div className='details-r'>
            <div>
                <img src={tick} alt="" />
                <span>OVER 60+ EXPERT COACHS</span>
            </div>

            <div>
                <img src={tick} alt="" />
                <span>Train more efficiently and faster than ever before.</span>
            </div>

            <div>
                <img src={tick} alt="" />
                <span>Complimentary program for new members.</span>
            </div>

            <div>
                <img src={tick} alt="" />
                <span>Trusted collaborators</span>
            </div>

        </div>
        
        <span
        style={{
            color:"var(--gray)",
            fontWeight: "normal",
        }}
        >
            OUR PARTNERS
        </span>


    <div className='partners'>
        <img src={Sand} alt="" />
        <img src={Leaf} alt="" />
        <img src={Stone } alt="" />
    </div>
        
        </div>

    </div>
  )
}

export default Reasons
