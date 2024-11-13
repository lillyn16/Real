import React from 'react';
import WeeklyCalendarView from '../../components/week-calendar-view/week-calendar-view';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to REAL</h1>
      <WeeklyCalendarView /> 
    </div>
  );
};

export default HomePage;