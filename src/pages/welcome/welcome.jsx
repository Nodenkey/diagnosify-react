import React, {useEffect, useState} from "react";
import "./welcome.style.css";
import CustomButton from "../../components/button/customButton";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {loginUser, signInWithGoogle, signUpUser} from "../../redux/actions";
import {errorObject, validateEmail, validatePassword, validateSignIn, validateSignUp} from "../../utils/validation";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const Welcome = ({loginUser, isLoggingIn, isAuthenticated, loginErrorMessage, signUpUser, signUpErrorMessage,
                     isSigningUp, googleSignIn, googleSignUp}) => {
        const [userCredentials, setUserCredentials] = useState({
            email: '',
            password: '',
        });
        const [error, setError] = useState({
            signUpMailError: '',
            signUpPassError: '',
            signInMailError: '',
            signInPassError: '',
        });

        const [visible, setVisible] = useState({
            eye: "inline-block",
            cancelEye: "none",
        });

        const toggleVisible = (event) => {
            if (event.target.id === "eye") {
                setVisible({...visible, eye: "none", cancelEye: "inline-block"});
            } else if (event.target.id === "cancelEye") {
                setVisible({...visible, eye: "inline-block", cancelEye: "none"});
            }
        };

        useEffect(() => {
                const sign_in_pass = document.querySelector('#signInPass');
                const sign_up_pass = document.querySelector('#signUpPass');
                if (sign_in_pass !== null) {
                    if (sign_in_pass.type === "password") {
                        sign_in_pass.type = "text";
                    } else {
                        sign_in_pass.type = "password";
                    }
                }
                if (sign_up_pass !== null) {
                    if (sign_up_pass.type === "password") {
                        sign_up_pass.type = "text";
                    } else {
                        sign_up_pass.type = "password";
                    }
                }
            }, [visible, isAuthenticated]
        )
        ;


        const changeToIn = () => {
            const sign_up = document.querySelector('#signUpPage');
            const sign_in = document.querySelector('#signInPage');

            sign_up.classList.add('hide');
            sign_up.classList.remove('unhide');
            sign_in.classList.add('unhide');
            sign_in.classList.remove('hide');
        };
        const changeToOut = () => {
            const sign_up = document.querySelector('#signUpPage');
            const sign_in = document.querySelector('#signInPage');

            sign_up.classList.remove('hide');
            sign_up.classList.add('unhide');
            sign_in.classList.remove('unhide');
            sign_in.classList.add('hide');
        };

        const errorSetter = () => {
            setError({...error, [errorObject.errorName]: errorObject.errorMessage});
        };

        const welcomeValidateEmail = (event) => {
            validateEmail(event);
            errorSetter();
        };
        const welcomeValidatePass = (event) => {
            validatePassword(event);
            errorSetter();
        };
        const handleEmailChange = (event) => {
            welcomeValidateEmail(event);
            setUserCredentials({...userCredentials, email: event.target.value});
        };
        const handlePasswordChange = (event) => {
            welcomeValidatePass(event);
            setUserCredentials({...userCredentials, password: event.target.value})
        };

        const handleSignInSubmit = (event) => {
            event.preventDefault();
            const isValid = validateSignIn(event);
            errorSetter();
            if (isValid){
                loginUser(userCredentials.email, userCredentials.password);
            }
        };

        const handleSignUpSubmit = (event) => {
            event.preventDefault();
            const isValid = validateSignUp(event);
            errorSetter();
            if (isValid){
                signUpUser(userCredentials.email, userCredentials.password);
            }
        };


        return isAuthenticated ? <Redirect to='/dashboard'/> : (
            <>
                <NavBar/>
                <div className="signup" id='signUpPage'>
                    <div className="signup-card">
                        <p className='error main-error'>{signUpErrorMessage}</p>
                        <div className="card-head">
                            <h1>Sign up</h1>
                            <p>Already have an account? <span className='make-blue' onClick={changeToIn}>Sign in</span></p>
                        </div>
                        <div className="error-container">
                            <p className='error signUpMailError'>{error.signUpMailError}</p>
                            <p className='error signUpPassError'>{error.signUpPassError}</p>
                        </div>
                        <form id="signUpForm" onSubmit={handleSignUpSubmit}>
                            <label htmlFor="signUpMail" className='form-input'>
                                Email
                                <input type="email" id='signUpMail' name='signUpMail' onChange={handleEmailChange}
                                       onBlur={welcomeValidateEmail}/>
                            </label>
                            <label htmlFor="signUpPass" className='form-input'>
                            <span className="label">Password <i className="far fa-eye" style={{display: visible.eye}}
                                                                onClick={toggleVisible} id='eye'/>
                                                                <i className="far fa-eye-slash"
                                                                   style={{display: visible.cancelEye}}
                                                                   onClick={toggleVisible} id='cancelEye'/></span>
                                <input type="text" id='signUpPass' name='signUpPass' onChange={handlePasswordChange}
                                       onBlur={welcomeValidatePass}/>
                            </label>
                            <div className="submit">
                                {
                                    isSigningUp ? <i className="fas fa-circle-notch fa-spin submit-spinner"/> :
                                        <CustomButton button_type='submit' text='Submit'/>
                                }
                            </div>
                        </form>
                        <div className="or">
                            <div className="h-line"/>
                            <p>Or</p>
                            <div className="h-line"/>
                        </div>
                        <CustomButton button_type='google' text='Sign up with Google' clickFunction={googleSignUp}/>
                    </div>
                </div>
                <div className="signin hide" id="signInPage">
                    <div className="signin-card">
                        <p className='error main-error'>{loginErrorMessage}</p>
                        <div className="card-head">
                            <h1>Sign in</h1>
                            <p>New user? <span className='make-blue' onClick={changeToOut}>Create an account</span></p>
                        </div>
                        <div className="error-container">
                            <p className='error signInMailError'>{error.signInMailError}</p>
                            <p className='error signInPassError'>{error.signInPassError}</p>
                        </div>
                        <form id="signInForm" onSubmit={handleSignInSubmit}>
                            <label htmlFor="signInMail" className='form-input'>
                                Email
                                <input type="email" id='sigInMail' name='signInMail' onChange={handleEmailChange}
                                       onBlur={welcomeValidateEmail}/>
                            </label>
                            <label htmlFor="signInPass" className='form-input'>
                            <span className="label">Password <i className="far fa-eye" style={{display: visible.eye}}
                                                                onClick={toggleVisible} id='eye'/>
                                                                <i className="far fa-eye-slash"
                                                                   style={{display: visible.cancelEye}}
                                                                   onClick={toggleVisible} id='cancelEye'/>
                            </span>
                                <input type="text" id='signInPass' name='signInPass' onChange={handlePasswordChange}
                                       onBlur={welcomeValidatePass}/>
                            </label>
                            <div className="submit">
                                {
                                    isLoggingIn ? <i className="fas fa-circle-notch fa-spin submit-spinner"/> :
                                        <CustomButton button_type='submit' text='Submit'/>
                                }
                            </div>
                        </form>
                        <div className="or">
                            <div className="h-line"/>
                            <p>Or</p>
                            <div className="h-line"/>
                        </div>
                        <CustomButton button_type='google' text='Sign in with Google' clickFunction={googleSignIn}/>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
;

function mapStateToProps(state) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated,
        loginErrorMessage: state.auth.loginErrorMessage,
        isSigningUp: state.auth.isSigningUp,
        signUpError: state.auth.signUpError,
        signUpErrorMessage: state.auth.signUpErrorMessage,
    };
}

const mapDispatchToProps = dispatch => ({
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    signUpUser: (email, password) => dispatch(signUpUser(email, password)),
    googleSignIn: () => dispatch(signInWithGoogle('signin')),
    googleSignUp: () => dispatch(signInWithGoogle('signup')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
