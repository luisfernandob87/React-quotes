import React, { useState } from "react";
import quotes from "../quotes.json";

const colors = ["#DE1854","#BC2E7C","#8A448F","#574E8C","#334F76","#2F4858","#00948C","#008F4A","#588500","#967000","#C64E0E","#5CBAB3","#C0FCF7","#48817C","#0086FF","#5CBAB3" ];

const Quote = () => {
  
  let indexRandom = Math.floor(Math.random()*quotes.length)
  
  const [ index, isIndex] = useState(indexRandom);

  let colorRandom = Math.floor(Math.random()*colors.length);
  console.log(colorRandom);

  const chgQuote = ()=>{
    let indexRandom = Math.floor(Math.random()*quotes.length)
    isIndex(indexRandom)
  }
  let newColor = colors[colorRandom];
  document.body.style.background = newColor;

  return (
    <div className="container" style={{color:newColor}}>
      <p><i className="fa-solid fa-quote-left"></i> {quotes[index].quote}</p>
      <p>{quotes[index].author}</p>   
      <button style={{backgroundColor:newColor }} onClick={chgQuote}><picture><i className="fa-solid fa-chevron-right"></i></picture></button>
    </div>
  );
};

export default Quote;
