
import { useState, useEffect } from "react";

function random(apiArrayValue) {
  return apiArrayValue[Math.ceil(Math.random() * apiArrayValue.length)];
}

export default function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [output, setOutPut] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data)
      });
  }, []);

  function changeQuote() {
    setOutPut(random(quotes));
  }

  return (
    <main>
      <h1>Project 3: Quote Generator</h1>
      <section>
        <button onClick={changeQuote}>New Quote</button>
        <h3>
          {output?.text} output 
        </h3>
        <i>- {output?.author}</i>
      </section>
    </main>
  );
}
