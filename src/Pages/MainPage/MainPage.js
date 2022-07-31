import React from "react";
import "./MainPage.css";
import { CurrentTime } from "./CurrentTime";

const MainPage = () => {
  function TodayDate() {
    return new Date().toDateString();
  }

  return (
    <div className="mainFocus__conatiner">
      <div>{TodayDate()}</div>
      <div>
        <CurrentTime />
      </div>
      <div>greeting of morning, username</div>
      <div>My main focus is :</div>
    </div>
  );
};

export default MainPage;
