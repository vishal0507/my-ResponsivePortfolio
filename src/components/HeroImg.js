import './HeroImgStyles.css';
import React from 'react'
import { Link } from 'react-router-dom';

const HeroImg = () => {
    const handleContactClick = ()=>{
        window.location.href = 'mailto: vishalljeganath@gmail.com';
    }
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src="https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="IntroImg"/>
        </div>
        <div className='content'>
            <p>Hi, I'm a Fresher</p>
            <h1>Software Engineer</h1>
            <Link to='/Project' className='btn'>
                Projects
            </Link>
            <button className='btn btn-light' onClick={handleContactClick}>
                Contact
            </button>
        </div>

    </div>
  )
}

export default HeroImg