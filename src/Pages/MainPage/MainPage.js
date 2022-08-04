import React from "react";
import "./MainPage.css";
import { CurrentTime } from "./CurrentTime";
import { useExtension } from "../../Contexts/context";
import Weather from "../../Components/Weather/Weather";
import DailyWish from "../../Components/DailyWish/DailyWish";

const MainPage = () => {
  const { userName, mainFocus, setUserName, setMainFocus } = useExtension();

  // CURRENT DATE
  function TodayDate() {
    return new Date().toDateString();
  }

  // MAIN FOCUS HANDLER
  function focusHandler(e) {
    if (e.code === "Enter" && e.target.value !== "") {
      const inputFocus =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
      // localStorage.setItem("focusToken", JSON.stringify(inputFocus));
      localStorage.setItem("focusToken", inputFocus);
      setMainFocus(inputFocus);
    }
  }

  // EDIT USER NAME HANDLER
  function userNameHandler() {
    setUserName("");
    localStorage.getItem("userName", "");
  }

  // EDIT FOCUS HANDLER
  function editFocusHandler() {
    setMainFocus("");
    localStorage.getItem("focusToken", "  ");
  }

  return (
    <div className="mainFocus__conatiner welcome__container">
      <div className="weather__container">
        <Weather />
      </div>
      <div>{TodayDate()}</div>
      <div>
        <CurrentTime />
      </div>
      <div>
        <DailyWish />
      </div>
      <div className="welcome__input__container">
        {mainFocus ? (
          <div>My Main Focus is : {mainFocus}</div>
        ) : (
          <input
            className="input__write"
            placeholder="Enter Your Focus"
            type="text"
            onKeyDown={focusHandler}
          />
        )}
      </div>
      {mainFocus ? (
        <div className="edit__btn_container">
          {userName !== null && (
            <button className="btn btn-name" onClick={userNameHandler}>
              Edit Name
            </button>
          )}
          {mainFocus !== null && (
            <button className="btn btn-focus" onClick={editFocusHandler}>
              Edit Focus
            </button>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MainPage;
