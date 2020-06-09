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

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(userBirthday)    
  }

  const now = () => {
    return(
      <Moment format="YYYY/MM/DD"/>
    )
  }

  const handleYearsClick = () => {
    setTime("years")
    renderContent()
  }

  const renderContent = () => {
    if(time == "none"){
      return(
        <div className="app">
          <div className="buttons">
            <button onClick={() => handleYearsClick()}>Years</button>
          </div>
        </div>
      )
    } else {
      return(
        <Moment diff="1976-04-19" unit={time}>{now()}</Moment>
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
