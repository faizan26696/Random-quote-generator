import "./styles.css";
import React, { useState } from "react";

const quotes = [
  "The only way to do great work is to love what you do.",
  "If you can dream it, you can do it.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  "Never give up on what you really want to do. The person with big dreams is more powerful than one with all the facts.",
  "It's not how much you have, but how much you enjoy that makes happiness.",
  "Happiness is not something ready made. It comes from your own actions.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
];

const App = () => {
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  const handleClick = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <div className='App'>
      <h1>Random Quote Generator</h1>
      <p>{quote}</p>
      <button onClick={handleClick}>Get Another Quote</button>
    </div>
  );
};

export default App;
