import { useState } from "react";

import "../css/Calendar.scss";

function Calendar() {
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDate = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const prevDates = Array.from({ length: firstDate }, () => null);
  const currentDates = Array.from({ length: lastDate }, (_, i) => i + 1);
  const totalContents = prevDates.length + currentDates.length;
  const nextDatesContents = (7 - (totalContents % 7)) % 7;
  const nextDates = Array.from({ length: nextDatesContents }, () => null);
  const contents = [...prevDates, ...currentDates, ...nextDates];

  const today = new Date();
  const currentMonth =
    today.getFullYear() === year && today.getMonth() === month;

  const goPrev = () =>
    setDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  const goNext = () =>
    setDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));

  return (
    <div className="calendar-content">
      <div className="calendar-nav">
        <p className="prev-month" onClick={goPrev}>
          ◀
        </p>
        <p className="current-month">{`${year}년 ${month + 1}월`}</p>
        <p className="next-month" onClick={goNext}>
          ▶
        </p>
      </div>
      <div className="week-content">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <p key={day} className="day">
            {day}
          </p>
        ))}
      </div>
      <div className="calendar">
        {contents.map((d, i) => {
          const isToday = currentMonth && d === today.getDate();
          return (
            <p
              key={i}
              className={`date${isToday ? " today" : ""}${d ? "" : " blank"}`}
              aria-label={d ? `${year}-${month + 1}-${d}` : undefined}
            >
              {d ?? ""}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
