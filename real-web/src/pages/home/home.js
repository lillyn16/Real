import React from 'react';
import WeeklyCalendarView from '../../components/week-calendar-view/week-calendar-view';

const HomePage = () => {
  return (
    <div className="home-page">
      <WeeklyCalendarView /> 
      <div>
      </div>
          <br></br>
          <br></br>
          <div class="boxleft">
            <h1>Log Symptoms</h1>
            <p>-----------------------------------------</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div class='box'></div>
          <div class='boxright'>
            <h1>Tracker</h1>
            <p>-----------------------------------------</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
          <br></br>
          <br></br>
          <br></br>
      </div>
    
  );
};

export default HomePage;