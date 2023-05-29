
// import { useState, useEffect } from "react";

// // function random(apiArrayValue) {
// //   return apiArrayValue[Math.ceil(Math.random() * apiArrayValue.length)];
// // }

// export default function Quote() {
//   const [quotes, setQuotes] = useState([]);
//   const [array, setArray] = useState('');

//  const newArray = [...quotes];

//   useEffect(() => {
//     fetch("https://type.fit/api/quotes")
//       .then((res) => res.json())
//       .then((data) => {
//         setQuotes(data)
//       });
//   }, []);

//   // function changeQuote() {
//   //   setOutPut(random(quotes));
//   // }


//   const call = () => {
//     setArray(array === 0 ? array.length + 1 : array - 1);
// };

//   return (
//     <main>
//       <h1>Project 3: Quote Generator</h1>
//       <section>
// <button onClick={call}>Click Me{e.text}{e.}</button>
//       </section>
//     </main>
//   );
// }
