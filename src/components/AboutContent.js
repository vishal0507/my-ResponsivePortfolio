import { Link } from 'react-router-dom';
import './AboutContentStyles.css';
import React from 'react'

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who am I?</h1>
                <p>Im a react front-end developer. I create responsive secure
                    websites.
                </p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img className="img" src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" />
                    </div>
                    <div className='img-stack bottom'>
                        <img className="img" src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutContent