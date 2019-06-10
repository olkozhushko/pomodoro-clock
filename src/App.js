import React from "react";

import LengthPicker from "./components/LengthPicker/LengthPicker";
import SessionBlock from "./components/SessionBlock/SessionBlock";
import NavPanel from "./components/NavPanel/NavPanel";

import { handleButtonClicks } from "./utils/handleClicks";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLableValue: 5,
      sessionLabelValue: 25,
      breakStarted: false,
      sessionSeconds: 0,
      sessionMinutes: 25,
      play: false
    };
  }

  handleClick(e) {
    let target = e.target.closest("button");

    if (!target) return;

    this.setState({
      ...handleButtonClicks(target, this.state)
    });
  }

  startCounter() {
    if(!this.state.play) {
      clearInterval(this.timer);
      return;
    }

    let breakStarted = this.state.breakStarted;
    let min = this.state.sessionMinutes;
    let sec = this.state.sessionSeconds;

    if (!this.state.breakStarted) {
      if (sec === 0 && min === 0) {
        breakStarted = true;
        min = this.state.breakLableValue;
      }
    } else if (this.state.breakStarted) {
      if (sec === 0 && min === 0) {
        breakStarted = false;
        min = this.state.sessionLableValue;
      }
    }

    if (this.state.sessionSeconds === 0) {
      sec = 59;
      min = min - 1;
    } else if (this.state.sessionSeconds !== 0) {
      sec = sec - 1;
    }

    this.setState({
      ...this.state,
      sessionMinutes: min,
      sessionSeconds: sec,
      breakStarted
    })
  }

  componentDidMount() {
    this.timer = setInterval(() => this.startCounter(), 1000);
  }

  render() {
    const { breakLabelValue, sessionLabelValue } = this.state;
    let minutes = this.state.sessionMinutes < 10 ?
      "0" + this.state.sessionMinutes : this.state.sessionMinutes;
    let seconds = this.state.sessionSeconds < 10 ?
      "0" + this.state.sessionSeconds : this.state.sessionSeconds;

    return (
      <div className="app" onClick={e => this.handleClick(e)}>
        <Header />
        <LengthPicker
          pickedLengthBreak={breakLabelValue}
          pickedLengthBreak={sessionLabelValue}
        />
        <SessionBlock minutes={minutes} seconds={seconds} />
        <NavPanel />
      </div>
    );
  }
}

const Header = () => (
  <header className="header">
    <h1>Pomodoro Clock</h1>
  </header>
);

export default App;
