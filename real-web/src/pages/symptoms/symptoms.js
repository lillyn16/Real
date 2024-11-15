import React from 'react';
import './symptoms.css'
import WeeklyCalendarView from '../../components/week-calendar-view/week-calendar-view';

const SymptomsPage = () => {
  return (
    <div className="symptoms-container">
      <h1>Symptoms</h1>
      <h2>How do/did you feel on October 1, 2024</h2>
      <form className="symptomsForm">
        <div className="symptomLine">
          <label>Cramps:</label>
          <input type="radio" id="None" name="cramps" value="None"></input>
          <label for="None">None</label>
          <input type="radio" id="Mild" name="cramps" value="Mild"></input>
          <label for="Mild">Mild</label>
          <input type="radio" id="Moderate" name="cramps" value="Moderate"></input>
          <label for="Moderate">Moderate</label> 
          <input type="radio" id="Painful" name="cramps" value="Painful"></input>
          <label for="Painful">Painful</label> 
        </div>
        <div class="symptomLine">
          <label>Bloating:</label>
          <input type="radio" id="None" name="bloating" value="None"></input>
        </div>
      </form>
    </div>
  );
};

export default SymptomsPage;