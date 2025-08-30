import { useContext, useEffect } from "react";
import AddMenuContext from "../contexts/AddMenuContext";

import "../css/TodayList.scss";

function EmptyList() {
  const setAddMenu = useContext(AddMenuContext);

  return (
    <div className="empty-content">
      <i
        className="bi bi-plus-circle-fill puls"
        onClick={() => {
          setAddMenu(true);
        }}
      ></i>
    </div>
  );
}

export default EmptyList;
