import React from 'react';
import { Link } from 'react-router-dom';
import './create-account.css';

const CreateAccountPage = () => {
  return (
    <div className="create-account-container">
        <h1>Create Account</h1>
        <form>
            <label htmlFor="Username">Username:</label><br />
            <input className="textbox" type="text" id="Username" name="Username" /><br />

            <label htmlFor="Password">Password:</label><br />
            <input className="textbox" type="password" id="Password" name="Password" /><br />

            <label htmlFor="ConPass">Confirm Password:</label><br />
            <input className="textbox" type="password" id="ConPass" name="ConPass" /><br />

            <label htmlFor="SecurityQ">Security Question:</label><br />
            <select className="textbox" id="SecurityQ" name="SecurityQ">
            <option value="Q1">Q1</option>
            <option value="Q2">Q2</option>
            <option value="Q3">Q3</option>
            <option value="Q4">Q4</option>
            </select><br />

            <label htmlFor="Answer">Answer:</label><br />
            <input className="textbox" type="text" id="Answer" name="Answer" /><br />

            <label htmlFor="ConAnswer">Confirm Answer:</label><br />
            <input className="textbox" type="text" id="ConAnswer" name="ConAnswer" /><br />

            <div className="decision">
            <div className="return">
                <Link to="/login" className="return">Back to Login</Link>
            </div>
            <input className="buttons" type="submit" value="Create Account" />
            </div>
        </form>
        <img className="vines" src="/images/vines.png" alt="Vines" />
        <footer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </footer>
    </div>
  );
};

export default CreateAccountPage;