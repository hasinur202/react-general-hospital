import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import './Banner.css'

const Banner = () => {
    return (     
        <>       
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block banner w-100 h-75"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="slide-container">
                        <h2>Welcome to <span>ANI GENERAL HOSPITAL</span></h2>
                        <p>ANI General Hospital, Dhaka is the newest hospital one of the largest Bangladeshi health care provider. The hospital is a 150 beds and tertiary care facility, delivering international standard health care at an affordable price to the peoples of Bangladesh</p>
                        <button className="btn-get-started btn-info scrollto">Read More</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block banner w-100 h-50"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className="slide-container">
                        <h2>Audiology</h2>
                        <p>Home health services like intermittent skilled nursing care, physical therapy, speech-language pathology, continued occupational services.</p>
                        <button className="btn-get-started btn-info scrollto">Read More</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block banner w-100 h-50"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <div className="slide-container">
                        <h2>Medical imaging</h2>
                        <p>Home health services like intermittent skilled nursing care, physical therapy, speech-language pathology, continued occupational services.</p>
                        <button className="btn-get-started btn-info scrollto">Read More</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <section id="cta" className="cta">
            <div className="container" data-aos="zoom-in">
                <div className="text-center">
                <h3>In an emergency? Need help now?</h3>
                <p> Every patient has the right to fast and adequate emergent medical care. We need better systems, more professionals and more resources. Support Emergency Carers. Celebrate EM-Day with us.</p>
                <Link className="cta-btn scrollto" to="/appointment">Make an Appointment</Link>
                </div>
            </div>
        </section>
        </>
    );
};

export default Banner;