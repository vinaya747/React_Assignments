import { React, useState }  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import MyToggleBtn from "./components/MyToggleBtn";

import "./components/question.css";
import "./components/toggleBtn.css";

function App() {

  const dateForm = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date().toLocaleDateString("en-IN", dateForm);
  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);
  const upDateTime = () => {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(upDateTime, 1000);

  const [toggled, setToggled] = useState(true);
  return (
    <div className="App">
    <div >
      <div className="digital-clock-main">
        <div className="myClockTitle">
          <FontAwesomeIcon className="clock-icon fa-2x" icon={faClock} />
          Digital Clock
        </div>

        <div className="myClockContent">
          <div className="date-toggle-class">
            <MyToggleBtn toggled={toggled} setToggled={setToggled} />
            <FontAwesomeIcon
              className="calendar-icon fa-3x"
              icon={faCalendarAlt}
            />
          </div>

          <br />

          <div className="display-clock">
            <h3 id="time">{ctime}</h3>
            {toggled ? <p id="date">{date}</p> : <></>}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;