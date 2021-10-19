import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='pageFooter'>
            <div className='footerDesign'>
                <div>
                    <Link to='/home'><span>About Us</span></Link>
                    <Link to='/workshop'><span>WorkShop</span></Link>
                    <Link to='/research'><span>Research</span></Link>
                </div>
                <div>
                    <a title='Facebook' href='https://web.facebook.com/help/570785306433644?_rdc=1&_rdr'><i class="fab fa-facebook-f"></i></a>
                    <a title='Twitter' href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4tZ2IifQ%3D%3D%22%7D'><i class="fab fa-twitter"></i></a>
                    <a title='Instagram' href='https://www.instagram.com/accounts/login/'><i class="fab fa-instagram"></i></a>
                    <a title='Youtube' href='https://www.youtube.com/'><i class="fab fa-youtube"></i></a>
                </div>

            </div>
            <p className='footerUnderLine'></p>
            <p>&copy;2010 ALL RIGHTS RESERVED</p>
            <a className='footerGoogleMap' href="https://www.google.com.bd/maps/@23.7806365,90.4193257,12z">Google Map</a>
        </div>
    );
};

export default Footer;