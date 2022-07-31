import React from "react";

const CurrentTime = () => {
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
  return <div className="time">{getTime()}</div>;
};

export { CurrentTime };
