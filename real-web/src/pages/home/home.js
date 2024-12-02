import React, { useEffect, useState } from 'react';
import WeeklyCalendarView from '../../components/week-calendar-view/week-calendar-view';
import { getPhase } from '../../services/api';
import './home.css';

const HomePage = () => {
  const [periodData, setPeriodData] = useState(null);
  const [isPeriodWeek, setIsPeriodWeek] = useState(false);

  useEffect(() => {
    const getPhaseData = async () => {
      try {
        const phaseData = await getPhase(6);  // replace with user id
        setPeriodData({
          nextPeriodStart: phaseData.nextPeriodStart,
          nextPeriodEnd: phaseData.nextPeriodEnd,
          currentPhase: phaseData.currentPhase
        });
        setIsPeriodWeek(phaseData.isCurrentWeekPeriod); 
        console.log(phaseData);
      } catch (error) {
        console.error('Error fetching period data:', error);
      }
    }

    getPhaseData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  if (!periodData) {
    return <div>Loading...</div>; // loading state until data is available
  }

  return (
    <div className="home-page">
      <WeeklyCalendarView /> 
      <div>
      </div>
          {/* <br></br>
          <br></br> */}
          {/* <div className="boxleft">
            <h1>Log Symptoms</h1>
            <p>-----------------------------------------</p>
            <div></div>
          </div> */}
          {/* <div className='box'></div> */}
          <div className='boxright'>
            <h1>Tracker</h1>
            <p>-----------------------------------------</p>
            <div className='tracker-info'>
              <div className='current-phase'>
                You are currently in your <span style={{fontWeight: 700}}>{periodData.currentPhase}</span> phase.
              </div>
              <br></br>    
              <div className='next-period-start'>
                You are expected to start your period on <span style={{fontWeight: 700}}>{formatDate(periodData.nextPeriodStart)}</span>.
              </div>
            </div>
          </div>
          {/* <br></br>
          <br></br>
          <br></br> */}
      </div>
    
  );
};

export default HomePage;