import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <section id="services" className="featured-services">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Services</h2>
                    <p>Our all services is here..</p>
                </div>
                <div className="row">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
                </div>
            </div>
        </section>
    );
};

export default Services;