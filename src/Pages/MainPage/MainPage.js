import React from "react";
import "./MainPage.css";
import { CurrentTime } from "./CurrentTime";
import { useExtension } from "../../Contexts/context";

const MainPage = () => {
  const { userName, mainFocus, setUserName, setMainFocus } = useExtension();
  function TodayDate() {
    return new Date().toDateString();
  }

  // MAIN FOCUS HANDLER
  function focusHandler(e) {
    if (e.code === "Enter" && e.target.value !== "") {
      const inputFocus =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
      console.log(inputFocus);
      // localStorage.setItem("focusToken", JSON.stringify(inputFocus));
      localStorage.setItem("focusToken", inputFocus);
      setMainFocus(inputFocus);
    }
  }
  console.log(mainFocus);

  // EDIT USER NAME HANDLER
  function userNameHandler() {
    setUserName("");
    localStorage.getItem("userName", "");
    // console.log("edit user handler");
  }

  // EDIT FOCUS HANDLER
  function editFocusHandler() {
    setMainFocus("");
    localStorage.getItem("focusToken", "  ");
    // console.log("edit focus handler");
  }

  return (
    <div className="mainFocus__conatiner welcome__container">
      <div>{TodayDate()}</div>
      <div>
        <CurrentTime />
      </div>
      <div>Greeting of Morning, {userName}</div>
      {/* <div>My main focus is : {focus}</div> */}
      <div className="welcome__input__container">
        {mainFocus ? (
          <div>
            My Main Focus is :
            {/* JSON.parse(localStorage.getItem("focusToken")) */}
            {mainFocus}
          </div>
        ) : (
          <input
            className="input__write"
            placeholder="Enter Your Focus"
            type="text"
            onKeyDown={focusHandler}
          />
        )}
      </div>
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
    </div>
  );
};

export default MainPage;
