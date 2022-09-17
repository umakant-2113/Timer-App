import StopWatch from './StopWatch';
import CountDown from './CountDown';
const App = () => {
  function handleStopWatch() {
    let div = document.querySelector('.as12');
    div.style.display = 'block';
  }
  function hideWatch() {
    let div = document.querySelector('.as12');
    div.style.display = 'none';
  }

  function showCountDown() {
    let div = document.querySelector('.count-down');
    div.style.display = 'block';
  }

  function showcount() {
    let div = document.querySelector('.count-down');
    div.style.display = 'none';
  }
  return (
    <>
      <h1 className='timer'> 🚀 Timer 🚀 </h1>
      <div className='div'>
        <div className='stop-watch'>
          <p onClick={handleStopWatch} className='p'>
            Show StopWatch{' '}
          </p>

          <div className='as12'>
            <span onClick={hideWatch} className='span'>
              {' '}
              ❌
            </span>
            <StopWatch />
          </div>
        </div>
        <div className='stop-count'>
          <p onClick={showCountDown} className='p'>
            Show CountDown{' '}
          </p>
          <div className='count-down'>
            <span onClick={showcount} className='span2'>
              {' '}
              ❌{' '}
            </span>
            <CountDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
