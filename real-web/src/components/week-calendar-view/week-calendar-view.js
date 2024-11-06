import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './week-calendar-view.css';

const WeeklyCalendarView = () => {
  const [periodData, setPeriodData] = useState(null);
  const [isPeriodWeek, setIsPeriodWeek] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5154/api/phase/1') // change with actual user id
      .then((response) => {
        const { nextPeriodStart, nextPeriodEnd, isCurrentWeekPeriod } = response.data;
        setPeriodData({ nextPeriodStart, nextPeriodEnd });
        setIsPeriodWeek(isCurrentWeekPeriod);
      })
      .catch((error) => console.error('Error fetching period data:', error));
  }, []);

  const renderDays = () => {
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // Sunday
    // console.log(today)
    // console.log(startOfWeek)

    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);

      const isHighlighted = isPeriodWeek && day >= new Date(periodData?.nextPeriodStart) &&
                            day <= new Date(periodData?.nextPeriodEnd);

      return (
        <div key={i} className={`day ${isHighlighted ? 'highlight' : ''}`}>
          {day.toDateString()}
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