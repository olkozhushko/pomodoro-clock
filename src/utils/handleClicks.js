export const handleButtonClicks = (target, state) => {
  if (target.classList.contains("nav-btn_up")) {
    if (target.classList.contains("break")) {
      return {
        ...state,
        breakLabelValue: state.breakLabelValue + 1
      };
    }
    if (target.classList.contains("session")) {
      return {
        ...state,
        sessionLabelValue: state.sessionLabelValue + 1,
        sessionMinutes: state.sessionLabelValue + 1
      };
    }
  }
  if (target.classList.contains("nav-btn_down")) {
    if (target.classList.contains("break")) {
      return {
        ...state,
        breakLabelValue: state.breakLabelValue - 1
      };
    }
    if (target.classList.contains("session")) {
      return {
        ...state,
        sessionLabelValue: state.sessionLabelValue - 1,
        sessionMinutes: state.sessionLabelValue - 1
      };
    }
  }
  if (target.classList.contains("btn-play")) {
    return {
      ...state,
      play: true
    };
  }
  if (target.classList.contains("btn-pause")) {
    return {
      ...state,
      play: !state.play
    };
  }
  if (target.classList.contains("btn-refresh")) {
    return {
      sessionLabelValue: 25,
      breakLabelValue: 5,
      sessionMinutes: 25,
      sessionSeconds: 0,
      play: false,
    };
  }
};
