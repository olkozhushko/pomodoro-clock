import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const LengthLabel = ({title, pickedLength, btnId}) => {
  return (
    <div className="length-picker__break">
      <h3 className="length-picker__length-title">{title}</h3>
      <div className="length-picker__nav-panel">
        <button className="length-picker__nav-btn nav-btn_up" data-id={btnId}>
          <FontAwesomeIcon
            icon={faArrowUp}
            className="length-picker__nav-icon"
          />
        </button>
        <span className="length-picker__length">{pickedLength}</span>
        <button className="length-picker__nav-btn nav-btn_down" data-id={btnId}>
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
