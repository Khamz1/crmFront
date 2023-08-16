import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.timeCount, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  timeCount = () => {
    const { initialTime } = this.props;
    const now = new Date();
    const targetTime = now.getTime() + initialTime * 1000;

    const leftUntil = targetTime - now.getTime();

    if (leftUntil <= 0) {
      clearInterval(this.interval);
      this.setState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
      });
      return;
    }

    const days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    const hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    const seconds = Math.floor(leftUntil / 1000) % 60;

    this.setState({
      days: days.toString().padStart(2, '0'),
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0')
    });
  };

  render() {
    return (
      <div>
        <div>
          <span>{this.state.days}</span>
          <span>Days</span>
        </div>
        <div>
          <span>{this.state.hours}</span>
          <span>Hours</span>
        </div>
        <div>
          <span>{this.state.minutes}</span>
          <span>Minutes</span>
        </div>
        <div>
          <span>{this.state.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
    );
  }
}

export default Timer;
