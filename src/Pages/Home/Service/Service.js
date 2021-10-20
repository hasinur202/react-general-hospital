import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, short_description, img, description } = service;
    return (
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <img src={img} className="img-fluid" alt="" />
                <h4 className="title mt-2">{name}</h4>
                <p className="description">{short_description}</p>

                <Link to={`/service-details/${id}/${name}/${description}`}>
                    <button className="btn btn-primary btn-sm mt-3">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;