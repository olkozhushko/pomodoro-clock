import React from "react";

import LengthLabel from "../LengthLabel/LengthLabel";

const LengthPicker = ({pickedLengthBreak, pickedLengthSession}) => {
    return (
        <div className="length-picker">
          <LengthLabel 
            pickedLength={pickedLengthBreak} 
            title="Break Length"
            id={"break"}/>
          <LengthLabel 
            pickedLength={pickedLengthSession} 
            title="Session Length"
            id={"session"}/>
        </div>
    )
}

export default LengthPicker;

