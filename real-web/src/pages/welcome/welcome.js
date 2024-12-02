import React, { useState } from "react";
import './welcome.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from "react-date-range";
import { enGB } from 'date-fns/locale';
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const [lastPeriodState, setLastPeriodState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
        
    ]);

    const maxDate = new Date();
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 5);

    const navigate = useNavigate();
    const skip = () => {
        navigate('/home');
    }

    const submit = () => {
        console.log(lastPeriodState)
    }

    return (
        <div className="welcome-page-container">
            <div className="welcome-page-content">
                <div className="welcome-header-container">
                    <div className="welcome-header">
                        Welcome to REAL
                    </div>
                    <div className="welcome-header-subtext">
                        Before you get started, we need to collect a bit of information to help predict your next menstrual cycle.
                    </div>
                </div>
                <hr className="welcome-hr"></hr>
                <div className="skip-container">
                    <div className="skip-text">
                        If this is your first period or you don’t remember the date of your last one
                    </div>
                    <button className='real-button' type='button' onClick={skip}>skip</button>
                </div>
                <hr className="welcome-hr"></hr>
                <div className="welcome-input-content">
                    <div className="welcome-input-container">
                        <div className="welcome-input-label">Select the date range of your last period</div>
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setLastPeriodState([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={lastPeriodState}
                            locale={enGB}
                            maxDate={maxDate}
                            minDate={minDate}
                            rangeColors={['#7374b5']}
                        />
                    </div>
                </div>
                {/* <div className="welcome-input-container">
                    <div className="welcome-input-label">What is the average length of your period?</div>
                    <input className="welcome-input" type="text"></input>
                </div> */}
                <div className="submit-button-container">
                    <button className="real-button" type="button" onClick={submit}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;