import React from 'react';

class StopWatch extends React.Component {
  constructor() {
    super();
    this.state = {
      stopWatch: {
        centi: 0,
        second: 0,
        minutes: 0,
        hour: 0,
      },
    };
    this.timer = null;
  }

  //   start

  start = () => {
    let btn = document.getElementById('start-watch');
    btn.style.display = 'none';
    let btn2 = document.getElementById('stop-watch');
    btn2.style.display = 'inline-block';

    this.timer = setInterval(() => {
      this.setState((prevState) => {
        let stopWatch = Object.assign({}, prevState.stopWatch);
        if (stopWatch.centi < 99) {
          stopWatch.centi = stopWatch.centi + 1;
        } else if (stopWatch.centi >= 99 && stopWatch.second >= 0) {
          stopWatch.centi = 0;
          stopWatch.second = stopWatch.second + 1;
        } else if (stopWatch.second >= 99 && stopWatch.minutes >= 0) {
          stopWatch.minutes = stopWatch.minutes + 1;
          stopWatch.second = 0;
          stopWatch.centi = 0;
        } else if (stopWatch.minutes >= 99 && stopWatch.hour >= 0) {
          stopWatch.second = 0;
          stopWatch.centi = 0;
          stopWatch.minutes = 0;
          stopWatch.hour = stopWatch.hour + 1;
        }
        return { stopWatch };
      });
    }, 100);
  };

  // stop function

  stop = () => {
    clearInterval(this.timer);
    let stop = document.getElementById('stop-watch');
    stop.style.display = 'none';
    let div = document.getElementById('resume-div');
    div.style.display = 'block';
  };

  // resume function

  resume = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        let stopWatch = Object.assign({}, prevState.stopWatch);
        stopWatch.hour = stopWatch.hour;
        stopWatch.minutes = stopWatch.minutes;
        stopWatch.second = stopWatch.second;
        stopWatch.centi = stopWatch.centi + 1;
        return { stopWatch };
      });
    }, 100);
    let div = document.getElementById('resume-div');
    div.style.display = 'none';
    let stop = document.getElementById('stop-watch');
    stop.style.display = 'inline-block';
  };

  // reset function

  reset = () => {
    this.setState((prevState) => {
      let stopWatch = Object.assign({}, prevState.stopWatch);
      stopWatch.hour = 0;
      stopWatch.minutes = 0;
      stopWatch.second = 0;
      stopWatch.centi = 0;
      return { stopWatch };
    });

    let start = document.getElementById('start-watch');
    start.style.display = 'inline-block';
    let div = document.getElementById('resume-div');
    div.style.display = 'none';
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let { hour, minutes, second, centi } = this.state.stopWatch;
    return (
      <>
        <div>
          <h1 className='timer'>
            {' '}
            {hour} : {minutes} : {second} : {centi}
          </h1>
          <span>
            <div>
              <button onClick={this.start} className='all-btn' id='start-watch'>
                Start
              </button>

              <button onClick={this.stop} className='all-btn' id='stop-watch'>
                Stop
              </button>
            </div>
            <div className='resume-div' id='resume-div'>
              <button onClick={this.resume} className='all-btn'>
                Resume{' '}
              </button>
              <button onClick={this.reset} className='all-btn'>
                Reset{' '}
              </button>
            </div>
          </span>
        </div>
      </>
    );
  }
}

export default StopWatch;
