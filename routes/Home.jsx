import "../css/Home.scss";
import Logo from "../src/assets/logo.png";

function Home() {
  return (
    <div className="home-container">
      <div className="logo-content">
        <img src={Logo} className="logo-image"/>
      </div>
      <div className="calendar-content">
        <div className="calendar-nav">
          <p className="prev-month">◀</p>
          <p className="current-month">MONTH</p>
          <p className="next-month">▶</p>
        </div>
        <div className="week-content">
          <p className="day">일</p>
          <p className="day">월</p>
          <p className="day">화</p>
          <p className="day">수</p>
          <p className="day">목</p>
          <p className="day">금</p>
          <p className="day">토</p>
        </div>
        <div className="calendar">

        </div>
      </div>
      <div className="today-menu-list-content"></div>
    </div>
  );
}

export default Home;
