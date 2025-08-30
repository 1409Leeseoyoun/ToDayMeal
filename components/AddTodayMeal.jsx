import { useContext } from "react";
import AddMenuContext from "../contexts/AddMenuContext";

import "../css/AddTodayMeal.scss";

function AddTodayMeal() {
  const setAddMenu = useContext(AddMenuContext);

  return (
    <div className="blur-container">
      <div className="add-today-meal-content">
        <div className="image-content">
          <i className="bi bi-plus-circle-fill puls"></i>
        </div>
        <div className="menu-input-content">
          <input
            type="text"
            placeholder="메뉴 이름을 알려주세요"
            className="menu-input"
          />
        </div>
        <div className="keyword-input-content">
          <input
            type="text"
            placeholder="키워드 입력"
            className="keyword-input"
          />
        </div>
        <div className="cancel-complete-content">
          <p onClick={() => setAddMenu(false)}>취소</p>
          <p>완료</p>
        </div>
      </div>
    </div>
  );
}

export default AddTodayMeal;
