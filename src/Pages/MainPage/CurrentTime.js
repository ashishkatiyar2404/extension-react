import React from "react";

const CurrentTime = () => {
  const AMPM = () => {
    const ampm = new Date().getHours();
    return ampm > 12 && ampm < 24 ? "PM" : "AM";
  };
  const getTime = () => {
    return (
      new Date()
        .getHours()
        .toLocaleString("en-US", { minimumIntegerDigits: 2 }) +
      ":" +
      new Date()
        .getMinutes()
        .toLocaleString("en-US", { minimumIntegerDigits: 2 })
    );
  };
  return (
    <div className="time">
      {getTime()} {AMPM()}
    </div>
  );
};

export { CurrentTime };
