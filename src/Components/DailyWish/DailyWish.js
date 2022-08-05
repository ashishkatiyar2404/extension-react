import React, { useEffect, useState } from "react";
import { useExtension } from "../../Contexts/context";

const DailyWish = () => {
  const { userName } = useExtension();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 4) setGreeting("Good Night");
    else if (hour < 11) setGreeting("Good Morning");
    else if (hour < 16) setGreeting("Good Afternoon");
    else if (hour < 19) setGreeting("Good Evening");
    else setGreeting("Good Night");
    // switch (hour) {
    //   case hour < 4:
    //     setGreeting("Good Night");
    //     break;

    //   case hour < 11:
    //     setGreeting("Good Morning");
    //     break;

    //   case hour < 16:
    //     setGreeting("Good Afternoon");
    //     break;

    //   case hour < 19:
    //     setGreeting("Good Evening");
    //     break;

    //   default:
    //     setGreeting("Good Night");
    // }
  }, []);

  return (
    <div className="greeting">
      {greeting}, {userName}
    </div>
  );
};

export default DailyWish;
