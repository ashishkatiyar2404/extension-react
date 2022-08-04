import React, { useEffect, useState } from "react";
import axios from "axios";

const Quotes = () => {
  const [randomQuote, setRandomQuote] = useState({
    content:
      "It is not wise to judge others based on your own preconceptions and by their appearances",
    author: "ITACHI UCHIHA",
  });
  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get(
          "https://api.quotable.io/random?maxLength=90"
        );
        console.log(response);
        setRandomQuote({
          content: response.data.content.slice(0, -1),
          author: response.data.author.toUpperCase(),
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <div>
      <div>" {randomQuote.content} "</div>
      <span style={{ textDecoration: "underline" }}>
        -by {randomQuote.author}
      </span>
    </div>
  );
};

export default Quotes;
