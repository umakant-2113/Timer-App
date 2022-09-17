import React from 'react';

class CountDown extends React.Component {
  constructor() {
    super();
    this.state = {
      time: {
        hour: 0,
        minutes: 0,
        second: 0,
      },
    };
    this.timer = null;
  }

  increamentHour = () => {
    this.setState((prevState) => {
      let time = Object.assign({}, prevState.time);
      time.hour = time.hour + 1;
      return { time };
    });
  };

  increamentMinutes = () => {
    this.setState((prevState) => {
      let time = Object.assign({}, prevState.time);
      time.minutes = time.minutes + 1;
      return { time };
    });
  };
  increamentSeconds = () => {
    this.setState((prevState) => {
      let time = Object.assign({}, prevState.time);
      time.second = time.second + 1;
      return { time };
    });
  };

  decreamentHour = () => {
    this.setState((prevState) => {
      let time = Object.assign({}, prevState.time);
      if (time.hour > 0) {
        time.hour = time.hour - 1;
        return { time };
      }
    });
  };
  decreamentMinutes = () => {
    this.setState((prevState) => {
      let time = Object.assign({}, prevState.time);
      if (time.minutes > 0) {
        time.minutes = time.minutes - 1;
        return { time };
      }
    });
  };

  decreamentSecond = () => {
    this.setState((prevState) => {
      let time = Object.assign({}, prevState.time);
      if (time.second > 0) {
        time.second = time.second - 1;
        return { time };
      }
    });
  };

  start = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        let time = Object.assign({}, prevState.time);
        if (time.hour > 0 && time.minutes === 0 && time.second == 0) {
          time.hour = time.hour - 1;
          time.minutes = 59;
          time.second = 59;
          return { time };
        } else if (time.minutes > 0 && time.second === 0) {
          time.minutes = time.minutes - 1;
          time.second = 59;
          return { time };
        } else if (time.second > 0) {
          time.second = time.second - 1;
          return { time };
        }
      });
    }, 1000);

    let btn = document.querySelector('.count-start');
    btn.style.display = 'none';
    let btn2 = document.querySelector('.count-stop');
    btn2.style.display = 'inline-block';
  };

  stop = () => {
    clearInterval(this.timer);
    let stop = document.querySelector('.count-stop');
    stop.style.display = 'none';
    let div = document.querySelector('.reset-btn-div');
    div.style.display = 'block';
  };

  resume = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        let time = Object.assign({}, prevState.time);
        time.hour = time.hour;
        time.minutes = time.minutes;
        time.second = time.second - 1;
        return { time };
      });
    }, 1000);
    let div = document.querySelector('.reset-btn-div');
    div.style.display = 'none';
    let stop = document.querySelector('.count-stop');
    stop.style.display = 'inline-block';
  };

  reset = () => {
    this.setState((prevState) => {
        let time = Object.assign({}, prevState.time);
        time.hour = 0;
        time.minutes = 0;
        time.second =0;
        return { time };
      });

    let stop = document.querySelector('.count-stop');
    stop.style.display = 'none';
    let btn = document.querySelector('.count-start');
    btn.style.display = 'inline-block';
    let div = document.querySelector('.reset-btn-div');
    div.style.display = 'none';
  };

  render() {
    return (
      <>
        <span className='count-span'>Hours : Minutes : Seconds </span>
        <div className='icon-div'>
          <i class='fa-solid fa-arrow-up' onClick={this.increamentHour}></i>
          <i class='fa-solid fa-arrow-up' onClick={this.increamentMinutes}></i>
          <i class='fa-solid fa-arrow-up' onClick={this.increamentSeconds}></i>
        </div>
        <div className='icon-div2'>
          {this.state.time.hour}: {this.state.time.minutes} :{' '}
          {this.state.time.second}
        </div>
        <button className='all-btn count-start' onClick={this.start}>
          Start{' '}
        </button>
        <button className='all-btn count-stop' onClick={this.stop}>
          Stop{' '}
        </button>
        <div className='reset-btn-div'>
          <button className='all-btn' onClick={this.resume}>
            {' '}
            Resume
          </button>
          <button className='all-btn' onClick={this.reset}>
            {' '}
            Reset{' '}
          </button>
        </div>
        <div className='icon-div'>
          {' '}
          <i class='fa-solid fa-arrow-down' onClick={this.decreamentHour}></i>
          <i
            class='fa-solid fa-arrow-down'
            onClick={this.decreamentMinutes}
          ></i>
          <i class='fa-solid fa-arrow-down' onClick={this.decreamentSecond}></i>
        </div>
      </>
    );
  }
}

export default CountDown;
