import React from "react";

import LengthLabel from "../LengthLabel/LengthLabel";

import "./LengthPicker.css";

const LengthPicker = ({pickedLengthBreak, pickedLengthSession}) => {
    return (
        <div className="length-picker">
          <LengthLabel 
            pickedLength={pickedLengthBreak} 
            title="Break Length"
            btnId={"break"}/>
          <LengthLabel 
            pickedLength={pickedLengthSession} 
            title="Session Length"
            btnId={"session"}/>
        </div>
    )
}

export default LengthPicker;

