import React from 'react';
// import { Link } from 'react-router-dom';
import vinesImg from '../../images/vines.png'

const ForgotPasswordPage = () => {
    return (
        <div className="forgot-password-container">
             <h1>Reset Password</h1>
            <form>
                <label for="Username">Username:</label><br />
                <input class="textbox" type="text" id="Username" name="Username" /><br />
                <label for="SecurityQ">Security Question:</label><br />
                <input class="textbox" type="text" id="SecurityQ" name="SecurityQ" readonly="readonly" value="Q1" /><br />
                <label for="Answer">Answer:</label><br />
                <input class="textbox" type="text" id="Answer" name="Answer" /><br />
                <label for="NewPass">New Password:</label><br />
                <input class="textbox" type="text" id="NewPass" name="NewPass" /><br />
                <label for="ConPass">Confirm New Password:</label><br />
                <input class="textbox" type="text" id="ConPass" name="ConPass" /><br />
                <div class="decision">
                    <div><a href="/html/login.html" class="return">Back to Login</a></div>
                    <input class="buttons" type="submit" value="Login" />
                </div>
            </form>
            <img class="vines" src={vinesImg} alt="vines" />
            <footer>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
            </footer>
        </div>
  );
};

export default ForgotPasswordPage;