import React from 'react';
// import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { name, description } = useParams();
    
    return (
        <section id="departments" className="departments">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Service Details</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1">
                                    <h3>{name}</h3>
                                    {/* <p className="fst-italic">{service?.short_description}</p> */}
                                    {/* <img src={img} alt="" className="img-fluid"/> */}
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        // <div>
        //     <h2>this is booking: {serviceId}</h2>
        // </div>
    );
};

export default ServiceDetails;