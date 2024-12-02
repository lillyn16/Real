import React from 'react';
// import { Link } from 'react-router-dom';
import vinesImg from '../../images/vines.png'
import './forgot-password.css'

const ForgotPasswordPage = () => {
    const submit = async () => {
        
    }

    return (
        <div className="forgot-password-container">
             <h1>Reset Password</h1>
            <form className='forgot-password-form-container'>
                <div className='forgot-password-input-container'>
                    <label>username</label>
                    <input className='real-input' type="text" id="username"></input>
                </div>
                <div className='forgot-password-input-container'>
                    <label>security question</label>
                    <input className='real-input' type="text" id="SecurityQ" name="SecurityQ" readOnly="readonly" value={"What is your favorite color?"}></input>    
                </div>
                <div className='forgot-password-input-container'>
                    <label>answer</label>
                    <input className="real-input" type="text" id="Answer" name="Answer"></input>    
                </div>
                <div className='forgot-password-input-container'>
                    <label>new password</label>
                    <input class="real-input" type="text" id="NewPass" name="NewPass"></input>    
                </div>
                <div className='forgot-password-input-container'>
                    <label>confirm new password</label>
                    <input className="real-input" type="text" id="ConPass" name="ConPass"></input>
                </div>
                <div className="forgot-password-button-container">
                    <div><a href="/login" class="return">back to login</a></div>
                    <button className="real-button" type="button" onClick={submit}>submit</button> 
                </div>
            </form>
        </div>
  );
};

export default ForgotPasswordPage;