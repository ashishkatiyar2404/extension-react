import React from "react";
import { useExtension } from "../../Contexts/context";
import "./WelcomePage.css";

const WelcomePage = () => {
  const { setUserName } = useExtension();

  function keyDownHandler(e) {
    if (e.code === "Enter" && e.target.value !== "") {
      const inputValue =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
      setUserName(inputValue);
      // localStorage.setItem("userName", JSON.stringify(inputValue));
      localStorage.setItem("userName", inputValue);
    }
  }
  return (
    <div className="welcome__container">
      <div className="welcome__msg">Hello! 🙋‍♂️ What's Your Good Name?</div>
      <div className="welcome__input__container">
        <input
          className="input__write"
          placeholder="Write Name , Press Enter"
          type="text"
          onKeyDown={keyDownHandler}
        />
      </div>
    </div>
  );
};

export default WelcomePage;
