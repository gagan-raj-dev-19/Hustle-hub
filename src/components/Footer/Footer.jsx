import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/Hustlehub.png';

const Footer = () => {

  const handleClick = (url) => {
    window.open(url, '_blank'); // Open the URL in a new tab
};
  
  return (
    <div className='Footer-container'>
        <hr />
        <div className='footer'>
            <div className='social-links'>
                <img src={Github} alt=''  onClick={() => handleClick('https://github.com/')}/>
                <img src={Instagram} alt=''  onClick={() => handleClick('https://www.instagram.com/')} />
                <img src={LinkedIn} alt=''  onClick={() => handleClick('https://in.linkedin.com/')} />
            </div>
            <div className='logo-f'>
                <img src={Logo} alt='' />
            </div>
        </div>

        <div className='blur blur-f-1'></div>
        <div className='blur blur-f-2'></div>
       
    </div>
  )
}

export default Footer
