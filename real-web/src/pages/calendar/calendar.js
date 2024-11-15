import React from 'react';
import WeeklyCalendarView from '../../components/week-calendar-view/week-calendar-view';

const CalendarPage = () => {
  return (
    <div className="calendar-container">
      <div className="Rows">
        <button className="arrowbutton"><i class="fa-solid fa-chevron-left"></i></button>
        <div>
          <WeeklyCalendarView /> 
          <table>
            <tr className="logrow">
              <td className="logday">
                <p>
                  <h4>8 Days <br />Until Period</h4>
                  <button className="log">Log Period</button>
                </p>
                <p>
                  <h4>Symptoms</h4>
                  cramp<br />
                  acne<br />
                  bloating
                </p>
                <p>
                  <a class="log" href="/symptoms">Log Symptoms</a>
                </p>
              </td>
              <td className="logday">
                <p>
                  <h4>7 Days <br />Until Period</h4>
                  <button className="log">Log Period</button>
                </p>
                <p>
                  <h4>Symptoms</h4>
                  cramp<br />
                  acne<br />
                  bloating
                </p>
                <p>
                  <a class="log" href="/symptoms">Log Symptoms</a>
                </p>
              </td>
              <td className="logday">
                <p>
                  <h4>6 Days <br />Until Period</h4>
                  <button className="log">Log Period</button>
                </p>
                <p>
                  <h4>Symptoms</h4>
                  cramp<br />
                  acne<br />
                  bloating
                </p>
                <p>
                  <a class="log" href="/symptoms">Log Symptoms</a>
                </p>
              </td>
              <td className="logday">
                <p>
                  <h4>5 Days <br />Until Period</h4>
                  <button className="log">Log Period</button>
                </p>
                <p>
                  <h4>Symptoms</h4>
                  cramp<br />
                  acne<br />
                  bloating
                </p>
                <p>
                  <a class="log" href="/symptoms">Log Symptoms</a>
                </p>
              </td>
              <td className="logday">
                <p>
                  <h4>4 Days <br />Until Period</h4>
                </p>
              </td>
              <td className="logday">
                <p>
                  <h4>3 Days <br />Until Period</h4>
                </p>
              </td>
              <td className="logday">
                <p>
                  <h4>2 Days <br />Until Period</h4>
                </p>
              </td>
            </tr>
          </table>
        </div>
        <button className="arrowbutton"><i class="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
  );
};

export default CalendarPage;