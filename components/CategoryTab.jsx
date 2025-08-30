import { useRef, useEffect, useState } from "react";

import "../css/CategoryTab.scss";

function CategoryTab({ labels = [], activeIndex, onChange }) {
  const menuRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    const widths = menuRefs.current.map((el) => el?.offsetWidth || 0);
    setMaxWidth(Math.max(...widths));
  }, [labels]);

  useEffect(() => {
    const el = menuRefs.current[activeIndex];
    if (el) {
      const left = el.offsetLeft + (el.offsetWidth - maxWidth) / 2;
      setIndicatorStyle({ left: `${left}px`, width: `${maxWidth}px` });
    }
  }, [activeIndex, maxWidth]);

  return (
    <div className="category-tab-content">
      {labels.map((label, i) => (
        <div
          key={label}
          className={`category ${i === activeIndex ? "active" : ""}`}
          ref={(el) => (menuRefs.current[i] = el)}
          onClick={() => onChange(i)}
        >
          <p>{label}</p>
        </div>
      ))}
      <div className="tab-bar" style={indicatorStyle} />
    </div>
  );
}

export default CategoryTab;
