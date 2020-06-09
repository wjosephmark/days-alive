import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';

// export default class App extends Component {
//   render() {
//     return (
//       <div className='app'>
//         <h1>hello</h1>
//       </div>
//     );
//   }
// }

export default function Days(){

  const [userBirthday, setUserBirthday] = useState("")
  const [time, setTime] = useState("none")

  const now = () => {
    return(
      <Moment format="YYYY/MM/DD"/>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleYearsClick = () => {
    setTime("years")
    renderContent()
  }
  const handleMonthsClick = () => {
    setTime("months")
    renderContent()
  }
  const handleWeeksClick = () => {
    setTime("weeks")
    renderContent()
  }
  const handleDaysClick = () => {
    setTime("days")
    renderContent()
  }
  const handleMinutesClick = () => {
    setTime("minutes")
    renderContent()
  }
  const handleSecondsClick = () => {
    setTime("seconds")
    renderContent()
  }

  const renderContent = () => {
    if(time == "none"){
      return(
        <div className="app">

          <div className="buttons">
            <button className="btn" onClick={() => handleYearsClick()}>Years</button>
            <button className="btn" onClick={() => handleMonthsClick()}>Months</button>
            <button className="btn" onClick={() => handleWeeksClick()}>Weeks</button>
            <button className="btn" onClick={() => handleDaysClick()}>Days</button>
            <button className="btn" onClick={() => handleMinutesClick()}>Minutes</button>
            <button className="btn" onClick={() => handleSecondsClick()}>Seconds</button>
          </div>

          <form className="form" onSubmit={handleSubmit}>
              <input type="text" name="birthday" placeholder="B-Day (YYYY-MM-DD)" onChange={e => setUserBirthday(e.target.value)} />
              {/* <button type="submit">Submit</button> */}
          </form>

        </div>
      )
    } else {
      return(
        <div className="app"> 

          <div className="display-wrapper">
            <Moment diff={userBirthday} unit={time}>{now()}</Moment>
            <p>{time}.</p>
          </div>

          <div className="buttons">
            <button className="btn" onClick={() => handleYearsClick()}>Years</button>
            <button className="btn" onClick={() => handleMonthsClick()}>Months</button>
            <button className="btn" onClick={() => handleWeeksClick()}>Weeks</button>
            <button className="btn" onClick={() => handleDaysClick()}>Days</button>
            <button className="btn" onClick={() => handleMinutesClick()}>Minutes</button>
            <button className="btn" onClick={() => handleSecondsClick()}>Seconds</button>
          </div>

        </div>
      )
    }
  }

  return(

    // renderContent()
      // <div className="app">
      //       <Moment diff="1976-04-19" unit="seconds">{now()}</Moment>
      //       <Moment diff="2015-04-19" unit="days">1976-04-19T12:59-0500</Moment> <p>Days</p>
      //       <Moment diff="2015-04-19" unit="years">1976-04-19T12:59-0500</Moment>

      //       <form onSubmit={handleSubmit}>
      //         <input type="text" name="birthday" placeholder="B-Day (YYYY-MM-DD)" onChange={e => setUserBirthday(e.target.value)} />
      //         <button type="submit">Submit</button>
      //       </form>
      // </div>
      <div className="app">
        {renderContent()}
      </div>
  )
}
