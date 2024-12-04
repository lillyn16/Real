import React, { useEffect, useState } from 'react';
import WeeklyCalendarView from '../../components/week-calendar-view/week-calendar-view';
import { getPhase, logPeriodDay } from '../../services/api';

const CalendarPage = () => {
  const [periodData, setPeriodData] = useState(null);
  const [daysUntilPeriod, setDaysUntilPeriod] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const getPhaseData = async () => {
      try {
        const phaseData = await getPhase(userId);
        setPeriodData({
          nextPeriodStart: phaseData.nextPeriodStart,
          nextPeriodEnd: phaseData.nextPeriodEnd
        });
        calculateDaysUntilPeriod(phaseData.nextPeriodStart);
      } catch (error) {
        console.error('Error fetching period data:', error);
      }
    }

    getPhaseData();
  }, []);

  const calculateDaysUntilPeriod = (nextPeriodStart) => {
    const today = new Date();
    const startOfPeriod = new Date(nextPeriodStart);
    const diffInTime = startOfPeriod - today;
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
    
    // Generate an array of days leading up to the period start date
    const days = Array.from({ length: 8 }, (_, i) => diffInDays - i).reverse();
    setDaysUntilPeriod(days);
  };

  const logPeriod = async (x) => {
    const today = new Date();
    const newPeriodStart = new Date(today);
    newPeriodStart.setDate(today.getDate() - x);

    const periodLogRequest = {
      userId,
      date: newPeriodStart
    };

    try {
      const result = await logPeriodDay(periodLogRequest);
      console.log(result);
    } catch (error) {
      console.error('Error logging period');
    }
  };

  return (
    <div className="calendar-container">
      <div className="Rows">
        {/* <button className="arrowbutton"><i class="fa-solid fa-chevron-left"></i></button> */}
        <div>
          <WeeklyCalendarView /> 
          <table>
            <tbody>
              <tr className="logrow">
                {daysUntilPeriod.map((days, index) => (
                  <td key={index} className="logday">
                    <p>
                      <h4>{days} Days <br />Until Period</h4>
                      <button className="log" onClick={() => logPeriod(days)}>Log Period</button>
                    </p>
                    <p>
                      <h4>Symptoms</h4>
                      cramp<br />
                      acne<br />
                      bloating
                    </p>
                    <p>
                      <a className="log" href="/symptoms">Log Symptoms</a>
                    </p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        {/* <button className="arrowbutton"><i class="fa-solid fa-chevron-right"></i></button> */}
      </div>
    </div>
  );
};

function logPeriod(x){
  const today = new Date();

  const newPeriodStart = new Date(today)
  newPeriodStart.setDate(today.getDate() - x); //hopefully would return the correct date 
                                              //for the start of the period if calender shows 
                                              //today's date in middle
  console.log(newPeriodStart) // doesn't seem to work properly, sends automatically
  
  // testing code
  //console.log("test" + newPeriodStart)
  //console.log(x)
  //console.log("hello world E")
}

export default CalendarPage;