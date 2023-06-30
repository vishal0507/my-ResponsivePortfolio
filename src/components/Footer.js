import React from 'react';
import './FooterStyles.css';
import { FaGithub, FaHackerrank, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Chennai, Tamilnadu.</p>
                        </div>
                    </div>
                    <div className='location'>
                        <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <h4>8428264856</h4>
                        </div>
                    </div>
                    <div className='location'>
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>vishalljeganath@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <p>About the social media links</p>
                    <div className='social'>

                        <Link to="https://github.com/vishal0507" >
                            <FaGithub size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                        </Link>


                        <Link to="https://www.linkedin.com/in/vishall-jeganath-95199a209/">
                            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                        </Link>
                        <Link to="https://www.hackerrank.com/vishalljeganath?hr_r=1">
                            <FaHackerrank size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                        </Link>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer;