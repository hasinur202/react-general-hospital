import React from 'react';

const Appointment = () => {
    return (
        <section id="appointment" className="appointment section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Make an Appointment</h2>
                    <p>You can easily make an appointment from here. Please fill up the given form below then make appointment.</p>
                </div>

                <form className="php-email-form" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                    <div className="col-md-4 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-4 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                    <div className="col-md-4 form-group mt-3 mt-md-0">
                    <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 form-group mt-3">
                    <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" required />
                    </div>
                    <div className="col-md-4 form-group mt-3">
                    <select name="department" id="department" className="form-select">
                        <option value="">Select Department</option>
                        <option value="Department 1">Department 1</option>
                        <option value="Department 2">Department 2</option>
                        <option value="Department 3">Department 3</option>
                    </select>
                    </div>
                    <div className="col-md-4 form-group mt-3">
                    <select name="doctor" id="doctor" className="form-select">
                        <option value="">Select Doctor</option>
                        <option value="Doctor 1">Doctor 1</option>
                        <option value="Doctor 2">Doctor 2</option>
                        <option value="Doctor 3">Doctor 3</option>
                    </select>
                    </div>
                </div>

                <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
                </div>
                <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                </div>
                <div className="text-center"><button className="btn-info p-2" type="button">Make an Appointment</button></div>
                </form>
            </div>
        </section>
    );
};

export default Appointment;