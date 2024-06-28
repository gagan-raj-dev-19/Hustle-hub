import React from 'react'
import "./Hero.css"
import Header from '../Header/Header'
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter'
const Hero = () => {

    const transition ={type: 'spring', duration : 3}
    const mobile = window.innerWidth<=768 ? true : false


  return (
    <div className='hero' id='home' >
        <div className="blur hero-blur"></div>
        <div className='left-h'>
            <Header/>
            
            <div className='the-best-ad'>
            <motion.div
             initial={{left: mobile? '165px' : '238px'}}
             whileInView={{left: '8px'}}
             transition={{...transition, type: 'tween'}}
            ></motion.div>

            <span>the best fitness club in the town</span>
            </div>

                            {/* Hero Heading */}
            <div className='hero-text'>
                <div>
                    <span className='stroke-text'>Sculpt </span> 
                    <span> Your</span>
                    </div>

                    <div>
                        <span>dream physique</span>
                    </div>
                    <div> 
                        <span>
                        Hustlehub is your go-to place for transforming your body and reaching your fitness goals. We provide a variety of advanced workouts and personalized training programs to sculpt and strengthen every muscle.
                       </span>
                    </div>
                    
            </div>
    
                             {/* Figures */}

           <div className='figures'> 
           
            <div>
                <span><NumberCounter end={40} start={25} delay="1" preFix="+" /> </span>
                <span>expert coaches</span>
            </div>
            <div>
                <span><NumberCounter end={700} start={450} delay="1" preFix="+" /></span>
                <span>members joined</span>
            </div>
            <div>
                <span><NumberCounter end={50} start={25} delay="1" preFix="+" /></span>
                <span>fitness Programs</span>
            </div>

           </div>
                            {/* Hero Buttons */}
        
        <div className='hero-buttons'>
            <buttons className='btn'>Get Started</buttons>
            <buttons className='btn'>Learn More</buttons>
        </div>
                     
        </div>


        <div className='right-h'>
        <button className='btn'> join Now</button>

        <motion.div 
            initial={{right:"-1rem"}}
            whileInView={{right:"4rem"}}
            transition={transition}
             className='heart-rate'>
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span> 115 bpm</span>
        </motion.div>

        <img src= {hero_image} alt=""  className='hero-image'/>
        <motion.img
          initial={{right:'11rem'}}
          whileInView={{right:'20rem'}}
          transition={transition}
        src= {hero_image_back} alt="" className='hero-image-back' />

        {/* calories section*/}

        <motion.div 
        initial={{right:"25rem"}}
        whileInView={{right:"35rem"}}
        transition={transition}
        className='calories'>
            <img src={Calories}  alt="" />
            <div>
            <span>Calories burnt</span>
            <span>220Kcal</span>
            </div>
           
        </motion.div>

      
    </div>
    </div>
  )
}

export default Hero
