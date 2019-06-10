import React from "react";

const SessionBlock = ({minutes, seconds}) => (
    <div className="session-block">
      <h3 className="session-block__title">Session </h3>
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