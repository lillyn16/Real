import React from 'react';
// import { Link } from 'react-router-dom';
import vinesImg from '../../images/vines.png'

const ForgotPasswordPage = () => {
    return (
        <div className="forgot-password-container">
             <h1>Reset Password</h1>
            {
            /* <form>
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
            </form> */

            <form>
                <label for="Username">Username:</label>
                <input className='textbox' type="text" id="Username" name="Username"></input>
                <label for="SecurityQ">Security Question:</label>
                <input className='textbox' type="text" id="SecurityQ" name="SecurityQ" readOnly="readonly" value={"What is your favorite color?"}></input>
                <label for="Answer">Answer:</label>
                <input className="textbox" type="text" id="Answer" name="Answer"></input>
                <label for="NewPass">New Password:</label><br />
                <input class="textbox" type="text" id="NewPass" name="NewPass"></input>
                <label for="ConPass">Confirm New Password:</label><br />
                <input className="textbox" type="text" id="ConPass" name="ConPass"></input>
                <div className="decision">
                    <div><a href="/login" class="return">Back to Login</a></div>
                    <input className="real-button" type="submit" value="Login" ></input>
                </div>
            </form>
            }
            {/* <img class="vines" src={vinesImg} alt="vines" /> */}
        </div>
  );
};

export default ForgotPasswordPage;