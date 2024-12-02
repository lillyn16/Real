import React, { useEffect, useState } from 'react';
import './week-calendar-view.css';
import periodVine from '../../images/periodVine.png'
import { getPhase } from '../../services/api';


const WeeklyCalendarView = () => {
  const [periodData, setPeriodData] = useState(null);
  const [isPeriodWeek, setIsPeriodWeek] = useState(false);

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const monthNumber = new Date().getMonth();
  let monthName = months[monthNumber];

  useEffect(() => {
    const getPhaseData = async () => {
      try {
        const phaseData = await getPhase(6);  // replace with user id
        setPeriodData({
          nextPeriodStart: phaseData.nextPeriodStart,
          nextPeriodEnd: phaseData.nextPeriodEnd
        });
        setIsPeriodWeek(phaseData.isCurrentWeekPeriod); 
        // console.log(phaseData);
      } catch (error) {
        console.error('Error fetching period data:', error);
      }
    }

    getPhaseData();
  }, []);

  const renderDays = () => {
    const today = new Date();

    const startOfWeek = new Date(today)
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday

    return Array.from({ length: 7 }, (_, i) => {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        const dateNumber = day.getDate();
        const dayOfWeek = day.toLocaleString('en-US', { weekday: 'long' });
      

    const showPeriodVine = isPeriodWeek && day >= new Date(periodData?.nextPeriodStart) &&
        day <= new Date(periodData?.nextPeriodEnd);

    // const showOvualtionVine = 

    const isHighlighted = day.toDateString() === today.toDateString();

      return (
        <div className='week-calendar-container'>
            <div key={i} className={`day ${isHighlighted ? 'highlight' : ''}`}>
                <div className='date-container'>
                    <div>{dayOfWeek}</div>
                    <div>{dateNumber}</div>
                </div>
                
                <hr className='calendar-hr' />
                {showPeriodVine && ( 
                    <div className='vine-img-container'>
                        <img className="vine-img" src={periodVine} alt="vine" />
                    </div> )}
            </div>
        </div>
      );
    });
  };

  return (
    <div className="weekly-view-container">
      <div className='month-container'>{monthName}</div>
      <div className='days-container'>{renderDays()}</div>
    </div>
  );
};

export default WeeklyCalendarView;