import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const NavPanel = () => {
    return (
        <div className="nav-panel">
          <button className="nav-panel__btn btn-play">
            <FontAwesomeIcon 
              icon={faPlay}
              className="nav-panel__btn-icon"/>
          </button>
          <button className="nav-panel__btn btn-pause">
            <FontAwesomeIcon 
              icon={faPause}
              className="nav-panel__btn-icon"/>
          </button>
          <button className="nav-panel__btn btn-refresh">
            <FontAwesomeIcon 
              icon={faSyncAlt}
              className="nav-panel__btn-icon"/>
          </button>
        </div>
    )
}

export default NavPanel;