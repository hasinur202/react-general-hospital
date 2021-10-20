import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    const { signInUsingGoogle } = useAuth();
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }

      const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })
        }

      const handleLogin = e => {
        e.preventDefault();
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
        processLogin(email, password);
      }

      const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
              const user = result.user;
              console.log(user);
              setError('');
              history.push(redirect_uri);
          })
          .catch(error => {
            setError(error.message);
          })
      }

    return (
        <section id="appointment" className="appointment section-bg">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>Please Login</h2>
            </div>

            <form onSubmit={handleLogin} className="php-email-form" data-aos="fade-up" data-aos-delay="100">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <div className="col-md-12 form-group mt-3 mt-md-0">
                                <input onBlur={handleEmailChange} type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="col-md-12 form-group mt-3 mt-md-0">
                                <input onBlur={handlePasswordChange} type="password" className="form-control" name="phone" id="phone" placeholder="Your Password" required />
                            </div>
                        </div>
                        <div className="py-3 mt-3 text-danger">{error}</div>
                    </div>
                </div>
                <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                </div>
                <div className="text-center"><button className="btn-primary" type="submit">Login</button></div>
            </form>
        </div>
        <div className="mt-4">
            <Link to="/register">Don't have account?</Link>
            <h5>Or</h5>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    </section>
    );
};

export default Login;