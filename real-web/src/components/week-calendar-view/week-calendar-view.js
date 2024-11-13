import React, { useEffect, useState } from 'react';
import './week-calendar-view.css';
import periodVine from '../../images/PeriodVine.png'
import { getPhase } from '../../services/api';


const WeeklyCalendarView = () => {
  const [periodData, setPeriodData] = useState(null);
  const [isPeriodWeek, setIsPeriodWeek] = useState(false);

  useEffect(() => {
    const getPhaseData = async () => {
      try {
        const phaseData = await getPhase(1);  // replace with user id
        setPeriodData({
          nextPeriodStart: phaseData.nextPeriodStart,
          nextPeriodEnd: phaseData.nextPeriodEnd
        });
        setIsPeriodWeek(phaseData.isCurrentWeekPeriod); 
        console.log(phaseData);
      } catch (error) {
        console.error('Error fetching period data:', error);
      }
    }

    getPhaseData();
  }, []);

  const renderDays = () => {
    const today = new Date();
    // console.log(today)

    const startOfWeek = new Date(today)
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday
    // console.log(startOfWeek)

    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);

    const showPeriodVine = isPeriodWeek && day >= new Date(periodData?.nextPeriodStart) &&
                            day <= new Date(periodData?.nextPeriodEnd);

    const isHighlighted = day.toDateString() === today.toDateString();

      return (
        <div key={i} className={`day ${isHighlighted ? 'highlight' : ''}`}>
          {day.toDateString()}
          <hr className='break' />
          {showPeriodVine && ( 
            <div className='vine-img-container'>
                <img className="vine-img" src={periodVine} alt="vine" />
            </div> )}
        </div>
      );
    });
  };

  return (
    <div className="weekly-view-container">
      <h2>Weekly Menstrual Tracker</h2>
      <div className="days-container">{renderDays()}</div>
    </div>
  );
};

export default WeeklyCalendarView;