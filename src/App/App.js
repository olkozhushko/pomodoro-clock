import React from "react";

import LengthPicker from "../components/LengthPicker/LengthPicker";
import SessionBlock from "../components/SessionBlock/SessionBlock";
import NavPanel from "../components/NavPanel/NavPanel";

import { handleButtonClicks } from "../utils/handleClicks";
import playBeep from "../utils/playBeep";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLabelValue: 5,
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
    
    //use helper function to handle all the buttons clicks in the app;
    const data = handleButtonClicks(target, this.state);

    this.setState({
      ...data
    });
    
    //if we know that the previous state of play is false and now it's changed to true
    //so we can set our counter with setinterval and clear interval if condition is not met;
    if(data.play && !this.state.play) {
      this.timer = setInterval(() => this.setCounter(), 1000);
    } else if(data.play && this.state.play) {
      return;
    } else if (this.timer) {
      clearInterval(this.timer);
    }
  }

  setCounter() {
    let breakStarted = this.state.breakStarted;
    let min = this.state.sessionMinutes;
    let sec = this.state.sessionSeconds;
    
    //if session time is up we start break timer; 
    if (!this.state.breakStarted) {
      if (sec === 0 && min === 0) {
        breakStarted = true;
        //play beep sound when break session started;
        playBeep()
          .then(result => {
            console.log(result);
          })
          .catch(err => console.log(err));
        min = this.state.breakLabelValue;
      }
    } else if (this.state.breakStarted) {
      if (sec === 0 && min === 0) {
        breakStarted = false;
        //play beep sound when break session finished;
        playBeep()
          .then(result => {
            console.log(result);
          })
          .catch(err => console.log(err));
        min = this.state.sessionLabelValue;
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

  componentWillUnmount() {
   if(this.timer) {
     clearInterval(this.timer);
   }
  }

  render() {
    const { breakLabelValue, sessionLabelValue, breakStarted } = this.state;

    let minutes = this.state.sessionMinutes < 10 ?
      "0" + this.state.sessionMinutes : this.state.sessionMinutes;
    let seconds = this.state.sessionSeconds < 10 ?
      "0" + this.state.sessionSeconds : this.state.sessionSeconds;
    
    return (
      <div className="app" onClick={e => this.handleClick(e) }>
        <Header />
        <LengthPicker
          pickedLengthBreak={breakLabelValue}
          pickedLengthSession={sessionLabelValue}
        />
        <SessionBlock minutes={minutes} seconds={seconds} breakStarted={breakStarted}/>
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
