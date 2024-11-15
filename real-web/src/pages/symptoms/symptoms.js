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
          <label className="symLabel">Cramps:</label>
          <input type="radio" id="None" name="cramps" value="None"></input>
          <label for="None">None</label>
          <input type="radio" id="Mild" name="cramps" value="Mild"></input>
          <label for="Mild">Mild</label>
          <input type="radio" id="Moderate" name="cramps" value="Moderate"></input>
          <label for="Moderate">Moderate</label> 
          <input type="radio" id="Painful" name="cramps" value="Painful"></input>
          <label for="Painful">Painful</label> 
        </div>
        <div className="symptomLine">
          <label className="symLabel">Bloating:</label>
          <input type="radio" id="None" name="bloating" value="None"></input>
          <label for="None">None</label>
          <input type="radio" id="Mild" name="bloating" value="Mild"></input>
          <label for="Mild">Mild</label>
          <input type="radio" id="Moderate" name="bloating" value="Moderate"></input>
          <label for="Moderate">Moderate</label> 
          <input type="radio" id="Alot" name="bloating" value="Alot"></input>
          <label for="Alot">Alot</label> 
        </div>
        <div className="symptomLine">
            <label className="symLabel">Acne:</label>
            <input type="radio" id="None" name="acne" value="None"></input>
            <label for="None">None</label>
            <input type="radio" id="Mild" name="acne" value="Mild"></input>
            <label for="Mild">Mild</label>
            <input type="radio" id="Moderate" name="acne" value="Moderate"></input>
            <label for="Moderate">Moderate</label> 
            <input type="radio" id="Alot" name="acne" value="Alot"></input>
            <label for="Alot">Alot</label> 
        </div>
        <div className="symptomLine">
            <label className="symLabel">Tired:</label>
            <input type="radio" id="No" name="tired" value="No"></input>
            <label for="No">No</label>
            <input type="radio" id="little" name="tired" value="little"></input>
            <label for="little">A little</label>
            <input type="radio" id="Kinda" name="tired" value="Kinda"></input>
            <label for="Kinda">Kinda</label> 
            <input type="radio" id="Very" name="tired" value="Very"></input>
            <label for="Very">Very</label> 
        </div>
        <div className="symptomLine">
            <label className="symLabel">Mood:</label>
            <input type="radio" id="Steady" name="mood" value="Steady"></input>
            <label for="Steady">Steady</label>
            <input type="radio" id="Unsteady" name="mood" value="Unsteady"></input>
            <label for="Unsteady">Unsteady</label>
            <input type="radio" id="Sparatic" name="mood" value="Sparatic"></input>
            <label for="Sparatic">Sparatic</label> 
        </div>
        <div className="symptomLine">
            <label className="symLabel">Flow:</label>
            <input type="radio" id="None" name="flow" value="None"></input>
            <label for="None">None</label>
            <input type="radio" id="Spotting" name="flow" value="Spotting"></input>
            <label for="Spotting">Spotting</label>
            <input type="radio" id="Light" name="flow" value="Light"></input>
            <label for="Light">Light</label> 
            <input type="radio" id="Regular" name="flow" value="Regular"></input>
            <label for="Regular">Regular</label> 
            <input type="radio" id="Heavy" name="flow" value="Heavy"></input>
            <label for="Heavy">Heavy</label> 
        </div>
        <div>
            <label className="symLabel">Notes:</label>
            <input className="notes" type="text" id="Notes" name="Notes"></input>
        </div>
        <input className="submitbutton" type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default SymptomsPage;