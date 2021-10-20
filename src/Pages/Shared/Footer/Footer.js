import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return ( 
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="footer-info">
                                <h3>ANI GENERAL HOSPITAL</h3>
                                <p>
                                   Ring Road <br/>
                                    Mohammadpur-1207, Dhaka<br/><br/>
                                    <strong>Phone:</strong> +88 0177 XXXXX XXX<br/>
                                    <strong>Email:</strong> <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="177e79717857726f767a677b723974787a">[email&#160;protected]</a><br/>
                                </p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i><Nav.Link as={HashLink} to="/home#home">Home</Nav.Link></li>
                                <li><i className="bx bx-chevron-right"></i><Nav.Link as={HashLink} to="/home#services">Services</Nav.Link></li>
                                <li><i className="bx bx-chevron-right"></i><Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link></li>
                                <li><i className="bx bx-chevron-right"></i><Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Subsribe us by your valid email address</p>
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>ANI General Hospital</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="#">Sadia Mahmuda</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;