import React from 'react';
//import { Link } from 'react-router-dom';
import "./index.css"
import {FaFacebook,FaInstagram,FaWhatsapp} from "react-icons/fa"
const Footer = () => {
    return ( <div>
        <footer className="back footer-mt-5">
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-md-4">
                    <hr className="ruler"></hr>
                    <p><strong>Terminal</strong></p>
                    <p><a href="#"><strong>Our Story</strong></a></p>
                    <p><a href="#"><strong>Privacy Policy</strong></a></p>
                    </div>
                    <div className="col-md-4">
                    <hr className="ruler"></hr>
                    <p><strong>CUSTOMER SERVICES</strong></p>
                    <p><a href="#"><strong>Terms and Conditions </strong></a></p>
                    <p><a href="#"><strong>Return and Exchange Policies</strong></a></p>
                    <p><a href="#"><strong>Frequently Asked Questions</strong></a></p>
                    </div>
                    <div className="col-md-4">
                    <hr className="ruler"></hr>
                    <p><strong>SOCIAL PAGES</strong></p>
                    <a href="https://www.facebook.com/layers.confectionery/"><FaFacebook size="2em"/></a>
                    <a href="https://www.instagram.com/layer.s/"><FaInstagram size="2em"/></a>
                    <a href="#"><FaWhatsapp size="2em"/></a>
                    </div>
                </div>
                <div class="copyright text-center py-3 border-top text-light">
                    <p>&copy; CopyRights</p>
                    </div>
            </div>
        </footer>
    </div> );
}
 
export default Footer;