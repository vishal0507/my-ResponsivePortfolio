import React from 'react';
import './FooterStyles.css';
import { FaFacebook, FaHackerrank, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

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
                        <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <FaHackerrank size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer;