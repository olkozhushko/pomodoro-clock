import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const LengthLabel = ({title, pickedLength, btnId}) => {
  const titleClass = title === "Break Length" ? 
    "length-picker__label-title_break" : 
    "length-picker__label-title_session";
  return (
    <div className="length-picker__label">
      <h3 className={`length-picker__label-title ${titleClass}`}>{title}</h3>
      <div className="length-picker__nav-panel">
        <button className={"length-picker__nav-btn nav-btn_up " + btnId}>
          <FontAwesomeIcon
            icon={faArrowUp}
            className="length-picker__nav-icon"
          />
        </button>
        <span className="length-picker__length-text">{pickedLength}</span>
        <button className={"length-picker__nav-btn nav-btn_down " + btnId}>
          <FontAwesomeIcon
            icon={faArrowDown}
            className="length-picker__nav-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default LengthLabel;
