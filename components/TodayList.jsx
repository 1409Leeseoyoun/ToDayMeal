import EmptyList from "./EmptyList";

function TodayList() {
  return (
    <div className="today-list-content">
      <p className="today-meals">오늘의 세끼</p>
      <div className="today-list">
        <EmptyList />
        <EmptyList />
        <EmptyList />
      </div>
    </div>
  );
}

export default TodayList;
