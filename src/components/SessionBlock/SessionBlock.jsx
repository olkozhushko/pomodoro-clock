import React from "react";

import "./SessionBlock.css";

const SessionBlock = ({minutes, seconds, breakStarted}) => (
    <div className="session-block">
      <h3 className="session-block__title">{!breakStarted ? "Session" : "Break"}</h3>
      <p className="session-block__timer">
          <span 
            className="session-block__timer-data"
          >
            {`${minutes}:${seconds}`}
        </span>
      </p>
    </div>
)

export default SessionBlock;